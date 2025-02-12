import { database,dbRef, push } from "../db/db.config.js"


const login = async(req,res)=>{


    const data = req.body

    if(!(data.id && data.password)){
        return res.status(402).json("Id or password required")
    }


    const id = "juned khan"
    const password = "ABCDEF1234"

    if(!(id==data.id)){
        return res.status(400).json("id is not maching give me new id")
    }

    if(!(password==data.password)){
        return res.status(400).json("password is not maching give me new id")
    }

    //login logic return web token 

    return res.status(200).json(`login successfully for user ${data.id}`)


}


const register = async(req,res)=>{
    
    //validation of username and passwrod 
    const userdata = req.body

    const thisisref = dbRef(database,"/student")


    const afterpushthisisref = push(thisisref,userdata)

    return res.status(200).json(afterpushthisisref)

}


export {register, login} 