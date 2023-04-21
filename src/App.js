import { CustomSlider } from './components/CustomSlider/CustomSlider';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomSlider minValue={0} maxValue={5} step={1} />
    </div>
  );
}

export default App;
