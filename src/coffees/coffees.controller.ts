import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    console.log(paginationQuery.limit);

    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateCoffeeDto) {
    return this.coffeeService.create(body);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() body: UpdateCoffeeDto) {
    return this.coffeeService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.coffeeService.remove(id);
  }
}
