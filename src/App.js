import srcpicture from './ReactPicture.jpg';
import video from './y2meta.com-1 Second Video-(480p).mp4';
import './App.css';
import './style.css';

function App() {
  return (
    <>
    <div style={{border:"solid" ,"1px" :"black",maxWidth:"100vw"}}>

      <h1 className="title red">Your name here</h1>

      <br />

      <img src="/jspicture.png" style={{height:"300px"}} />

      <br />

      <img src={srcpicture} style={{height:"300px"}} />

    </div><video width="320" height="240" controls>

        <source src={video} type="video/mp4" />

      </video>
      </>
  );
}

export default App;
