import mongoose, { Schema } from "mongoose";
import { IDish } from "./dish.model";
import { IChef } from "./chef.model";
import { StatusEnum } from "./status.enum";

export interface IRestaurant extends Document {
  title: string;
  image: string;
  chef: IChef;
  rating: number;
  dishes: IDish[];
  signatureDish: IDish;
  isPopular: boolean;
  status: StatusEnum;
}

const RestaurantShcema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
  rating: { type: Number, required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: "Dish", required: true }],
  signatureDish: { type: Schema.Types.ObjectId, ref: "Dish", required: true },
  isPopular: { type: Boolean, required: true, default: false },
  status: {
    type: String,
    enum: StatusEnum,
    required: true,
    default: StatusEnum.ACTIVE,
  },
});

export default mongoose.model<IRestaurant>("Restaurant", RestaurantShcema);
