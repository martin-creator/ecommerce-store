import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div``;

const ImgContainer = styled.div``;

const Image = styled.img``;

const InfoContainer = styled.div``;

const Title = styled.h1``;

const Desc = styled.p``;

const Price = styled.p``;


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            tempore animi, aliquid dolorum ullam, sapiente placeat sit molestiae
            ut quod praesentium nesciunt mollitia provident incidunt. Quod
            explicabo praesentium cum eligendi.
          </Desc>
          <Price> $ 20</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
