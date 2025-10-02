import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Testimonials from './Testimonials';
import WhatsOn from './WhatsOn';
import HeroSection from './HeroSection';
import BookingSection from './BookingSection';
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <main id="page-wrap">
        <HeroSection />
        <WhatsOn />
        <About />
        <Testimonials />

        {/* BookingSection is the parent route; ConfirmedBooking renders inside its <Outlet /> */}
        <Routes>
          <Route path="/" element={<BookingSection />}>
            <Route path="confirmed" element={<ConfirmedBooking />} />
          </Route>
        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App;
