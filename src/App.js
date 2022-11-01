import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <Home></Home>
      <Toaster
        position="top-center"
      />
    </div>
  );
}

export default App;
