import mongoose, { Schema, Document } from "mongoose";
import { IRestaurant } from "./restaurant.model";

export interface IChef extends Document {
  title: string;
  image: string;
  description: string;
  restaurants: IRestaurant[];
  isChefOfTheWeek: boolean;
  status: String;
}

const ChefShcema: Schema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  restaurants: [
    { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
  ],
  isChefOfTheWeek: { type: Boolean, required: true, default: false },
  status: { type: String, required: true, default: "active" },
});

export default mongoose.model<IChef>("Chef", ChefShcema);
