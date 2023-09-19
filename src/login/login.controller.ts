/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) {}

    @Get(':username')
  findUserById(@Param('username') username: string) {
    return this.loginService.findByUsername(String(username));
  }

  @Post()
  registerUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.loginService.userLogin(username, password);
  }
}
    