import mongoose from 'mongoose'
import statusEnum from '../../../common/status.enum'

const IdSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    counter: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: Object.values(statusEnum),
      default: statusEnum.ACTIVE,
    },
  },
  { timestamps: true, strict: true }
)

const idModel = mongoose.model('id', IdSchema)
export default idModel
