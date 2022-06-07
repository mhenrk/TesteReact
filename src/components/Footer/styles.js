import styled from 'styled-components'
import { cor } from '../../styles/global-styles'

export const Container = styled.div`
    width: 100%;
    display: flex;
    background: ${cor.blue};
    color: ${cor.white};
    padding: 60px;
    height: 344px;
    justify-content: space-between;
`

export const List = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    padding-bottom: 16px;

    img{
        padding-right: 5px;
    }
`