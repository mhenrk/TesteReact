import styled from 'styled-components'
import { cor, tipografia } from '../../styles/global-styles'

export const Container = styled.div`
    width: 1280px;
    height: 98px;
    background: ${cor.blue};
  /*javascript nele flex*/
    display: none;
    align-items: flex-end;
    justify-content: center;
    padding: 21px 60px;
`

export const Label = styled.label`
  width: 100%;
`
export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: ${cor.white};
  padding: 0px 10px;
  font: ${tipografia.caption};
`

export const Select = styled.select`
  width: 180px;
  height: 40px;
  padding: 0 10px;
  color:${cor.gray};
  outline: none;
  border-radius: 5px;
`

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BtnGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 40px;
    background: ${cor.red};
    color: ${cor.white};
    font: ${tipografia.h5};
    border-radius: 5px;
    margin: 0 16px;
    cursor: pointer;
`

// export const Container = styled.div``