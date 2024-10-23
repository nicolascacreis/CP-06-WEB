import perfil from '../../imgs/perfil.svg'
import sacola from '../../imgs/sacola.svg'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

function IconesHeader() {
    return (
        <Icones>
            <RouterLink to="/perfil">
                <Icone><img src={perfil} alt='Perfil'></img></Icone>
            </RouterLink>
            <RouterLink to="/sacola">
                <Icone><img src={sacola} alt='Sacola'></img></Icone>
            </RouterLink>
        </Icones>
    )
}

export default IconesHeader