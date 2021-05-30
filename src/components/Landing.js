import styled from 'styled-components';

const Landing = (props) => {
    return <Container>
        <Content>
            <CTN>
             <h3> <BlueText> Hey it's Me!</BlueText> </h3>
                <h1>Yahya Tahoune</h1>
                <h1><BlueText> Design. Code. Design</BlueText></h1>
               <h3>Creating functional, clean and elegant Web experiences.</h3>
                <Resume><a href="https://drive.google.com/file/d/12XrPmiSVI7pmnlgJFro_KTT8VvN5hV5q/view?usp=sharing"> Get my resume</a></Resume>
            </CTN>
            <MovingMouseHolder>
                <Mouse>
                    <MouseButton>&nbsp;</MouseButton>
                </Mouse>
                <MouseText>Scroll Down</MouseText>
            </MovingMouseHolder>
        </Content>
</Container>
}

const Container = styled.section`
margin-top: 2em;
    overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;

    @media (max-width: 1100px) {
        height: auto;
    }
`;

const Content = styled.div`
    margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const CTN = styled.div`
/* border-radius: 5px; */
/* border: 2px solid #fff; */
padding: 30px;
/* margin-bottom: 2vw; */
max-width: 800px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: flex-start;
align-content: space-between;
text-align: left;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;
 h1 {
     font-size: 3.5em;
     color: #f9f9f9;
 }
 h3 {
     font-size: 1.3em;
     color: #f9f9f9;
     font-weight: normal;
 }
 @media (max-width: 767px) {
    h1 {
        font-size: 20px;
		padding: 5px;
		word-wrap: break-word;
    }
    h3 {
        margin-top: 5px;
        margin-left: 3%;
        font-size: 13px;
    }
}
@media (max-width: 400px) {
   h3 {
        font-size: 11px;
   }
}
@media (min-width: 767px) and (max-width: 900px) {
    h3 {
		font-size: 25px;
		padding: 80px 20px;
		word-wrap: break-word;
	}
    h1 {
		font-size: 23px;
		padding: 10px;
		word-wrap: break-word;
	}
}
@media (min-width: 900px) and (max-width: 1100px) {
    h3 {
		font-size: 27px;
		padding: 80px 20px;
		word-wrap: break-word;
	}
    h1 {
		font-size: 35px;
		padding: 10px;
		word-wrap: break-word;
	}
}
`;
const BlueText = styled.div`
 color: #5edcf8;
 display: inline;
`;
const Resume = styled.a`
font-weight: bold;
color: #000;
background-color: #f9f9f9;
margin-top: 20px;
margin-bottom: 20px;
width: auto;
height: 56px;
letter-spacing: 1.8px;
font-size: 15px;
padding: 20px 24px;
border: 1px solid transparent;
border-radius: 4px;
cursor: pointer;
text-transform: uppercase;
a {
    text-decoration: none;
    color: black;
}
&:hover {
    background: rgb(198,198,198);
}
@media (max-width: 768px) {
    padding: 15px 10px 0 10px;
}
`;

const MovingMouseHolder = styled.div`
    margin: auto;
    margin-top: 60px;
    width: 170px;
    min-width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Mouse = styled.div`
    width: 26px;
    height: 40px;
    position: relative;
    right: 0;
    border-radius: 18px;
    border: 2px solid #fff;
    `;

const MouseButton = styled.div`
    background-color: #fff;
    width: 4px;
    height: 10px;
    border-radius: 2px;
    position: absolute;
    top: 10%;
    left: 50%;
    margin: 0 0 0 -2px;
    animation: mouse-scroll 1s infinite alternate;
`;

const MouseText = styled.div`
margin-top: 20px;
    color: #f9f9f9;
    font-size: 12px;
    line-height: 1em;
`;


export default Landing;