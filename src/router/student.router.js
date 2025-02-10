import express from 'express'
import login from '../controllers/student.controller.js'


const server = express()

server.post("/login",login)

export default server