import styled from 'styled-components'
import banner from '../../assets/img/hero/desktop-banner.png'
import { cor } from '../../styles/global-styles'

export const Container = styled.div`
    width: 100%;
    height: 464px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const TextDiv = styled.div`
    position: absolute;
    height: 336px;
    color: var(--white);
    width: 667px;
    top: 48px;
    left: 60px;
`

export const Titulo = styled.h1`
    font-size: 68px;
    line-height: 72px;
    font-weight: 300;
    color: ${cor.white};
`
export const Subtitulo = styled.p`
    font-size: 26px;
    line-height: 48px;
    font-weight: 400;
    color: ${cor.red};
    padding: 15px 0;
`

export const SaibaMais = styled.div`
    border: 1px solid transparent;
    width: 216px;
    height: 48px;
    position: absolute;
    left: 0;
    background: ${cor.black};
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
`

export const Span = styled.span`
    width: 24px;
    height: 24px;
    border: 1px solid ${cor.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${cor.white};
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
`
export const BtnText = styled.p`
    color: ${cor.white};
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    
`