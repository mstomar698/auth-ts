import mongoose, { Schema, Model } from 'mongoose';

interface ICode extends mongoose.Document {
  code: string;
  lang: string;
  stdin: string;
  result: string;
  userId: string;
}

const codeSchema: Schema<ICode> = new mongoose.Schema(
  {
    code: { type: String, required: true },
    lang: { type: String, required: true },
    stdin: { type: String, required: false, default: '' },
    result: { type: String, required: false, default: '' },
    userId: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Code: Model<ICode> = mongoose.model('Code', codeSchema);
export default Code;
