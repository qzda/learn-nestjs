import { Injectable, NotFoundException } from "@nestjs/common"
import { Coffee } from "./entities/coffee.entity"
import { CreateCoffeeDto } from "./dto/create-coffee.dto"
import { UpdateCoffeeDto } from "./dto/update-coffee.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {

  }

  async findAll() {
    return this.coffeeRepository.find()
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne({
      where: {
        id: id,
      }
    })
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }
    return coffee
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const newCoffee = this.coffeeRepository.create(createCoffeeDto)

    return this.coffeeRepository.save(newCoffee)
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id: id,
      ...updateCoffeeDto,
    })

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }

    return this.coffeeRepository.save(coffee)
  }

  async remove(id: number) {
    const coffee = await this.findOne(id)
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }

    return this.coffeeRepository.remove(coffee)
  }
}
