import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UserService {
    private users: User[] = [];

    async CreateUser(CreateUserDto: CreateUserDto) : User {
        return ({
            ...createUserDto,
        })
    }

}
