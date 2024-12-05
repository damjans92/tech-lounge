import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/cartContext";
import { ProductProvider } from "./context/productsContext";
import About from "./pages/About";
import Footer from "./components/Footer";
import AnimatedElement from "./components/AnimatedElement";
import { ProductDetails } from "./pages/ProductDetails";

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
