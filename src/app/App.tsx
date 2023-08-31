import { Suspense } from 'react';
import '../App.css';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Spin } from 'antd';

function App() {
  return (
    <div className="App">
      <Suspense fallback=" ">
        <AppRouter/>
      </Suspense>
    </div>
  );
}

export default App;
