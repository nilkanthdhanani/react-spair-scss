import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes';
import './styles/index.scss';

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
