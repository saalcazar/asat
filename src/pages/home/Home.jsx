import './Home.css'
import Social from './Social/Social'
import Democracy from "./democracy/Democracy"
import Education from "./educationDevelopment/Education"
import Futbol from "./futbol/Futbol"
import Promotion from "./promotion/Promotion"
import Protection from "./protection/Protection"

const Home = () => {
  return (
    <main className="container">
      <Education />
      <Protection />
      <Futbol />
      <Democracy />
      <Promotion />
      <Social />
    </main>
  )
}

export default Home