import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage.jsx";
import "./App.css";
import UpcomingEventsMainPage from "./components/upcomingEventsMainPage.jsx";
import Teams from "./components/teamsMainPage.jsx";
import SponsorsPage from "./components/sponsorsMainPage.jsx";
import GalleryPage from "./components/gallery.jsx";


const App = () => {
    return (
        <>
            <div className="RootDiv">
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="Gallery" element={<GalleryPage />} />
                    <Route path="Upcoming-Events" element={<UpcomingEventsMainPage />} />
                    <Route path="Team" element={<Teams />} />
                    <Route path="Sponsors" element={<SponsorsPage />} />
                </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;