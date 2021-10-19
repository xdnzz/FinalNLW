import {Request, Response} from 'express'
import { AuthenticateService } from '../services/AuthenticationUserService'

class AuthenticationUserController {


    async handle(request: Request, response: Response) {


        const { code } = request.body;

        const service = new AuthenticateService();

        const result = await service.execute(code);

        return response.json(result)

    }
}



export { AuthenticationUserController }