import styled from 'styled-components';


const Footer = (props) => {
    return  <Copyright>
    <div> Made with ❤️ and 🌮
    </div>
    <div>© 2021 Yahya Tahoune
</div></Copyright>
}

const Copyright = styled.div`
     background-color: #154b8d;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
     height: 10vh;
`;

export default Footer;