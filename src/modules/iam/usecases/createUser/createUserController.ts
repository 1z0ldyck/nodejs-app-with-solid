import { Request, Response } from 'express';
import Controller from "@interfaces/Controller";
import CreateUserUseCase from './createUserUseCase';

class CreateUserController extends Controller {
  
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      console.log(`⏳ Creating new user with name: ${name}, email: ${email} `)
      await this.usecase.execute({ name, email, password })
      console.log("🚀 Successfully created new user.")

      return res.send("User created successfully.").status(200)

    } catch (err) {
      console.error(`❌ Error creating new user with name: ${name}, email: ${email}`)

      return res.send("Error creating user.").status(400)
    }
  }
}


export default new CreateUserController(CreateUserUseCase)