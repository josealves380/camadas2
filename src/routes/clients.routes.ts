import { Router } from "express";
import {createClient} from '../controllers/clients.controller'
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { CreateClientSchema } from "../schemas/client.schema"

const router = Router()

router.post('/clients', schemaValidation(CreateClientSchema), createClient)
router.put('/clients/:id', schemaValidation)

export default router