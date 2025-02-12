import express from 'express'
import {login,register} from '../controllers/student.controller.js'


const server = express()

server.post("/login",login)


server.post("/register",register)

export default server