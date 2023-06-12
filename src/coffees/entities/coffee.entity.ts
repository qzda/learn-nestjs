import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity() // sql table default name small case [class name]: 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  brand: string

  @Column('json', { nullable: true })
  flavors: string[]
}
