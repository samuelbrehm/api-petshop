import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

import { ResultDto } from '../../modules/backoffice/dtos/result.dto';

@Injectable()
export class RoleInterceptor implements NestInterceptor {
  constructor(public roles: string[]) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const payload: JwtPayload = context.switchToHttp().getRequest().user;
    console.log(payload);

    let hasRole = false;
    payload.roles.forEach(role => {
      if (this.roles.includes(role)) {
        hasRole = true;
      }
    });

    if (!hasRole) {
      throw new HttpException(
        new ResultDto('Acesso não autorizado', false, null, null),
        HttpStatus.FORBIDDEN,
      );
    }

    return next.handle();
  }
}
