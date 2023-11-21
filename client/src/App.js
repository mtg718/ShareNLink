import {useRef, useState,useEffect} from 'react'
import './App.css';
import {uploadFile }from './uploads/api.js'
function App() {
  const [file,setFile]= useState('');
  const [result,setResult]= useState('');
  const fileInputRef = useRef();
const background =
  "https://smehelper.vastraapp.com/assets/marketing-tools/images/SMEhelperPage/visiting-card.png";

  useEffect(()=>{

    const getImage=async()=>{
      if(file){
        const data= new FormData();
        data.append("name",file.name);
        data.append("file",file);

      let response= await uploadFile(data);
  setResult(response.path);
      }
    }
    getImage();
  },[file])

const handleUpload=()=>{
fileInputRef.current.click();
}

console.log(file);
  return (
    <div className="App">
      <img src={background} />
      <div className="box">
        <h1>Simple File Sharing!</h1>
        <h3>Upload and share the download link</h3>
        <button onClick={()=>handleUpload()}>Upload</button>
        <input type="file" 
        style={{display:"none"}}
        ref={fileInputRef}
        onChange={(e)=>setFile(e.target.files[0])}/>

        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
