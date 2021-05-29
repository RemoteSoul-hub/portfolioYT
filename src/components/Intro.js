import styled from 'styled-components';

const Intro = (props) => {
    return (
    <Container>
        <SmallerContainer>
        <TitleSmall>Hey it's me!</TitleSmall>
        <TitleBig>Yahya Tahoune</TitleBig>
        <TitleBig1>Design. Code. Debug</TitleBig1>
        <TitleSmall1>Creating Functional, Clean and Elegant Web Experiences.</TitleSmall1>
        <Resume>
           <a href="https://drive.google.com/file/d/12XrPmiSVI7pmnlgJFro_KTT8VvN5hV5q/view?usp=sharing"> <p>Get My Resume </p> </a>
        </Resume>
        </SmallerContainer>
        <ScrollMouse>
        <span class="scroll-btn">
	        <a href="/">
		<span class="mouse">
			<span>
			</span>
		</span>
	</a>
  <p>Scroll down</p>

</span>
        </ScrollMouse>
    </Container>
)};

const Container = styled.div`
    background-color: #041831;
    height: 100vh;
    color: #5edcf8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    position: relative;
	padding: 0 26px;
	overflow: hidden; 
    @media (max-width: 1000px) {
        text-align: center;
		height: 110vh;
    }
`;

const SmallerContainer = styled.div`
        margin-right: 25%;
        margin-bottom: 5%;
        position: relative;
        white-space: nowrap;
        @media (max-width: 1000px) {
			margin-left: 0;
			width: auto;
        }
`;

const TitleSmall = styled.h3`
color: #5edcf8;
font-weight: bold;
margin-top: 15px;
word-wrap: break-word;
display: block;
margin-left: 2em;

@media (max-width: 768px) {
    font-size: 13px;
	margin-left: 12%;
}
@media (max-width: 400px) {
    font-size: 11px;
}
@media (min-width: 400px) and (max-width: 1000px) {
		font-size: 12px;
		padding: 10px;
		margin-left: 13%;
		word-wrap: break-word;
	}
`;

const TitleBig = styled.h1`
display: block;
    color: #fff;
    font-size: 5em;
    font-weight: bold;
    letter-spacing: 1.1px;
	word-wrap: break-word;
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

const TitleSmall1 = styled(TitleSmall)`
    color: white;
`;

const TitleBig1 = styled(TitleBig)`
    color: #5edcf8;
`;

const Resume = styled.button`
font-size: 15px;
margin-top: 2em;
padding: 20px 24px;
height: 56px;
border-radius: 4px;
cursor: pointer;
display: inline-block;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb(249,249,249);
border: none;
color: black;
font-weight: bold;  
a {
    text-decoration: none;
}
&:hover {
    background: rgb(198,198,198);
}

@media (max-width: 1000px) {
    margin-left: 25%;
	text-decoration: none;
}
@media (min-width: 400px) and (max-width: 1000px) {
		margin-left: 30%;
	}
`;

const ScrollMouse = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	margin-top: 50px;
	margin-right: auto;
	margin-left: 18%;

	@media (min-width: 400px) and (max-width: 1000px) {
		margin-left: 26%;
	}
	
   p {
  margin-left: -1px;
}
@-webkit-keyframes ani-mouse {
	0% {
	opacity: 1;
	top: 29%;
	}
	15% {
	opacity: 1;
	top: 50%;
	}
	50% {
	opacity: 0;
	top: 50%;
	}
	100% {
	opacity: 0;
	top: 29%;
	}
}
@-moz-keyframes ani-mouse {
	0% {
	opacity: 1;
	top: 29%;
	}
	15% {
	opacity: 1;
	top: 50%;
	}
	50% {
	opacity: 0;
	top: 50%;
	}
	100% {
	opacity: 0;
	top: 29%;
	}
}
@keyframes ani-mouse {
	0% {
	opacity: 1;
	top: 29%;
	}
	15% {
	opacity: 1;
	top: 50%;
	}
	50% {
	opacity: 0;
	top: 50%;
	}
	100% {
	opacity: 0;
	top: 29%;
	}
}
 .scroll-btn {
	display: block;
	position: relative;
	/* left: 0;
	right: 0; */
	text-align: center;
	margin-left: 60%;
}
.scroll-btn > * {
	display: inline-block;
	line-height: 18px;
	font-size: 13px;
	font-weight: normal;
	color: #ffffff;
	font-family: Poppins, sans-serif;
	letter-spacing: 2px;
}
.scroll-btn > *:hover,
.scroll-btn > *:focus,
.scroll-btn > *.active {
	color: #ffffff;
}
.scroll-btn > *:hover,
.scroll-btn > *:focus,
.scroll-btn > *:active,
.scroll-btn > *.active {
	opacity: 0.8;
	filter: alpha(opacity=80);
}
.scroll-btn .mouse {
	position: relative;
	display: block;
	width: 35px;
	height: 55px;
	margin: 0 auto 20px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	border: 3px solid white;
	border-radius: 23px;
}
.scroll-btn .mouse > * {
	position: relative;
	display: block;
	top: 29%;
	left: 50%;
	width: 8px;
	height: 8px;
	margin: -4px 0 0 -4px;
	background: white;
	border-radius: 50%;
	-webkit-animation: ani-mouse 2.5s linear infinite;
	-moz-animation: ani-mouse 2.5s linear infinite;
	animation: ani-mouse 2.5s linear infinite;
`;

export default Intro;