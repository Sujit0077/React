import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    // <div>
    // <Fragment>


    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
    // </Fragment>  
    // </div>
  );
}

export default App;