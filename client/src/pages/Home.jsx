import { useState } from "react"
import Cards from "../components/Cards/Cards"
import Filters from "../components/Filters/Filters"
import Section from "../components/Section/Section"

const Home = () => {
    const [filter, setFilter] = useState("")
    return (
        <div>
            <Section />
            {/*<PhotoSlider />*/}
            <Filters setFilter={setFilter} />
            {/*<CardsControl/>*/}
            <Cards filter={filter} />
        </div>
    )
}

export default Home
