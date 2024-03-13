import './App.css';
import Router from './routes/Router';

import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <Router />
    </SmoothScroll>
  );
}

export default App;
