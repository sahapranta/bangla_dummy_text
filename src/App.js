import React, {useState, useEffect} from 'react';
import { Card, Box, CardContent, Fab, Tooltip, Snackbar, Typography, Container} from '@material-ui/core';
import copyIcon from './file.svg';
import './App.css';
import Slider  from './Components/Slider';
import Paragraph  from './Components/Paragraph';
import {gen} from './Components/generate.js';
import strip from './Components/strip.js';
import Joyride from 'react-joyride';

function App() {
  const [para, setPara] = useState(2);
  const [sentence, setSentence] = useState(3);  
  const [text, setText] = useState(gen(para, sentence));  
  const [copied, setCopied] = useState(false);
  // const [run, setRun] = useState(true);
  let run = true;
  let landed = localStorage.getItem('landed');
  if(!landed){
    localStorage.setItem('landed', true);
  } else {
    run = false
  }

  const steps = [
    {
      target: 'body',
      content:'বাংলা টেক্সট জেনারেটর এ আপনাকে স্বাগতম!'
    },
    {
      target: '.Paragraph',
      content:'Set the number of Paragraph you want.'
    },
    {
      target: '.Sentence',
      content:'Set the number of Sentence in Paragraph you want.'
    },
    {
      target:'.pbox',
      content:'Here you will get the Texts.'
    },
    {
      target:'.copy',
      content: 'Click here to copy the text.'
    }
  ];
  
  useEffect(()=>
    {setText(gen(para, sentence))},[para, sentence]
  )

  function copy_to_clipboard(){ 
    navigator
      .clipboard
      .writeText(strip(text))
      .then(()=>setCopied(true))
      .catch((err)=>console.log(err));
    }

  return (
    <div className="App">
      <a href="https://github.com/sahapranta" target="_blank" rel="noopener noreferrer" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
      
        <Box className="hero"> 
          <h1>Bangla Text Generator</h1>
          <p>বাংলায় ইউনিকোড ডামি টেক্সট জেনারেটর</p>
        </Box>
        <div className="controls">
          <Card>          
            <CardContent>                          
                <div className="heading">                                 
                
                <div className="slider-box">
                  <div className="slide Paragraph">
                    <small>Number of Paragraph {para}</small>
                    <Slider set={setPara} para={para} max={10}/>
                  </div>
                  <div className="slide Sentence">
                    <small> Number of Sentence {sentence}</small>
                    <Slider set={setSentence} para={sentence} max={5}/> 
                  </div>
                </div>

                <Tooltip title="Copy Text" aria-label="copy">
                    <Fab className="copy" size="small" onClick={copy_to_clipboard}>
                      <img src={copyIcon} width="25" alt="copy"/>
                    </Fab>
                  </Tooltip>

                </div>
                <Joyride
                    steps={steps}
                    continuous={true}
                    run={run}
                    scrollToFirstStep={true}
                    showProgress={true}
                    showSkipButton={true}         
                    styles={{
                      options: {
                        zIndex: 999999990,
                      },
                    }}
                  />
                <div className="pbox">
                  <Paragraph text={text}/>
                  <Snackbar
                    message={`Text of ${para} Paragraph Copied`}
                    open={copied}
                    autoHideDuration={3000}
                    onClose={()=>setCopied(false)}/>
                </div>
                <small>* Texts are used from BanglaPedia</small>
            </CardContent>
          </Card>

          <footer className="footer">
            <Container maxWidth="lg">
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Copyright Pranta Saha &copy; {new Date().getFullYear()}
              </Typography>          
            </Container>
          </footer>
        </div>
    </div>
  );
}

export default App;
