import styled from 'styled-components';
import dbPlus from '../assets/dbplus.jpg';

const Featured = (props) => {
    return <Container>
    <TopContainer>
    <Line></Line>
    <Title><BlueText>F</BlueText>eatured</Title>
    </TopContainer>
    <Flex>
        <Image>
        <img src={dbPlus} alt="" /></Image>
        <TextDescription>
            <h1>Project Title</h1>
            <h3>Project Description</h3>
            <br/>
             <Skills>
                 <h4><BlueText>►</BlueText> React  <BlueText>►</BlueText> TypeScript  <BlueText>►</BlueText> JavaScript  <BlueText>►</BlueText> MySQL  <BlueText>►</BlueText> WordPress <BlueText>►</BlueText> Firebase  <BlueText>►</BlueText> Styled Components <BlueText>►</BlueText> HTML5 <BlueText>►</BlueText> SASS</h4>
             </Skills>
        </TextDescription>
    </Flex>
    <Flex>
    <TextDescription>
            <h1>Project Title</h1>
            <h3>Project Description</h3>
            <br/>
             <Skills>
                 <h4><BlueText>►</BlueText> React  <BlueText>►</BlueText> TypeScript  <BlueText>►</BlueText> JavaScript  <BlueText>►</BlueText> MySQL  <BlueText>►</BlueText> WordPress <BlueText>►</BlueText> Firebase  <BlueText>►</BlueText> Styled Components <BlueText>►</BlueText> HTML5 <BlueText>►</BlueText> SASS</h4>
             </Skills>
        </TextDescription>
        <Image>
        <img src={dbPlus} alt="" /></Image>
    </Flex>
    <Flex>
        <Image>
        <img src={dbPlus} alt="" /></Image>
        <TextDescription>
            <h1>Project Title</h1>
            <h3>Project Description</h3>
            <br/>
             <Skills>
                 <h4><BlueText>►</BlueText> React  <BlueText>►</BlueText> TypeScript  <BlueText>►</BlueText> JavaScript  <BlueText>►</BlueText> MySQL  <BlueText>►</BlueText> WordPress <BlueText>►</BlueText> Firebase  <BlueText>►</BlueText> Styled Components <BlueText>►</BlueText> HTML5 <BlueText>►</BlueText> SASS</h4>
             </Skills>
        </TextDescription>
    </Flex>
</Container>
}

const Container = styled.div`
    margin-bottom: 50px;
    background-color: #041831;
    height: auto;
    color: #5edcf8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    position: relative;
    padding: 0 50px;
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
    align-items: center;
    margin-top: 20px;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;
const Image = styled.div`
position: relative;
padding: 10px;
img {
    width: auto;
    height: 45vh;
    border: 2px white solid;
    border-radius: 10%;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    padding: 5px;
    @media (max-width: 768px) {
        height: 25vh;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
            height: 35vh;
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
            background-color: #154b8d;
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

export default Featured;