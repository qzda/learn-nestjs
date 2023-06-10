import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common'
import { CoffeesService } from './coffees.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {

  }

  @Get()
  findAll(
    @Query() paginationQuery: {
      limit : number
      offset: number
    }
  ) {
    return this.coffeeService.findAll()

    // TODO 分页查询
    const { limit, offset } = paginationQuery
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body: CreateCoffeeDto) {
    return this.coffeeService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateCoffeeDto) {
    return this.coffeeService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id)
  }
}
