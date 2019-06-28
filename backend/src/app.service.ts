import { Injectable } from '@nestjs/common';
import { ColophonDto } from './ColophonDto';

@Injectable()
export class AppService {
  getColophon(): ColophonDto {
    return new ColophonDto();
  }
}
