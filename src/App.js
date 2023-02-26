import { Route, Routes } from "react-router-dom";
import Categoriescomponent from "./components/categories/Categories.component";
import Details from "./components/Details/details";
import Homedirectory from "./components/home/home.directory";
import Navigationcomponent from "./components/navigation/mainNav/navigation.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigationcomponent />}>
          <Route index element={<Homedirectory />} />
          <Route path="categories" element={<Categoriescomponent />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
