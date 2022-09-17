export interface Employee {
    name: string;
    dob?: Date;
    email: string;
    profilePicture: string;
    password: string;
    salary: number;
    age: number;
    active: boolean;
    joiningdate: Date;
    position: string;
    isdeleted?: boolean;
}
