import { Facebook, Instagram, Twitter, Google } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AFRICAN EAGLES</Logo>
        <Desc>
          Eagles fly alone or with their own kind. Life lesson: Associate with
          people who are at your level, or who can help you to grow. Also, not
          everyone will share your vision or dream. Find people who think like
          you so that you can both dream and grow together.
        </Desc>
        <SocialContainer>
            <SocialIcon>
                <Facebook/>
            </SocialIcon>
            <SocialIcon>
                <Instagram/>
            </SocialIcon>
            <SocialIcon>
                <Twitter/> 
            </SocialIcon>
            <SocialIcon>
                <Google/>
            </SocialIcon>

        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
