import logo from './logo.svg';
import './App.css';

function getTime(){return (new Date()).toLocaleTimeString()}

function App() {
  return (
    <div className="App">
      <div>
     <label htmlFor="name">Enter Name:</label>
     <input id='name'></input>
     <button style={{backgroundColor:'blue'}}>Click Me</button>
     <div>{getTime()}</div>
     </div>
    <div className="ui container comments">
      <div className="comment"><a href="/" className="avatar"><img alt="avatar" src="/"/></a>
     <div className="content"><a href="/" className="author">Author</a>
     <div className="metadata"><span className="date">{getTime()}</span></div>
     <div className="text">Nice Blog Post</div></div>
     

      </div>
    </div>
    
    </div>
    
  );
}

export default App;
