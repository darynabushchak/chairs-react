import styles from "./App.module.css";
import CatalogItemPage from "./components/page_related/CatalogItemPage/CatalogItemPage";
import Catalog from "./components/pages/Catalog/Catalog";
import Cart from "./components/pages/Cart/Cart";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
    

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalogItem/:id" element={<CatalogItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
