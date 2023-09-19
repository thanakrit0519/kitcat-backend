/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';

@Injectable()
export class LoginService {
    private users: UserDTO[] = [
        {
            id: 1,
            username: "a",
            nickname: "A",
            password: "aa"
        },
        {
            id: 2,
            username: "b",
            nickname: "B",
            password: "bb"
        },
        {
            id: 3,
            username: "c",
            nickname: "C",
            password: "cc"
        }  
    ]
    public user: UserDTO;

    findByUsername(username: string){
        return this.users.find((p)=>p.username === username);
    }
    
    userLogin(username: string,password: string){
        this.user = this.findByUsername(username)
        if(this.user === undefined) return  "User not found";
        if(password === this.user.password)
            return "Succeed";
        else return "Fail";
    }
}