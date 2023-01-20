import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./Components/Hearoes/MainPage";
import AboutSchool from "./Components/Hearoes/AboutSchool";
import AboutUs from "./Components/Hearoes/AboutUs";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Enter from "./Components/Enter/Enter";
import Master from "./Components/masterClass/Master";
import Course from "./Components/Courses/Course";
import Participation from "./Components/participation/Participation";
import Station from "./Components/statie/Staties";
import StatieBefore from "./Components/statie/StatieBefore";
import Front from "./Components/Courses/Front";
import Purchases from "./Components/masterClass/Purchases";
import BuyCourse from "./Components/Courses/BuyCourse";

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
                    <Route path={'/Station'} element={<Station/>}/>
                    <Route path={'/stationBefore'} element={<StatieBefore/>}/>
                    <Route path={'/Подробнее'} element={<Front/>}/>
                    <Route path={'/Purchases'} element={<Purchases/>}/>
                    <Route path={'/Station'} element={<Station/>}/>
                    <Route path={'/Buy'} element={<BuyCourse/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
