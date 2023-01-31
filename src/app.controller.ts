import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/add')
  add(@Body() numbers: { first: number, second: number }) {
    // console.log({
    //   "type": typeof(numbers.first)
    // })
    const result = this.appService.add(numbers.first, numbers.second);
    return { result: result };
  }

  @Post('sub')
  sub(@Body() numbers: { first: number, second: number }) {
    const result = this.appService.sub(numbers.first, numbers.second);
    return { result: result };
  }

  @Post('mul')
  mul(@Body() numbers: { first: number, second: number }) {
    const result = this.appService.mul(numbers.first, numbers.second);
    return { result: result };
  }

  @Post('div')
  div(@Body() numbers: { first: number, second: number }) {
    const result = this.appService.div(numbers.first, numbers.second);
    return { result: result };
  }
}
