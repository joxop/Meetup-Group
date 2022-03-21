import { Route, Routes } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpsPage from "./pages/NewMeetUps";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/newmeet" element={<NewMeetUpsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
