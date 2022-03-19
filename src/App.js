import { Route, Routes  } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpsPage from "./pages/NewMeetUps";
import MainNavigation from "./components/layout/MainNavigation"

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/newmeet" element={<NewMeetUpsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
