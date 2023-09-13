import BestSellers from "../Components/BestSellers/BestSellers"
import PrincipalGuitar from "../Components/PrincipalGuitar/PrincipalGuitar"
import Products from "../Components/Products/Products"
import Slider from "../Components/Slider/Slider"

const Home = () => {
  return (
    <main>
      <Slider />
      <BestSellers />
      <PrincipalGuitar />
      <Products />
    </main>
  )
}

export default Home