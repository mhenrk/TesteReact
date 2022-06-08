import styled from "styled-components";
import { cor } from '../../../styles/global-styles'

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

    img{
        padding-right: 10px;
    }
`
