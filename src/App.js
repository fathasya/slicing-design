import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import Info from './components/organisms/Info';
import Features from './components/organisms/Features';
import Plan from './components/organisms/Plan';
import Network from './components/organisms/Network';
import Testimonials from './components/organisms/Testimonials';
import Subscribe from './components/organisms/Subscribe';
import Footer from './components/organisms/Footer';
import './index.css';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Features />
      <Plan />
      <Network />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
    );
}

export default App;
