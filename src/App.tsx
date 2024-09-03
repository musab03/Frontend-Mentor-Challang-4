import egg from './assets/images/image-omelette.jpeg'
function App() {

  return (
    <>
    <div className="bg-white flex flex-col w-full max-w-md mx-auto items-start justify-center sm:mt-10 sm:rounded-xl overflow-hidden sm:p-6 sm:mb-10">
      <img src={egg} alt="egg-image" className=' sm:rounded-xl'/>
      <h1 className='font-bold mt-4 text-2xl '>Simple Omelette Recipe</h1>
      <p className='mt-2'>An easy quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfect, optionally filled with your choice of cheese, vegetables, or meats</p>

      <div className='bg-[#fff7fc] mt-4 p-4 w-full max-w-md mx-auto  rounded-md text-purple-600 font-bold '>Preparation time
        <ul className='list-disc list-inside text-sm text-black'>
          <li className='font-normal'><span className='font-bold'>Total:</span> Approximately 10 minutes</li>
          <li className='font-normal'><span className='font-bold'>Preparation:</span> 5 minutes</li>
          <li className='font-normal'><span className='font-bold'>Cooking:</span> 5 minutes</li> 
        </ul>
      </div>

      <div className='w-full max-w-md mx-auto '>
      <h1 className='text-amber-700 mt-4 font-bold text-xl'>Ingredients
          <ul className='list-disc list-inside text-black text-sm font-normal mt-2 '>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats</li>
           </ul>
        </h1>
      </div>

      <div className="my-6 w-full h-[1px] bg-gray-300"></div>

      <div className='w-full max-w-md mx-auto '>
      <h1 className='text-amber-700 font-bold text-xl'>Instructions
          <ul className='list-decimal list-inside text-amber-700 text-semibold font-normal mt-2 '>
            <li ><span className='text-black font-semibold text-lg'>Beat the eggs:</span><span className='text-black text-sm'> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
            <li ><span className='text-black font-semibold text-lg'>Heat the pan:</span><span className='text-black text-sm'> Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
            <li ><span className='text-black font-semibold text-lg'>Cook the omelette:</span><span className='text-black text-sm'> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
            <li ><span className='text-black font-semibold text-lg'>Add fillings (optional):</span><span className='text-black text-sm'>  When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
            <li ><span className='text-black font-semibold text-lg'>Fold and serve:</span><span className='text-black text-sm'> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
            <li ><span className='text-black font-semibold text-lg'>Enjoy:</span><span className='text-black text-sm'> Serve hot, with additional salt and pepper if needed.</span></li>
            </ul>
        </h1>
      </div>

      <div className="my-6 w-full h-[1px] bg-gray-300"></div>

      <div className='w-full max-w-md mx-auto '>
      <h1 className='text-amber-700 font-bold text-xl'>Nutrition
        <p className='text-sm text-black font-normal mt-1'>The table below shows nutrition values per serving wihtout the additional fillings</p>
          <ul className='mt-2  '>
            <li className='mt-4 flex flex-row justify-around text-black text-sm'><span>Calories</span><span className='text-amber-700'>277kcal</span></li>
            <div className="my-2 w-full h-[1px] bg-gray-300"></div>
            <li className='mt-4 flex flex-row justify-around text-black text-sm'><span>Carbs</span><span className='text-amber-700'>0g</span></li>
            <div className="my-2 w-full h-[1px] bg-gray-300"></div>
            <li className='mt-4 flex flex-row justify-around text-black text-sm'><span>Protein</span><span className='text-amber-700'>20g</span></li>
            <div className="my-2 w-full h-[1px] bg-gray-300"></div>
            <li className='mt-4 mb-4 flex flex-row justify-around text-black text-sm'><span>Fat</span><span className='text-amber-700'>22g</span></li>
           
           
           </ul>
        </h1>
      </div>


    </div>
      
    </>
  )
}

export default App
