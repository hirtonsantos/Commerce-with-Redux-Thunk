import { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <ProductList/>
        <Toaster position="top-center" reverseOrder={false} />
      </header>
    </div>
  );
}

export default App;
