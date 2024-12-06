import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedElement from "./components/AnimatedElement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/cartContext";
import { ProductProvider } from "./context/productsContext";

const AppContent: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedElement element={<Shop />} />} />
        <Route
          path="/product/:productId"
          element={<AnimatedElement element={<ProductDetails />} />}
        />
        <Route
          path="/about"
          element={<AnimatedElement element={<About />} />}
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
