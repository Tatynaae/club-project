import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./Components/Hearoes/MainPage";
import AboutSchool from "./Components/Hearoes/AboutSchool";
import AboutUs from "./Components/Hearoes/AboutUs";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Enter from "./Components/Enter/Enter";

function App() {
  return (
   <>
       <div className="App">
           <Routes>
               <Route path={'/home'} element={<MainPage/>}/>
               <Route path={'/AboutSchool'} element={<AboutSchool/>}/>
               <Route path={'/OurCourses'}/>
               <Route path={'/AboutUs'} element={<AboutUs/>}/>
               <Route path={'/Profile'} element={<AdminPanel/>}/>
           </Routes>
       </div>
       <Routes>
           <Route path={'/EnterToProfile'} element={<Enter/>}/>
       </Routes>
   </>
  );
}

export default App;
