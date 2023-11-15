import Button from 'react-bootstrap/Button';

import './App.css';
import Counder from './Counder';

function App() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{height:'100vh'}}>
        <div className='d-flex align-items-center flex-column p-5 rounded' style={{backgroundColor:'white'}}>
        <h1>Counting App</h1>
       <Counder/>
        </div>
      </div>
    </>
  );
}

export default App;
