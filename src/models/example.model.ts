import { Schema, model } from 'mongoose';

export interface IModel {
  name: string;
}

const modelSchema = new Schema<IModel>({
  name: { type: String, required: true },
});

const Model = model<IModel>('Model', modelSchema);

export default Model;
