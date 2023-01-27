import { object, string, z } from "zod";

export const CreateClientSchema = z.object({
 body: z.object({
  name: z.string().min(6, "Required minimus 6 characters"),
  email: z.string().email({message: "email invalid"})
 })

})

export const UpdateClientSchema = z.object({
 body: z.object({
  name: z.string(),
  email: z.string()
 }),
 params: z.object({
  id: z.string()
 }),
 query: z.object({
  title: z.string(),
 }),
});

export type CreateClientType = z.infer<typeof CreateClientSchema>["body"]

export type UpdateClientBodyType = z.infer<typeof UpdateClientSchema>["body"]
export type UpdateClientParamsType = z.infer<typeof UpdateClientSchema>['params']
export type UpdateClientQueryType = z.infer<typeof UpdateClientSchema>['query']