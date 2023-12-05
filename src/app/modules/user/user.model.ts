import { Schema, model } from 'mongoose';
import { User } from './user.interface';

const userSchema = new Schema<User>(
  {
    id: {
      type: 'String',
      required: true,
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

export const UserModel =  model<User>('User', userSchema)
