import './App.css';
import React ,{useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";


// export default class App extends Component {
const App=(props)=>{

  // apikey="074125a3db5548cea6ec27a132a459df"
  const apikey=process.env.REACT_APP_NEWS_API
  // state={
  //   progress:0
  // }
  const [progress, setProgress] = useState(0)
  // setProgress=(progress)=>{
  //   this.setState({
  //     progress:progress
  //   })
  // }
  // render() {
    return (<Router>
    <div>
    <LoadingBar
        color='#f11946'
        progress={progress}
        // progress={this.state.progress}
        
      />

      {/* this.apiKey=apikey
      this.setProgress=setProgress */}
      <NavBar/>
      <Routes>
          <Route   exact path="/" element={<News key="general" setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="general"/>}></Route>
      </Routes>
      <Routes>
          <Route   exact path="/business" element={<News key="business" setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="business"/>}></Route>
      </Routes>
      <Routes>
          <Route   exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="entertainment"/>}></Route>
      </Routes>
      <Routes>
          <Route   exact path="/general" element={<News key="general" setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="general"/>}></Route>
      </Routes>
      <Routes>
          <Route  exact path="/health" element={<News key="health"  setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="health"/>}></Route>
      </Routes>
      <Routes>
          <Route   exact path="/science" element={<News key="science" setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="science"/>}></Route>
      </Routes>
      <Routes>
          <Route   exact path="/sports" element={<News key="sports" setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="sports"/>}></Route>
      </Routes>
      <Routes>
          <Route   exact path="/technology" element={<News key="technology" setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="technology"/>}></Route>
      </Routes>
      
      {/* <News setProgress={setProgress} apikey={apikey} pageSize={6} country="in" category="technology"/> */}
    </div>;
    </Router>
    )
  // }
}
export default App;