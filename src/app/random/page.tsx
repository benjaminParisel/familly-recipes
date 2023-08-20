import Image from 'next/image';
import { PrismaClient, Recipe } from '@prisma/client'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getRandomItemFromArray, recipeType } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { randomUUID } from 'crypto';
import { getAllRecipesWith } from '@/db/Recipe';

export default async function Random() {
    const prisma = new PrismaClient();

    const generatorOptions = [{
      id: randomUUID(),
      label: recipeType.starter,      
    },
    {
         id: randomUUID(),
      label: recipeType.main,        
    },
    {
       id: randomUUID(),
      label: recipeType.dessert,      
    }]

    const starters = await getAllRecipesWith(recipeType.starter);
    const main = await getAllRecipesWith(recipeType.main);
    const desserts = await getAllRecipesWith(recipeType.dessert);

    const recipes = [getRandomItemFromArray(starters),getRandomItemFromArray(main),getRandomItemFromArray(desserts)]    
    
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className='items-top flex space-x-2 mb-10'>
        {generatorOptions.map((option) => (
        <div key={option.id} className='w-fit'>
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
          </div>
          </div>
          ))}
      </div>
      <div className="flex flex-wrap gap-2">        
        {recipes.map((recipe) => (
            recipe && 
            <Card key={recipe.id} className="w-[310px]">
              <CardHeader>
              <CardTitle className="text-ellipsis text-wrap text-md">{recipe.title}</CardTitle>              
            </CardHeader>
            <CardFooter>
              <p className="text-sm text-gray-500">{recipe.details}</p>
            </CardFooter>              
            </Card>      
        ))}       
      </div>
      <p className='mt-10 text-xl text-primary'>Bon appétit !</p>
    </main>
  )
}
