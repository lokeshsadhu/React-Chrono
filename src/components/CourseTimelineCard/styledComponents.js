import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and(min-width:768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const CourseTitle = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.3;
  margin: 0px;
  @media screen and(min-width:768px) {
    font-size: 24px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 4px;
  @media screen and(min-width:768px) {
    font-size: 14px;
  }
`
export const CourseDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.2;
  margin-left: 0px;
  @media screen and(min-width:768px) {
    font-size: 16px;
  }
`
export const CourseTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  align-items: center;
`
export const CourseTagItem = styled.li`
  list-style-type: none;
`
export const CourseTag = styled.p`
  color: #25262c;
  background-color:#e28f0;
  font-family: 'Roboto';
  font-weight:500;
  border-radius:4px
  font-size: 10px;
  line-height: 1.2;
  padding:4px 8px;
  margin-bottom:8px;
  margin-right:8px;
  margin-left: 0px;
  @media screen and(min-width:768px) {
    font-size: 12px;
    font-weight600
  }
`
