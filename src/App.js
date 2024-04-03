import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasions from './components/Reasons/Reasions';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasions />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
