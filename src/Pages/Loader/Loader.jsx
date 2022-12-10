import React from 'react';

import BeatLoader from 'react-spinners/BeatLoader';
import './loader.css';


export default function Loader() {

    return (

        <div className='loader'>
        <BeatLoader
          color={'#E5383B'}
          size={40}
          aria-label="Bear Loader"
          data-testid="loader"
        />
      </div>

    )
}