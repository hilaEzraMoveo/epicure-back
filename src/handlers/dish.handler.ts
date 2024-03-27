import Dish, { IDish } from "../models/dish.model";
import Restaurant from "../models/restaurant.model";

const DishHandler = {
  async getAll(): Promise<IDish[]> {
    const dishes = await Dish.find().populate("restaurant");
    return dishes;
  },
  async getById(dishId: string): Promise<IDish | null> {
    const dish = await Dish.findById(dishId);
    return dish;
  },
  async create(dishData: IDish): Promise<IDish> {
    const newDish = new Dish(dishData);
    const savedDish = await newDish.save();
    //update restaurant schema with the new dish.
    await Restaurant.findByIdAndUpdate(
      savedDish.restaurant,
      { $push: { dishes: savedDish._id } },
      { new: true, useFindAndModify: false }
    );
    return savedDish;
  },
  async update(
    dishId: string,
    updatedDishData: Partial<IDish>
  ): Promise<IDish | null> {
    const currentDish = await Dish.findById(dishId);
    if (!currentDish) {
      return null;
    }

    if (
      updatedDishData.restaurant &&
      updatedDishData.restaurant !== currentDish.restaurant
    ) {
      await Restaurant.findByIdAndUpdate(
        currentDish.restaurant,
        { $pull: { dishes: dishId } },
        { new: true }
      );

      await Restaurant.findByIdAndUpdate(
        updatedDishData.restaurant,
        { $push: { dishes: currentDish._id } },
        { new: true }
      );
    }

    const updatedDish = await Dish.findByIdAndUpdate(dishId, updatedDishData, {
      new: true,
    });
    return updatedDish;
  },

  async delete(dishId: string): Promise<IDish | null> {
    const deletedDish = await Dish.findByIdAndUpdate(
      dishId,
      { status: "deleted" },
      { new: true }
    );
    if (deletedDish) {
      await Restaurant.findByIdAndUpdate(
        deletedDish.restaurant,
        { $pull: { dishes: deletedDish._id } },
        { useFindAndModify: false }
      );
    }
    return deletedDish;
  },
};

export default DishHandler;
