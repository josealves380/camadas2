import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { updateClient } from "../controllers/clients.controller";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { loginSchema } from "../schemas/auth.schema";
import { UpdateClientSchema } from "../schemas/client.schema";


const router = Router()

router.post('/login', schemaValidation(loginSchema), login );
router.put('/clients/:id', schemaValidation(UpdateClientSchema), updateClient)

export default router