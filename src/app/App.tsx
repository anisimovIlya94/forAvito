import { Suspense } from 'react';
import '../App.css';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Link } from 'react-router-dom';
import { BugButton } from './providers/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Suspense fallback="">
        {/* <BugButton/> */}
        {/* <Link to={"/"}>Main</Link>
        <Link to={"/game/1"}>Game</Link> */}
        <AppRouter/>
      </Suspense>
    </div>
  );
}

export default App;
