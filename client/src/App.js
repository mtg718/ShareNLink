import {useRef, useState,useEffect} from 'react'
import './App.css';
import {uploadFile }from './uploads/api.js'


function App() {
  const [file,setFile]= useState('');
  const [result,setResult]= useState('');
  const [loading,setLoading] = useState(false);
  const fileInputRef = useRef();
const background =
  "https://smehelper.vastraapp.com/assets/marketing-tools/images/SMEhelperPage/visiting-card.png";

  useEffect(()=>{

    const getImage=async()=>{
      if(file){
        const data= new FormData();
        data.append("name",file.name);
        data.append("file",file);

        setLoading(true);
        setResult('');
     try {
          let response = await uploadFile(data);
          setResult(response.path);
        } catch (error) {
          console.error('Error while uploading file:', error.message);
        } finally {
          setLoading(false);
        }
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
      <img id="bg" src={background} />
      <div className="box">
        <h1>Share Your Files!</h1>
        <h3>Upload and share the download link!</h3>
        <button onClick={() => handleUpload()}>Upload</button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {loading && <h2>Loading...</h2>}
        {result && (
          <div id="link">
            <h4 id="link-para">Get your generated link...</h4>
            <a id="link-data" href={result} target="_blank">
              {result}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
