import mongoose, { Schema, Document } from "mongoose";
import { IRestaurant } from "./restaurant.model";

export interface IDish extends Document {
  title: string;
  image: string;
  ingredients: string[];
  tags: string[];
  price: number;
  restaurant: IRestaurant;
  status: String;
}

const DishShcema: Schema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  tags: [{ type: String, required: false }],
  price: { type: Number, required: true },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  status: { type: String, required: true, default: "active" },
});

export default mongoose.model<IDish>("Dish", DishShcema);
