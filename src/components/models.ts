export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}
export interface authUserInfo{
  employee_id:string
  profile_picture:string
  fullname:string
  position:string
  status:string
}
export interface userRegistration{
  username: string
    password: string
    confirm_password: string
    firstname:string
    lastname:string
    middlename:string
    position:string
    profile_picture:File | null
}
