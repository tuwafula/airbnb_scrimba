import React from 'react'

import dataArrOfObjs from './components/data/data';
import Card from './components/Card'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css';

const  App = (props) => {

  const cardArr = dataArrOfObjs.map((data) => {
    return (
      <Card 
      key={data.id}
      data={data}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
      {cardArr}
      </section>
    </div>
  );
}

export default App; 