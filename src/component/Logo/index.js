import logo from '../../imgs/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    cursor: pointer;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

const Logo = ({ onClick }) => {
    return (
        <LogoContainer onClick={onClick}>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <p><strong>Store</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo