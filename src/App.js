import './App.css';
import {useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'

function App() {
  const [input, setInput] = useState('');

  const onInputChange = (event) => {
    setInput(event.target.value);
  }
  
  const onButtonSubmit = () => {
    console.log(input);
  }

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        inputChange={onInputChange}
        buttonSubmit={onButtonSubmit}
        />
      <ParticlesBg className="particles" type="cobweb" bg={true} />
{/* {      
      
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
