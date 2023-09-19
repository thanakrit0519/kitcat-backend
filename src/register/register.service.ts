import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';

@Injectable()
export class RegisterService {
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

    getAll(){
        return this.users;
    }

    findById(id: number){
        return this.users.find((p)=>p.id === id);
    }

    addUser(username: string,nickname: string,password: string){
        this.users.push({
            id: this.users[this.users.length - 1].id + 1,
            username: username,
            nickname: nickname,
            password: password
        });
        return "Succeed";
    }
}
