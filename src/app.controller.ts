import { Controller, Get, Body, Param, Query, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query?: object): string {
    console.log(query)
    return this.appService.getHello(query)
  }

  @Post()
  postHello(@Body() body: {[key: string]: any}): {msg: string} {
    console.log(body)
    return {
      msg: `hello ${body.name}`
    }
  }

  @Post('/login')
  postLogin(@Body() body: {[key: string]: any}): {msg: string} {
    console.log(body)
    return {
      msg: `hello ${body.username}`
    }
  }
}
