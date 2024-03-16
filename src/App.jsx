import { useState } from 'react'
import Header from './component/Header'
import NavBar from './component/NavBar'
import Recipe from './component/Recipe'


function App() {
   
  const [dishes, setDishes] = useState([]);

  const wantCook = recipe => {
       const newDishes = [...dishes, recipe];
       setDishes(newDishes);
  }

  return (
    <>
     <NavBar></NavBar>
     <Header></Header>
     <main>
       <Recipe dishes={dishes} wantCook={wantCook}></Recipe>
     </main>
    </>
  )
}

export default App
