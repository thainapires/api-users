import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService{
        
        private users: Array<User> = [{
            id: 1,
            userName: "Thainá",
            email: "thainaspiress@gmail.com",
            password: "123456",
            completeName: "Thainá Pires",
            entryDate: new Date(),
        }];

        public create( user: User): User{
            this.users.push(user);
            return user;
        }

        public searchByUserName(userName: string): User {
            return this.users.find(user => user.userName == userName);
        }
}