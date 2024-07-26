import React, {useState} from 'react'

export default function TextForm(props) {
  const handleonclick =()=>{
    console.log("clickonupper" + text);
    const newtext = text.toUpperCase();
    setText(newtext)
  } 
  const handleofclick= ()=>{
    console.log(text);
    const newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleonchange = (event)=>{
    console.log("onclick");
    setText(event.target.value)
  }
  const handlecapclick = ()=>{
    console.log(text);
    const capitalizedStr = text.charAt(0).toUpperCase() + text.slice(1);
setText(capitalizedStr)
  }
  const [text, setText] = useState('enter text here');
  return (
    <>
    <div>
<h1></h1>
<div className='mb-3 my-3' >
<textarea className = "form-control" value={text} onChange={handleonchange} id= "mybox" rows="10"></textarea>
</div>
<button className='button mx-1' onClick={handleonclick}>convert to uppercase</button>
<button className='button mx-1' onClick={handleofclick}>convert to lowercase</button>
<button className='button mx-1' onClick={handlecapclick}>capitalize text</button>
    </div>
    <div className='container2'>
      <h1>Your Text Summary</h1>
      <p>You are type in your text {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>You can read to this paragraph in this time {0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
 </>
   
  )
}
