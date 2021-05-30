import styled from 'styled-components';
import dbPlus from '../assets/dbplus.jpg';
import portfolio from '../assets/portfolio.png';
import microsoft from '../assets/microsoft.png';
import { FaGithubAlt, FaTabletAlt } from "react-icons/fa";

const Featured = (props) => {
    return <Container id="Featured">
    <TopContainer>
    <Line></Line>
    <Title><BlueText>F</BlueText>eatured</Title>
    </TopContainer>
    <Flex>
        <Image>
        <a href="https://show-streaming-react.web.app/"><img src={dbPlus} alt="DB Plus" /></a></Image>
        <TextDescription>
           <a href="https://show-streaming-react.web.app/"> <h1>Dragon Ball Plus</h1></a>
            <h3>Surf and find your favorite Dragon Ball product, be it Games, Movies, Mangas and Anime blu-rays.</h3>
            <h3>This was my second big <BlueText>Fullstack</BlueText> website using <BlueText>FireBase</BlueText> with <BlueText>Redux </BlueText>
            and styled using <BlueText>Styled Components</BlueText>.</h3>
            <h3>The goal for this project was to make something that looks good but that is also functional and looks professional.</h3>
            <br/>
             <Skills>
                 <h4><BlueText>►</BlueText> React  <BlueText>►</BlueText> JavaScript <BlueText>►</BlueText> Redux  <BlueText>►</BlueText> FireBase 🔥<BlueText>►</BlueText> Styled Components</h4>
             </Skills>
             <Skills> <a href="https://github.com/RemoteSoul-hub/show-streaming-react"><FaGithubAlt size='2em'/></a> <a href="https://show-streaming-react.web.app/"><FaTabletAlt size='2em'/></a></Skills>
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
             <Skills> <a href="https://github.com/RemoteSoul-hub/portfolioYT"><FaGithubAlt size='2em'/></a> <a href="/"><FaTabletAlt size='2em'/></a></Skills>
        </TextDescription>
        <Image>
     <a href="/"> <img src={portfolio} alt="" /></a>  </Image>
    </Flex>
    <Flex>
        <Image>
     <a href="https://remotesoul-hub.github.io/microsoft_landingpage/">  <img src={microsoft} alt="" /></a> </Image>
        <TextDescription>
         <a href="https://remotesoul-hub.github.io/microsoft_landingpage/">   <h1>Microsoft : Landing Page</h1></a>
            <h3>This was my first try at making a website's clone.</h3>
            <h3>I used Grid, Flex and basic <BlueText>CSS</BlueText> and <BlueText>HTML</BlueText> to make something that looks exactly like the landing page Microsoft had during 2020's Christmas time period.</h3>
            <br/>
             <Skills>
                 <h4><BlueText>►</BlueText> HTML5 <BlueText>►</BlueText> CSS3</h4>
             </Skills>
             <Skills> <a href="https://github.com/RemoteSoul-hub/microsoft_landingpage"><FaGithubAlt size='2em'/></a> <a href="https://remotesoul-hub.github.io/microsoft_landingpage/"><FaTabletAlt size='2em'/></a></Skills>
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
    padding: 0 26px;
    a{
        color: white;
    }
    `;
    const TopContainer = styled.div`
    position: relative;
    white-space: nowrap;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    @media (max-width: 768px) {
        margin-left: -40%;
    }
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
        margin-left: 0;
        height: 1px;
        width: 50%;
    }
`;
const Title = styled.div`
    font-size: 32px;
    text-align: left;
    margin-left: -100%;
    font-weight: bold;
    display: block;
    color: white;
    @media (max-width: 400px) {
        font-size: 20px;
		padding: 5px;
		margin-left: 24%;
		word-wrap: break-word;
    }
	@media (min-width: 400px) and (max-width: 1000px) {
		font-size: 20px;
		padding: 10px;
		margin-left: 30%;
		word-wrap: break-word;
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
    width: 80vw;
    /* width: 80%; */
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
        height: auto;
        width: 80vw;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        height: auto;
        width: 80vw;
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
    min-width: 50%;
    width: 50%;
    color: white;
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
            margin-left: 0;
          h1 {
              margin-top: 20px;
            font-size: 20px;
          }
          h3 {
                font-size: 12px;
          }
        }
        @media (min-width: 769px) and (max-width: 1100px) {
            width: auto;
            margin-left: 0;
          h1 {
              margin-top: 20px;
            font-size: 22px;
          }
          h3 {
                font-size: 16px;
          }
        }
`;
const Skills = styled.div`
    white-space: no-wrap;
    padding: 10px;
    @media (min-width: 769px) and (max-width: 1200px) {
          h4 {
              margin-top: 10px;
            font-size: 20px;
            text-align: center;
          }
        }
    `;

export default Featured;