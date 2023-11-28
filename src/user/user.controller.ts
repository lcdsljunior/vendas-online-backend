import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

//Controller para criação da API
@Controller('user')
export class UserController {

    @Post()
    async createUser(
        @Body() createUser : CreateUserDto) {
        return {...createUser, password: undefined,};
    }

}
