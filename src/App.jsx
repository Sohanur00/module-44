import { LineChart } from 'recharts';

import './App.css'
import Navber from './componants/Navber/Navber'
import PriceOptions from './priceOptions/PriceOptions'


// import DaisyNav from './componants/DaisyNav/DaisyNav'

function App() {


  return (
    <>
  
      <h1 className='text-center text-4xl font-bold  bg-green-400'>Vite + React</h1>
{/* <DaisyNav></DaisyNav> */}
    
<Navber></Navber>
<PriceOptions></PriceOptions>
<LineChart></LineChart>


    </>
  )
}

export default App
