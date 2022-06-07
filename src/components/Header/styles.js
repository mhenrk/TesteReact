import styled from 'styled-components'
import { cor } from '../../styles/global-styles'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 72px;
    padding: 0 60px;
    background: ${cor.red};
`

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    padding: 0 10px;
`

export const FlexItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 15px;
    color: ${cor.white};
    cursor: pointer;
    
    img {
        padding: 0 5px;
    }
`



