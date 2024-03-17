import { useState } from 'react'
import Header from './component/Header'
import NavBar from './component/NavBar'
import Recipe from './component/Recipe'
import toast from 'react-hot-toast';
import Footer from './component/Footer';


function App() {
   
  const [dishes, setDishes] = useState([]);

  const wantCook = recipe => {
       const newDishes = [...dishes, recipe];
       
       const isExist = dishes.find(item => item.id === recipe.id)
       if(!isExist){
        setDishes(newDishes);
       }
       else {
        toast.error('Already Added.')
       }
  }

  return (
    <>
     <NavBar></NavBar>
     <Header></Header>
     <main>
       <Recipe setDishes={setDishes} dishes={dishes} wantCook={wantCook}></Recipe>
     </main>
     <Footer></Footer>
    </>
  )
}

export default App
