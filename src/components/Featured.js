import styled from 'styled-components';
import dbPlus from '../assets/dbplus.jpg';
import portfolio from '../assets/portfolio.png';

const Featured = (props) => {
    return <Container id="Featured">
    <TopContainer>
    <Line></Line>
    <Title><BlueText>F</BlueText>eatured</Title>
    </TopContainer>
    <Flex>
        <Image>
        <img src={dbPlus} alt="DB Plus" /></Image>
        <TextDescription>
            <h1>Dragon Ball Plus</h1>
            <h3>Surf and find your favorite Dragon Ball product, be it Games, Movies, Mangas and Anime blu-rays.</h3>
            <h3>This is was my second big <BlueText>Fullstack</BlueText> website using <BlueText>FireBase</BlueText> with <BlueText>Redux</BlueText>
            and styled using <BlueText>Styled Components</BlueText>.</h3>
            <h3>The goal for this project was to make something that looks good but that is also functional and looks professional.</h3>
            <br/>
             <Skills>
                 <h4><BlueText>►</BlueText> React  <BlueText>►</BlueText> JavaScript <BlueText>►</BlueText> Redux  <BlueText>►</BlueText> FireBase 🔥<BlueText>►</BlueText> Styled Components</h4>
             </Skills>
        </TextDescription>
    </Flex>
    <Flex>
    <TextDescription>
            <h1>This Website</h1>
            <h3>My portfolio website is built with <BlueText>React</BlueText>.</h3>
            <h3>Styling is done using <BlueText>Styled Components</BlueText> and keeps the same colors from my very first portfolio that used <BlueText>SASS, GSAP</BlueText> and <BlueText>HTML5</BlueText>.</h3>
            <br/>
             <Skills>
                 <h4><BlueText>►</BlueText> React  <BlueText>►</BlueText> JavaScript  <BlueText>►</BlueText> Styled Components </h4>
             </Skills>
        </TextDescription>
        <Image>
        <img src={portfolio} alt="" /></Image>
    </Flex>
    <Flex>
        <Image>
        <img src={dbPlus} alt="" /></Image>
        <TextDescription>
            <h1>Microsoft : Landing Page</h1>
            <h3>This was my first try at making a website's clone.</h3>
            <h3>I used Grid, Flex and basic <BlueText>CSS</BlueText> and <BlueText>HTML</BlueText> to make something that looks exactly like the landing page Microsoft had during 2020's Christmas time period.</h3>
            <br/>
             <Skills>
                 <h4><BlueText>►</BlueText> HTML5 <BlueText>►</BlueText> CSS3</h4>
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
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
}
`;
const TextDescription = styled.div`
    margin-left: 50px;
    width: 50%;
        h1 {
        transition: 50ms ease-in-out;
        cursor: pointer;
    }
    h1:hover {
        color: royalblue;
    }
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