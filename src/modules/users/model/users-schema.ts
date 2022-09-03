import mongoose from 'mongoose'
import statusEnum from '../../../common/status.enum'

const UsersSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(statusEnum),
      default: statusEnum.ACTIVE,
    },
  },
  { timestamps: true, strict: true }
)

const UsersModel = mongoose.model('user', UsersSchema)
export default UsersModel
