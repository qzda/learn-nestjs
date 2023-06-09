import { Module } from '@nestjs/common'
import { IndexController, IndexService } from './index.controller'
import { UserController, UserService } from './user.controller'


@Module({
  imports: [],
  controllers: [IndexController, UserController],
  providers: [IndexService, UserService],
})
export class AppModule {}
