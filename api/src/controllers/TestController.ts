import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('test')
export class TestController {
  @Get('')
  private async get(req: Request, res: Response) {
    res.send({foo: 'bar'})
    // return res.sendStatus(200)
  }
}
