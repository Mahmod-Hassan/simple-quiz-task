import { Route, Routes } from 'react-router-dom';
import Quiz from "./Quiz";

function App() {
  return (
    <div>
         <Routes>
             <Route path='/' element={<Quiz />}></Route>
         </Routes>
    </div>
  );
}

export default App;
