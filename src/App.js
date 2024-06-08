import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


const App =()=> {

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <News setProgress={setProgress} pageSize={15} country='in' category='sports'/>
      </div>
    )

}

export default App;