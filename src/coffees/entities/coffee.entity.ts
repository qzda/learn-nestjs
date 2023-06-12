import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Flavor } from "./flavor.entity"

@Entity() // sql table default name small case [class name]: 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  brand: string

  @JoinTable()
  @ManyToMany(
    () => Flavor,
    flavor => flavor.coffees,
  )
  flavors: string[]
}
