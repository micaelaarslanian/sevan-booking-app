import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Testimonials from './Testimonials';
import WhatsOn from './WhatsOn';
import HeroSection from './HeroSection';

function App() {
  return (
    <div id="outer-container">
      <Header />
      <main id="page-wrap">
        <HeroSection />
        <WhatsOn />
        <About />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;
