import UsersService from '../service/users-service'
import { Request, Response } from 'express'
import IdController from '../../id/controller/id-controller'

const UsersController = {
  async createUser(req: Request, res: Response) {
    try {
      const {
        firstName,
        lastName,
        gender,
      } = req.body

      const foundUser = await UsersService.getOne({
        firstName,
        lastName,
      })
      if (foundUser) {
        throw 'Username has already used.'
      }

      const userId = await IdController.createStdId('user')

      await UsersService.create({
        firstName,
        lastName,
        gender,
        id: userId
      })

      res.status(200).json({
        success: true,
      })
    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  },
  async getAll(req: Request, res: Response) {
    try {

      const found = await UsersService.getAll({})

      res.status(200).json(found)
    } catch (err) {
      res.status(400).json({
        success: false
      })
    }
  },
  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const found = await UsersService.getOne({ id })

      res.status(200).json(found)
    } catch (err) {
      res.status(400).json({
        success: false
      })
    }
  },
  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params

      const {
        firstName,
        lastName,
        gender,
      } = req.body

      await UsersService.update({ id }, {
        firstName,
        lastName,
        gender,
      })

      res.status(200).json({
        success: true
      })
    } catch (err) {
      res.status(400).json({
        success: false
      })
    }
  },
  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params
      await UsersService.delete({ id })


      res.status(200).json({
        success: true,
      })
    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  }

}

export default UsersController
