import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName : string;
    fatherOccupation : string;
    fatherContactNumber : string;
    motherName : string;
    motherOccupation : string;
    motherContactNumber : string;
}


export type Student = {
    id : string;
    name:{
        firstName : string;
        middleName : string;
        lastName : string;
    }
    gender: "male" | "female";
    dateOfBirth: string;
    email: string;
    contactNumber : string;
    emergencyContactNumber: string;
    bloodGroup?: "A+" | "B+" | "A-" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress : string;
    parmanentAddress : string;
    guardian : Guardian
  }