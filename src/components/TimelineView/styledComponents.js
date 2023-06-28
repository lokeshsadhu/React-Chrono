import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  height: 100vh;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin-bottom:30px
  align-items: center;
`
export const Heading = styled.h1`
  color: #171f46;
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 2.7;
  margin: 0px;
  @media screen and(min-width:768px) {
    font-size: 20px;
  }
`
export const CCBPHeading = styled.span`
  color: #2b237c;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0px;
  @media screen and(min-width:768px) {
    font-size: 30px;
  }
`
