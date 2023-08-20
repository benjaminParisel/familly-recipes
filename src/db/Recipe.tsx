import type { Recipe } from "@prisma/client";
import { prisma } from "./prisma";

export const getAllRecipesWith = async (type: string) => {
  const recipes: Array<Recipe> = await prisma.recipe.findMany({
    where: {
      type: type,
    },
  });
  return recipes;
};
