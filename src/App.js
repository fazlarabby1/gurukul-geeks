import './App.css';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar />
      <h1 className='text-2xl text-center font-bold my-9'>Hi Khalid, Welcome to Geeks of Gurukul</h1>
      <Form />
    </div>
  );
}

export default App;
