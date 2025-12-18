import Hero from './assets/components/Hero';
import FeaturedWork  from './assets/components/FeaturedWork';
import About from './assets/components/About';
import Footer from './assets/components/Footer';
function App() {
  return (
    <main className="bg-[#0E0E0E] text-[#F2F2F2] w-full">
      <Hero />
      
      <FeaturedWork />

      <About />

      <Footer />
    </main>
  );
}
export default App;
