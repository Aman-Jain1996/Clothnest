import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mens",
  },
  {
    _id: uuid(),
    categoryName: "Women",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
  },
  {
    _id: uuid(),
    categoryName: "Summer",
  },
  {
    _id: uuid(),
    categoryName: "Winter",
  },
];
