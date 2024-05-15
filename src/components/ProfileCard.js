import styled from "styled-components";

import { FaExternalLinkAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px 2px rgba(0.2, 0.2, 0.2, 0.07);
  padding-top: 0.5rem;
  width: 18rem;
  /* height: 26rem; */
  border: 2px solid #181f33;
  text-align: left;
  font-family: inter;
  color: #a0a6b6;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 2px solid #181f33; */
  height: 10rem;
`;

const Img = styled.img`
  height: 10rem;
  padding: 0.5rem;
`;

const Header = styled.p`
  font-size: 01rem;
  margin: 0.02rem;
  font-weight: 500;
  padding-bottom: 1rem;
  text-align: center;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 0.7rem;
  padding-bottom: 1rem;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Key = styled.p`
  color: #fff;
  display: inline;
  padding-right: 0.3rem;
`;
const Li = styled.li`
  text-decoration: none;
  font-size: 0.65rem;
  text-align: start;
  /* padding-left: 1rem; */
`;

const Bottom = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  /* height: 40%; */
  align-items: center;
  padding: 0.3rem 1rem 0.5rem 1rem;
`;

const ClickText = styled.p`
  text-align: right;
  padding-right: 1rem;
  color: #efcc18;
  &:hover {
    color: white;
  }
  &:visited {
    color: gray;
  }
`;

const ProfileCard = ({ img, href, name, tools, text }) => {
  return (
    <Container>
      <Top>
        <Img src={img} alt="userimage" />
      </Top>
      <Bottom>
        <Header>{name}</Header>
        <Paragraph>{text}</Paragraph>
        <Ul>
          {tools.map((tool, index) => (
            <Li key={index}>
              <Key>{tool.key}: </Key>
              {tool.value.filter(Boolean).join(", ")}
            </Li>
          ))}
        </Ul>

        <a href={href} rel="noopener noreferrer" target="_blank">
          <ClickText>
            <FaExternalLinkAlt size={"0.8rem"} />
          </ClickText>
        </a>
      </Bottom>
    </Container>
  );
};

export default ProfileCard;
