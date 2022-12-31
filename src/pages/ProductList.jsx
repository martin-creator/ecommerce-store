import styled from "styled-components"
import { Announcement } from "../components/Announcement"
import Navbar from "../components/Navbar"

const Container = styled.div``
const Title = styled.h1``
const FilterContainer = styled.div``
const Filter = styled.div``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
        <Filter>Filter</Filter>
        <Filter>Filter 2</Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList