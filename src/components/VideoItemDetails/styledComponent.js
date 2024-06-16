import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84vw;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : ' #000000'};
  padding: 20px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'light' ? '' : '#f9f9f9')};
`

export const He = styled.h1``

export const ViewsContainerVideoDetails = styled.ul`
  margin-top: 0px;
  list-style-type: disc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  color: #616e7c;
`

export const ViewsAndLikeBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VideoDetailsDescContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const LikeBtn = styled.button`
  border-width: 0px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  color: ${props => (props.isActive === 'like' ? '#3b82f6' : '#616e7c')};
  cursor: pointer;
`
export const DislikeBtn = styled.button`
  border-width: 0px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  color: ${props => (props.isActive === 'dislike' ? '#3b82f6' : '#616e7c')};
  cursor: pointer;
`
export const SaveBtn = styled.button`
  border-width: 0px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  color: ${props => (props.activeBtn ? '#3b82f6' : '#616e7c')};
  cursor: pointer;
`
