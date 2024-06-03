import styled from 'styled-components'

export default function Main() {

  return (

    <MainStyled>
      Main
    </MainStyled>
    
  )
}

const MainStyled = styled.div`

  background: green;
  flex: 1; // height: calc(95vh - 10vh);


`

/*

  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;

  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;

  position: absolute;
  top: 79px;
  right: 0;
  bottom: 0;
  left: 0;

*/