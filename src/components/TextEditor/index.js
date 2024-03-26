import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  TextEditorContainer,
  TitleAndLogo,
  Heading,
  Image,
  Editor,
  Icons,
  IconItem,
  BoldButton,
  ItalianButton,
  UnderlineButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalian: false, isUnderlined: false, textInput: ''}

  onClickBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  onClickItalian = () => {
    this.setState(prevState => ({
      isItalian: !prevState.isItalian,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isUnderlined: !prevState.isUnderlined,
    }))
  }

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {isBold, isItalian, isUnderlined, textInput} = this.state

    return (
      <AppContainer>
        <TextEditorContainer>
          <TitleAndLogo>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TitleAndLogo>
          <Editor>
            <Icons>
              <IconItem>
                <BoldButton
                  type="button"
                  onClick={this.onClickBold}
                  data-testid="bold"
                  isBold={isBold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </IconItem>
              <IconItem>
                <ItalianButton
                  type="button"
                  onClick={this.onClickItalian}
                  data-testid="italic"
                  isItalian={isItalian}
                >
                  <GoItalic size={25} />
                </ItalianButton>
              </IconItem>
              <IconItem>
                <UnderlineButton
                  type="button"
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                  isUnderlined={isUnderlined}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </IconItem>
            </Icons>
            <TextArea
              value={textInput}
              onChange={this.onChangeText}
              isBold={isBold}
              isItalian={isItalian}
              isUnderlined={isUnderlined}
            />
          </Editor>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
