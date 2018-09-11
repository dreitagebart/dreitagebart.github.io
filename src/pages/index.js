import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Typist from 'react-typist'

const Container = styled.div`
  border: 1px solid green;
  position: absolute;
  top: 10px;
  left: 0;
  // left: auto;
  display: flex;
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false,
      cmd: '',
    }
  }

  onChange = e => {
    this.setState({ cmd: e.target.value })
  }

  onKeyDown = e => {
    if (e.keyCode === 13) {
      console.log('enter key')
      if (e.target.value.startsWith('cd ')) {
        window.location.href =
          'http://mindreport.com/' + e.target.value.substring(3)
      }
    }
  }

  render() {
    const { done, cmd } = this.state

    return (
      <div className="content">
        <div className="typist">
          <Typist
            onTypingDone={() => {
              this.setState({ done: true })
            }}
            startDelay={2000}
            stdTypingDelay={40}
            cursor={{
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: true,
              hideWhenDoneDelay: 3000,
            }}
          >
            <b>mkdir mindreport</b>
            <Typist.Backspace count={10} delay={1200} />
            <b>myAwesomePage</b>
            <br />
            <Typist.Delay ms={1000} />
            <b>cd ./myAwesomePage</b>
            <br />
            <Typist.Delay ms={1000} />
            <b>npm install</b>
            <Typist.Backspace count={7} delay={800} />
            <b>init </b>
            {/* <Typist delay={1800} /> */}
            <b>-y</b>
            <br />
            <Typist.Delay ms={1500} />
            <b>code .</b>
            <br />
            <Typist.Delay ms={3000} />
            &nbsp;&#123; <br />
            <span className="prop">firstName: </span>
            <span className="value">"Stefan",</span>
            <br />
            <span className="prop">lastName: </span>
            <span className="value">"Büchold",</span>
            <br />
            <span className="prop">workingAt: </span>
            <span className="value">
              <a href="http://www.wittenstein.de">WITTENSTEIN SE</a>,
            </span>
            <br />
            <span className="prop">job: </span>
            <span className="value">"Software developer",</span>
            <br />
            <span className="prop">firstCompiledAt: </span>
            <span className="value">"1985-11-27",</span>
            <br />
            <span className="prop">softwareLove: </span>[
            <span className="value">"React", "Electron", "VS Code", "SAP"</span>
            ]<br />
            <span className="prop">github: </span>
            <span className="value">
              <a href="https://github.com/dreitagebart">@dreitagebart</a>
            </span>
            <br /> &#125;
            <br />
          </Typist>
          {done && (
            <input
              onKeyDown={this.onKeyDown}
              autoCorrect={false}
              autoFocus
              value={cmd}
              onChange={this.onChange}
              type="text"
              className="console"
            />
          )}
        </div>
        <div className="error404page">
          <div className="newcharacter404">
            {/* <div className="sapisgreat" /> */}
            <div className="coffee" />
            <div className="chair404" />
            <div className="leftshoe404" />
            <div className="rightshoe404" />
            <div className="legs404" />
            <div className="torso404">
              <div className="body404" />
              <div className="leftarm404" />
              <div className="rightarm404" />
              <div className="head404">
                <div className="cappy404" />
                <div className="eyes404" />
              </div>
            </div>
            <div
              className="laptop404"
              // onClick={() => browserHistory.push('/inbox')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
