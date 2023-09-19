import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private regisService: RegisterService){}

    @Get()
    getAllUser(){
        return this.regisService.getAll();
    }

    @Get(':id')
    findUserById(@Param('id') id: string){
        return this.regisService.findById(Number(id));
    }

    @Post()
    registerUser(@Body("username") username:string,@Body("nickname") nickname:string,@Body("password") password:string){
        return this.regisService.addUser(username,nickname,password);
    }
}
