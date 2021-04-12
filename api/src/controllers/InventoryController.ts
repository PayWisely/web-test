import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import Logger from '../logger';
import sequelize from 'sequelize'
import { Inventory } from '../models/Inventory';

@Controller('inventory')
export class InventoryController {
  @Get(':date')
  private async get(req: Request, res: Response) {
    Logger.info(`inventory get request param: ${req.params.date}`) 
    let items = []
    let statusCode = 200
    
    try {
      let dateQuery = req.params.date;
      items = await Inventory.findAll({ 
        where: {date: `${dateQuery} 00:00:00+00`}
      });
    }
    catch (error) {
      Logger.error(`inventory get request error: ${error}`) 
      statusCode = 500
    }

    return res.status(statusCode).json({
      items: items,
    });
  }

  @Post('create')
  private async post(req: Request, res:Response) {    
    let date = req.body.date
    let times = req.body.times
    let quantity = req.body.quantity
    let size = req.body.size

    Logger.info(`inventory create request: ${date}, ${times}, ${quantity}, ${size}`) 

    // NB: validation:  what to do about conflicting existing inventory records

    let bulkItems = []
    let startTime = times[0]
    let endTime = times[1]
    let minutes = ['00','15','30','45']

    // Fan-out the times -> hour + minute increments
    for (let i=startTime; i<=endTime; i++) {
      if (i < endTime) {
        minutes.forEach(mm => {
          bulkItems.push({
            date: date,
            time: `${i}:${mm}`,
            quantity: quantity,
            size: size
          })
        })
      } else {
        bulkItems.push({
          date: date,
          time: `${i}:00`,
          quantity: quantity,
          size: size
        })        
      }
    }
    console.log('inventory create bulkItems', bulkItems)
    
    let statusCode = 200
    let result
    try {
      await Inventory.bulkCreate(bulkItems)
      result = res.status(200).json({message: 'success'})
    } catch(error) {
      result = res.status(500)
    }
    
    Logger.info(`inventory create response: ${result}`)
    return result
  }
 
}