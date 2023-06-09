import { Controller, Get, Body, Param, Query, Post} from '@nestjs/common'
import { AppService } from './app.service'


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query?: object): string {
    return this.appService.getHello(query)
  }

  @Post('/login')
  postLogin(@Body() body: {username: string, pwd: string}): {msg: string} {
    return {
      msg: `hello ${body.username}`
    }
  }
}
