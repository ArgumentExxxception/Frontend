import styled from "styled-components";

const HeaderFixed = styled.header`
    display: flex;
    height:60px;
    width: 100%;
    align-items:center;
    justify-content:center;
    position:fixed;
    background-color:red;
`

const Header = () => {
    return( 
    <HeaderFixed>
        My App
    </HeaderFixed>
    );
} 

export default Header;