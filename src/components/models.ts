export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}
export interface authUserInfo{
  profile_picture:string
  fullname: string
  role: string
}
export interface userRegistration{
  employee_id: string
    password: string
    confirm_password: string
    firstname:string
    lastname:string
    middlename:string
    position:string
    profile_picture:File | null
}
export interface userLoginT{
  employee_id: string
  password: string
}

export interface BooksDataT{
  id:number
    book_unique_id:string
    book_image:string
    book_name:string
    book_desc:string
    author:string
    date_published:string
    genre:string
    initial_quantity:number
    total_quantity:number
}
export interface PaginationProps{
  current_page:number
  last_page:number
  limit:number
}