import Link from 'next/link'

export default function Home() {
  return (
    <div className='full-wrapper'>
      <div className='main-header'>
    <div>Welcome to a Healthier</div>
    <div className='you'>YOU</div>
    </div>
    <div className='main-wrapper'>
      {/* <div className='main-page'><button className='link-button'><Link href='meal'>Options</Link></button> A list of foods to help guide your day.</div> */}
      {/* <div className='main-page'><Link href='workouts'>Workout Plans</Link></div> */}
      
      <div className='main-page'><button className='link-button'><Link className='link' href='food'>Track Your Food</Link></button>Here, you can select different foods and have their nutritional values displayed for each item, or a combination of items.</div>
      <div className='main-page'><button className='link-button'><Link className='link' href='macros'>Add Macros</Link></button>Add a food and its values to be displayed back in your food tracker.</div>
    </div>
    </div>
  )
}
