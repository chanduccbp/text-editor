import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextEditorContainer = styled.div`
  width: 70%;
  height: 70vh;
  background-color: #1b1c22;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TitleAndLogo = styled.div`
  width: 45%;
  height: 90%;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'roboto';
  text-align: center;
`
export const Image = styled.img`
  width: 80%;
`

export const Editor = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 5px;
  border: 1px solid #cbd5e1;
`

export const Icons = styled.ul`
  height: 10%;
  border-bottom: 1px solid #cbd5e1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #334155;
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0px;
  padding-left: 0px;
`

export const IconItem = styled.li`
  margin-right: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border-style: none;
`

export const BoldButton = styled(Button)`
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
`
export const ItalianButton = styled(Button)`
  color: ${props => (props.isItalian ? '#faff00' : '#f1f5f9')};
`

export const UnderlineButton = styled(Button)`
  color: ${props => (props.isUnderlined ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  background-color: #25262c;
  height: 90%;
  width: 100%;
  border-style: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #ffffff;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalian ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'normal')};
  padding: 5px;
  font-size: 20px;
`
