import sequelize from 'sequelize'
import {
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey, Table,
  AutoIncrement
} from 'sequelize-typescript'

@Table({ tableName: 'inventory' })
export class Inventory extends Model<Inventory> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number

  @Column
  date: Date

  @Column
  time: string

  @Column
  size: number

  @Column
  quantity: number

  @CreatedAt
  createTime: Date

  @UpdatedAt
  updateTime: Date
}