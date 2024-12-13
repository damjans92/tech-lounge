import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedElement from "./components/AnimatedElement";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/cartContext";
import { ProductProvider } from "./context/productsContext";
import Category from "./pages/Category";
import Home from "./pages/Home";

const AppContent: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedElement element={<Home />} />} />
        <Route path="/shop" element={<AnimatedElement element={<Shop />} />} />
        <Route
          path="/about"
          element={<AnimatedElement element={<About />} />}
        />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route
          path="/:category"
          element={<AnimatedElement element={<Category />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
const App: React.FC = () => (
  <Router>
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <AppContent />
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  </Router>
);
export default App;
