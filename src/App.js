import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
