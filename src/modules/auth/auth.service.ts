import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, password: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    if (user && await bcrypt.compare(password, user.password)) {

      const payload = { sub: user.id, email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload)
      }
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
