// import { hash } from 'bcrypt';
// import { Repository } from 'typeorm';
// import { User } from '../entities/user.entity';

// export class UserRepository extends Repository<User> {
//   async createUser(name: string, email: string, password: string): Promise<User> {
//     const user = this.create();
//     user.name = name;
//     user.email = email;

//     const saltRounds = 10;
//     const hashedPassword = await hash(password, saltRounds);
//     user.password = hashedPassword;

//     await this.save(user);
//     return user;
//   }
// };
