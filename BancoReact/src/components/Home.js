import React from 'react'
import ImageSlider from './ImageSlider';
import About from './About';
import MenuSidebar from './MenuSidebar';

function Home() {
  return (
    <div>
      <MenuSidebar/>
      <About/>
      <ImageSlider/>
    </div>
  )
}

export default Home