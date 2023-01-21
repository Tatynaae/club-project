import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./Components/Hearoes/MainPage";
import AboutSchool from "./Components/Hearoes/AboutSchool";
import AboutUs from "./Components/Hearoes/AboutUs";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Enter from "./Components/Enter/Enter";
import Master from "./Components/masterClass/Master";
import Course from "./Components/masterClass/Course";
import Participation from "./Components/participation/Participation";
import Pay from "./Components/Pay/Pay";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/AboutSchool'} element={<AboutSchool/>}/>
                    <Route path={'/OurCourses'}/>
                    <Route path={'/AboutUs'} element={<AboutUs/>}/>
                    <Route path={'/Profile'} element={<AdminPanel/>}/>
                    <Route path={'/EnterToProfile'} element={<Enter/>}/>
                    <Route path={'/Master'} element={<Master/>}/>
                    <Route path={'/OurCourse'} element={<Course/>}/>
                    <Route path={'/Participation'} element={<Participation/>}/>
                    <Route path={'/pay'} element={<Pay/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
