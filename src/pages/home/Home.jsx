import Democracy from "./democracy/Democracy"
import Education from "./educationDevelopment/Education"
import Futbol from "./futbol/Futbol"
import Promotion from "./promotion/Promotion"
import Protection from "./protection/Protection"

const Home = () => {
  return (
    <>
      <Education />
      <Protection />
      <Futbol />
      <Democracy />
      <Promotion />
    </>
  )
}

export default Home