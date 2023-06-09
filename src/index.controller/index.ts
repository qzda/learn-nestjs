import { Body, Controller, Get, Post, Query,} from '@nestjs/common'
import { Injectable } from '@nestjs/common'


@Injectable()
export class IndexService {
  getIndex(query?: object) {
    if (query) return JSON.stringify({
      query : query,
      msg   : 'Hello World!',
      status: 200,
    })
    return {
      status: 200,
      msg   : 'Hello World!',
    }
  }

  postLogin(userinfo: {username: string, pwd: string}) {
    return {
      status: 200,
      msg   : `hello ${userinfo.username}`,
    }
  }
}


@Controller()
export class IndexController {
  constructor(private readonly appService: IndexService) {}

  @Get()
  getIndex(@Query() query?: object) {
    return this.appService.getIndex(query)
  }

  @Post('/login')
  postLogin(@Body() body: {username: string, pwd: string}) {
    return this.appService.postLogin(body)
  }
}
