
import Image from 'next/image';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { recipeType } from '@/lib/utils';
import { getAllRecipesWith } from '@/db/Recipe';


export default async function Home() {    
    let recipes = await getAllRecipesWith(recipeType.starter);
    console.log('recipes', recipes);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">        
              
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="">
            <ul className="flex flex-row gap-10">
              <li>
                <Link href="/">
                  <div className="text-primary">Home</div>
                </Link>
              </li>          
              <li>
                <Link href="/random">
                  <Image height={25} width={25} 
                  src={'dice.svg'}
                  color='primary'                  
                  alt="Go to generate page"/>
                </Link>
              </li>
            </ul>
         </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">        
        {recipes.map((recipe) => (
            <Card key={recipe.id} className="w-[310px]">
              <CardHeader>
              <CardTitle className="text-primary-foreground text-ellipsis text-wrap text-md">{recipe.title}</CardTitle>              
            </CardHeader>
            <CardFooter>
              <p className="text-sm text-gray-500">{recipe.details}</p>
            </CardFooter>
              
            </Card>            
        ))  
        }
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
      </div>
    </main>
  )
}
