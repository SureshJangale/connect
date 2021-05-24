import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'


function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar/>
      {/* React-router -> chat screen */}

      </div>
    </div>
  );
}

export default App;
