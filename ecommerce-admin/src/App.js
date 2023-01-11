import  Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./App.css"
import { Home } from './pages/home/Home';
import Chart from './components/chart/Chart';

function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Home />
        <Chart />
      </div>
    </div>
  );
}

export default App;
