import { Controller, Get, Param,} from '@nestjs/common'
import { Injectable } from '@nestjs/common'


@Injectable()
export class UserService {
  getUserById(id: string) {
    return {
      status: 200,
      msg: `hello ${id}`
    }
  }
}

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get(':id')
  postIndex(@Param('id') id?: string) {
    return this.appService.getUserById(id)
  }
}
