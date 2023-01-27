import { Request, Response } from "express";
import { CreateClientType, UpdateClientBodyType, UpdateClientParamsType, UpdateClientQueryType } from "../schemas/client.schema";

export const createClient = ( req: Request<unknown, unknown, CreateClientType>, res: Response) => {
  try{
    const {name, email} = req.body
    res.send('Cliente criou')
  } catch(error) {
    console.log("Este é o erro", error)
  }
}
export const updateClient = ( req: Request<UpdateClientParamsType, unknown, UpdateClientBodyType, UpdateClientQueryType >, res: Response) => {
  try{
    console.log(req.body, req.params, req.query)

    const { id } = req.params;
    const { name, email } = req.body;
    const { title } = req.query;
    console.log(id, name, email, title)
    res.send('Update client')
  } catch(error) {
    console.log("Este é o erro", error)
  }
}