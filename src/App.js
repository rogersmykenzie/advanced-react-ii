import React, {Suspense} from 'react';
import './App.css';
// import BigComponent from './components/BigComponent';
import Cohort from './components/Cohort';

const BigComponent = React.lazy(() => import('./components/BigComponent'));

function App() {
  return (
    <div className="App">
      <Cohort />
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <BigComponent />
      </Suspense>
      <h1>Hello!</h1> */}
    </div>
  );
}

export default App;
