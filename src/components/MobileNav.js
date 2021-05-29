import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MobileNav = (props) => {
    return <Container>
         <AnchorLink href='#About'><span>About</span></AnchorLink>
   <AnchorLink href="#Featured"><span>Projects</span></AnchorLink>
   <AnchorLink href="#Contact"><span>Contact</span></AnchorLink>
    </Container>

}

const Container = styled.div`
    position: fixed;
   left: 0;
   bottom: 0;
   height: 8vh;
   width: 100%;
   background-color: #154b8d;
    visibility: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   a{
            padding: 30px;
            color: white;
             text-align: center;
            display: flex;
            min-width: 100px;
            z-index: auto;
            text-decoration: none;
            span {
                color: rgb(249,249,249);
                font-size: 16px;
                letter-spacing: 1.1px;
                line-height: 1.08;
                padding: 2px 0px;
                white-space: no-wrap;
                position: relative;
            }
            span:hover {
                color: #5edcf8;
            }
   }


   @media (max-width: 768px){
      visibility: visible;
   }
`;


export default MobileNav