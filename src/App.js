import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasions from './components/Reasons/Reasions';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasions />
      <Plans />
    </div>
  );
}

export default App;
