import './App.css';
import {useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import FaceRecognition from './FaceRecognition/FaceRecognition';

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const returnRequestOptions = () => {
    const PAT = 'a6cc7d0c3b8f4016a1da98681085d7a1';
    const USER_ID = 'clarifai';
    const APP_ID = 'main';
    // const MODEL_ID = 'face-detection';
    const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": IMAGE_URL
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    return requestOptions;
  }

  const onInputChange = (event) => {
    setInput(event.target.value);

  }
  
  const onButtonSubmit = () => {
    setImageUrl(input);
    console.log('click', input, 'url=', imageUrl);

    fetch("https://api.clarifai.com/v2/models/face-detection/outputs", returnRequestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('hi', result);
        const regions = result.outputs[0].data.regions;

        regions.forEach(region => {
          // Accessing and rounding the bounding box values
          const boundingBox = region.region_info.bounding_box;
          const topRow = boundingBox.top_row.toFixed(3);
          const leftCol = boundingBox.left_col.toFixed(3);
          const bottomRow = boundingBox.bottom_row.toFixed(3);
          const rightCol = boundingBox.right_col.toFixed(3);

          region.data.concepts.forEach(concept => {
            // Accessing and rounding the concept value
            const name = concept.name;
            const value = concept.value.toFixed(4);

            console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
          });
        });
      })
      .catch(error => console.log('error', error));
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
      <FaceRecognition imageUrl={imageUrl}/>
    </div>
  );
}

export default App;
