import styled from 'styled-components';
import profile from '../assets/me.png';

const About = (props) => {
    return <Container id="About">
        <TopContainer>
        <Line></Line>
        <Title><BlueText>A</BlueText>bout Me</Title>
        </TopContainer>
        <Flex>
            <Image>
            <img src={profile} alt="" /></Image>
            <TextDescription>
                <h1>A Front End Developer who enjoys making APIs and databases.</h1>
                <h3>Hi, I'm Yahya! And I love making fully functional websites!</h3>
                <br/>
                <h3>Currently looking for opportunities!</h3>
                 <Skills>
                     <h4><BlueText>►</BlueText> React  <BlueText>►</BlueText> TypeScript  <BlueText>►</BlueText> JavaScript  <BlueText>►</BlueText> MySQL  <BlueText>►</BlueText> WordPress <BlueText>►</BlueText> Firebase  <BlueText>►</BlueText> Styled Components <BlueText>►</BlueText> HTML5 <BlueText>►</BlueText> SASS</h4>
                 </Skills>
            </TextDescription>
        </Flex>
    </Container>
}

const Container = styled.div`
margin-top: 30%;
    margin-bottom: 50px;
    background-color: #041831;
    height: 100%;
    color: #5edcf8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    position: relative;
    padding: 0 26px;
    `;
    const TopContainer = styled.div`
    margin-right: 41%;
    position: relative;
    white-space: nowrap;
    padding: 50px;
`;
const Line = styled.div`
    display: block;
    position: relative;
    background-color: #5edcf8;
    width: 100%;
    height: 5px; 
    border-radius: 5px;
    transform: scale(0.8);
    transition: transform 250ms ease-in;
    margin-left: -110%;
    @media (max-width: 768px) {
        position: absolute;
    }
`;
const Title = styled.div`
    font-size: 32px;
    text-align: left;
    margin-left: -100%;
    font-weight: bold;
    display: block;
    @media (max-width: 768px) {
        position: absolute;
    }
`;

const BlueText = styled.div`
 color: #5edcf8;
 display: inline;
 font-weight: bold;
`;
const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const Image = styled.div`
position: relative;
img {
    width: auto;
    height: 60vh;
    border: 2px white solid;
    border-radius: 50%;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    padding: 5px;
    @media (max-width: 768px) {
        margin-left: 60%;
        height: 30vh;
    }
}
img:hover {
    border: 2px #5edcf8 solid;
}
`;
const TextDescription = styled.div`
    margin-left: 50px;
    width: 50%;
        h2 {
            font-size: 22px;
            padding: 20px;
        }
        h3 {
            font-size: 16px;
            font-weight: normal;
            padding: 10px;
        }
        h4 {
            font-size: 14px;
            font-weight: normal;
            padding: 10px;
        }
        @media (max-width: 768px) {
            width: auto;
        }
`;
const Skills = styled.div`
    white-space: no-wrap;
    padding: 10px;
    `;

export default About;