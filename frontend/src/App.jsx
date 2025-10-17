import { Toaster} from 'sonner';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './page/Homepage';
import Notfound from './page/Notfound';


function App() {
  return (
    <>
      <Toaster richColors />
  
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element = {<Homepage/>}
        />

        <Route
          path='*'
          element = {<Notfound/>}
        />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
