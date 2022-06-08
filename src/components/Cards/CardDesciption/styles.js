import styled from "styled-components";
import { cor } from '../../../styles/global-styles'

export const Descricao = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 0 5px;
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

export const Btn = styled.span`
    width: 100%;
    text-transform: uppercase;
    color: ${cor.red};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
`