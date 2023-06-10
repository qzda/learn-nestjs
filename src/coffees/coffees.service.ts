import { Injectable, NotFoundException } from "@nestjs/common"
import { Coffee } from "./entities/coffee.entity"
import { CreateCoffeeDto } from "./dto/create-coffee.dto"
import { UpdateCoffeeDto } from "./dto/update-coffee.dto"

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id     : Date.now(),
      name   : "n1",
      brand  : "b1",
      flavors: ["f1", "f2"],
    },
  ]

  findAll() {
    return this.coffees
  }

  findOne(id: string) {
    const coffee = this.coffees.find(i => i.id === +id)
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }
    return coffee
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const newCoffee: Coffee = {
      ...createCoffeeDto,
      id: Date.now()
    }
    this.coffees.push(newCoffee)

    return newCoffee
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id)

    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }
    this.coffees.forEach((i, index) => {
      if (i === existingCoffee) {
        this.coffees[index] = {
          ...i,
          ...updateCoffeeDto
        }
      }
    })
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(i => i.id === +id)
    if (coffeeIndex < 0) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }
    this.coffees.splice(coffeeIndex, 1)
  }
}
