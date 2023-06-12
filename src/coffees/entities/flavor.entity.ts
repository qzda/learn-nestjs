import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Coffee } from "./coffee.entity"

@Entity() // sql table default name small case [class name]: 'coffee'
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(
    () => Coffee,
    coffee => coffee.flavors
  )
  coffees: Coffee[]
}
