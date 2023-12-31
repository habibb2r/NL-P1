export type User ={
    id : string;
    password : string;
    needsPasswordChange : boolean;
    role : 'admin' | 'student' | 'faculty' ;
    status : 'in-progress' | 'blocked';
    isDeleted : boolean;
    createdAt : Date;
    updatedAt : Date;
}

export type NewUser = {
    role : string;
    password : string;
    id : string;
}