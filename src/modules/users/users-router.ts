import express from 'express'
import UsersController from './controller/users-controller'

const router = express.Router()

//create
router.post('/', UsersController.createUser)

//get all
router.get('/', UsersController.getAll)

//get by id
router.get('/:id',UsersController.getById)

//update 
router.put('/:id', UsersController.updateUser)

//delete
router.delete('/:id',UsersController.deleteUser)



export default router
