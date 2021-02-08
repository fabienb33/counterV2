import './App.css';
import Counter from "./Counter"
import Header from "./Header"
import Footer from "./Footer";


function App() {
  return (
    <div className="app">
      <Header
      title="React Counter V2"
      />
      <Counter 
        addCounters="Add counters"
        moins=""
        plus=""
        reset="reset"
      />
      <Footer/>
    </div>
  );
}


export default App;
