import React from 'react'
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/textform';
import About from './component/About';

const App = ()=>
{
return (
    <>
    <Navbar title = "textutils" intro = "introduction"/>
<div className = "container" >
  <TextForm />
  <About/>
  </div>
  </>
  );
};


export default App;
