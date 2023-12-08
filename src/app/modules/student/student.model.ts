import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  StudentMethod,
  StudentTypeModel,
  UserName,
} from './student.interface';
import bycrypt from 'bcrypt'
import config from '../../config';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name Required'],
    maxlength: [20, 'First Name can not be more than 20 characters'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in campitalize format',
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last Name Required'] },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Name is Required'] },
  occupation: { type: String, required: [true, 'Occupation is Required'] },
  contactNumber: { type: String, required: [true, 'is Required'] },
  address: { type: String, required: [true, 'is Required'] },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father name is Required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Occupation is Required'],
  },
  fatherContactNumber: {
    type: String,
    required: [true, 'Contact number is Required'],
  },
  motherName: { type: String, required: [true, 'Mother name is Required'] },
  motherOccupation: {
    type: String,
    required: [true, 'Occupation is Required'],
  },
  motherContactNumber: {
    type: String,
    required: [true, 'Contact number is Required'],
  },
});

const studentSchema = new Schema<Student, StudentTypeModel>({
  id: { type: String, required: [true, 'id is Required'], unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'ID is Required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is Required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid',
    },
    required: [true, 'Gender is Required'],
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, 'Email is Required'], unique: true },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is Required'],
  },
  emergencyContactNumber: {
    type: String,
    required: [true, 'Emergency conatact number is Required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'B+', 'A-', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is Required'],
  },
  parmanentAddress: {
    type: String,
    required: [true, 'Parmanent address is Required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is Required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardina information is Required'],
  },
  profileImg: { type: String },
});



//virtual

studentSchema.virtual('fullName').get(function(){
  return this.name.firstName + this.name.middleName + this.name.lastName
})

//pre save middleware /hook

studentSchema.pre('save', async function(next){
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  // const user = this
  // //hashing password and save into db
  // user.password = await bycrypt.hash(user.password, Number(config.bycript_salt))
  // next()

})


//post save middleware / hook
studentSchema.post('save', function(){

})



//creating    custom statics method
studentSchema.statics.isUserExists = async function(id : string){
  const existingUser = await StudentModel.findOne({id})
  return existingUser
}


// studentSchema.methods.isUserExists = async function( id: string){
//   const existingUser = await StudentModel.findOne({id});
//   return existingUser
// }

export const StudentModel = model<Student, StudentTypeModel>('Student', studentSchema);
