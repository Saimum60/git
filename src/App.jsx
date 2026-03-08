import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import products from "./data/product";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;