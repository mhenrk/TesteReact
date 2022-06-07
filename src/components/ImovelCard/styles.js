import styled from 'styled-components'
import { cor } from '../../styles/global-styles'

export const Card = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    min-width: 371px;
    height: 552px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 72px;
`

export const Classificacao = styled.div`
    position: absolute;
    top: 360px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    padding: 0 5px;
    background: ${cor.white};
    color: ${cor.black};
    text-transform: uppercase;
    border: 1px solid transparent;
    cursor: pointer;
`

export const Descricao = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 0 5px;
`

export const Btn = styled.span`
    width: 100%;
    text-transform: uppercase;
    color: ${cor.red};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
`

export const Titulo = styled.span`
    width: 100%;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    color: ${cor.gray};
    padding: 5px 0;
`
export const Subtitulo = styled.span`
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: ${cor.black};
    padding: 5px 0;

    img{
        padding-right: 5px;
    }
`

