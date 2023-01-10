import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./Components/Hearoes/MainPage";
import AboutSchool from "./Components/Hearoes/AboutSchool";
import AboutUs from "./Components/Hearoes/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/home'} element={<MainPage/>}/>
        <Route path={'/AboutSchool'} element={<AboutSchool/>}/>
        <Route path={'/AboutUs'} element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
