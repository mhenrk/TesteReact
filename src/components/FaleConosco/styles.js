import styled from 'styled-components'
import { cor } from '../../styles/global-styles'

export const Container = styled.div`
    width: 100%;
    height: 524px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Informativo = styled.div`
    display: flex;
    width: 37%;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
`


export const Titulo = styled.h1`
    font-size: 68px;
    line-height: 72px;
    font-weight: 300;
    color: ${cor.red};
`

export const Subtitulo = styled.p`
    padding: 16px 0;
    color: ${cor.gray};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
`
export const Contato = styled.div`
    width: 100%;
`

export const Button = styled.span`
    width: 266px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    padding: 10px;
    background: ${cor.black};
    
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    
    color: ${cor.white};
    text-transform: uppercase;
`
