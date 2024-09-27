import { api } from "src/boot/axios";

const ImageGettingURL = "http://localhost:4000/getImage/"

export const getImage = (path:string) => `${ImageGettingURL}${path}`
export const createUser = (val:FormData) => api.post("/auth/create-user",val)
export const login = (val:Object)=> api.post('/auth/login',val)
export const logout = ()=> api.post('/auth/logout')
export const getBooks = (param:Object)=> api.get('/user/getAllBooks',param)
export const getBook = (param:Object)=> api.get('/user/getBook',param)
export const getAllBorrowedBooks = (param:Object)=> api.get('/user/getAllBorrowedBooks',param)
export const borrowBook = (val:Object)=> api.post('/user/borrowBook',val)