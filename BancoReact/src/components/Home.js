import React from 'react'
import Header from './Header';
import ImageSlider from './ImageSlider';
import About from './About';
import Footer from './Footer';
import Dropzone from './DropZone';

function Home() {
  return (
    <div>
      <About/>
      <ImageSlider/>
    </div>
  )
}

export default Home