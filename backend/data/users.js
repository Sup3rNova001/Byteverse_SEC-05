import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aman',
    email: 'amandalal56386@gmail.com',
    password: bcrypt.hashSync('aman123', 10),
    isAdmin:true,
  },
  
]

export default users

