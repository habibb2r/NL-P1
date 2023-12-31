import  bycrypt  from 'bcrypt';
import { Schema, model } from 'mongoose';
import { User } from './user.interface';
import config from '../../config';


const userSchema = new Schema<User>(
  {
    id: {
      type: 'String',
      required: true,
      unique: true
    },
    password: { type: 'String', required: true },
    needsPasswordChange: { type: 'boolean', default: true },
    role: {
      type: 'String',
      enum: ['student', 'admin', 'faculty'],
    },
    status: {
      type: 'String',
      enum: ['in-progress', 'blocked'],
      default: 'in-progress'
    },
    isDeleted: {
      type: 'Boolean',
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function(next){
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  //hashing password and save into db
  user.password = await bycrypt.hash(user.password, Number(config.bycript_salt))
  next()

});

userSchema.post('save', function(doc, next){
  doc.password = '';
  next();
})

export const UserModel =  model<User>('User', userSchema)
