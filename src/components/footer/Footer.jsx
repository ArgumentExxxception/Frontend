import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
    align-items:center;
    height:60px;
    background-color:red;
`

const Footer = () => {
    return ( 
        <FooterContainer>
            Ⓒ 2023 Almaz Ahmetshin
        </FooterContainer>
    );
}
 
export default Footer;