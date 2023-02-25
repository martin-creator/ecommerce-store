import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

`

const Announcement = () => {
  return (
    <Container>
         Super Black Friday deal is now! Buy now to save 80% off the original price
    </Container>
  )
}

export default Announcement
