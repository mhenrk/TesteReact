import styled from 'styled-components'
import { cor } from '../../styles/global-styles'


export const Container = styled.div`
    width: 100%;
    padding: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Btn = styled.span`
    width: 450px;
    height: 48px;
    font-size: 24;
    font-weight: 500;
    line-height: 32px;
    margin: 0 auto;
    text-transform: uppercase;
    background: ${cor.red};
    color: ${cor.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
`