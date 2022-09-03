import IdModel from '../model/id-schema'
import statusEnum from '../../../common/status.enum'

const IdService = {
  create(payload: any) {
    return new IdModel(payload).save()
  },
  getOne(query: any) {
    return IdModel.findOne({ ...query, status: statusEnum.ACTIVE })
  },
  getAll(query: any) {
    return IdModel.find({ ...query, status: statusEnum.ACTIVE })
  },
  delete(query: any) {
    return IdModel.findOneAndUpdate(
      { ...query },
      { status: statusEnum.DELETED }
    )
  },
  update(query: any, payload: any) {
    return IdModel.findOneAndUpdate(
      { ...query, status: statusEnum.ACTIVE },
      payload
    )
  },
  async getAndUpdate(key: string) {
    const result = await IdModel.findOneAndUpdate(
      { key },
      { $inc: { counter: 1 } },
      { new: true, upsert: true }
    )

    return result.counter
  },
}

export default IdService
