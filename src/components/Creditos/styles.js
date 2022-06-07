import styled from 'styled-components'
import { cor } from '../../styles/global-styles'

export const Container = styled.div`
    width: 100%;
    background: ${cor.creditos};
    color: ${cor.white};
    display: flex;
    padding: 0 60px;
    height: 68px;
    align-items: center;
`
export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
`