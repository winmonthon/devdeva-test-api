import UsersModel from '../model/users-schema'
import statusEnum from '../../../common/status.enum'

const UsersService = {
  create(payload: any) {
    return new UsersModel(payload).save()
  },
  getOne(query: any) {
    return UsersModel.findOne({ ...query, status: statusEnum.ACTIVE })
  },
  getAll(query: any) {
    return UsersModel.find({ ...query, status: statusEnum.ACTIVE })
  },
  delete(query: any) {
    return UsersModel.findOneAndUpdate(
      { ...query },
      { status: statusEnum.DELETED }
    )
  },
  update(query: any, payload: any) {
    return UsersModel.findOneAndUpdate({ ...query }, payload)
  },
}

export default UsersService
