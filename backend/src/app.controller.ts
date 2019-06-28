import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ColophonDto } from './ColophonDto';
import { ArbitraryDto } from './ArbitraryDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getColophon(): ColophonDto {
    return this.appService.getColophon();
  }

  @Get("/large")
  getLarge(): ArbitraryDto {
    return new ArbitraryDto();
  }
}
