import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../../modules/backoffice/services/account.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken(document: string, email: string, image: string, roles: string[]) {
    const user: JwtPayload = {
      document,
      email,
      image,
      roles,
    };

    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return payload;
    // return await this.accountService.findOneByUsername(payload.document);
  }
}
