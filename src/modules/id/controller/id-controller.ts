import IdService from '../service/id-service'

const IdController = {
  async createStdId(key: string) {
    const id = await IdService.getAndUpdate(key)
    return id
  },
}

export default IdController
