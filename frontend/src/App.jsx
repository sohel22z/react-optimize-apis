import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSerach] = useState('')

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          'api/products?search=' + search, { signal: controller.signal }
        )
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('request canceled', error.message)
          return;
        };
        setError(true);
        setLoading(false);
      }
    })();
    // cleanup
    return () => {
      controller.abort();
    }
  }, [search])

  return (
    <>
      {error && <h6>Error</h6>}
      {loading && <h6>Loading...</h6>}
      <input
        type="text"
        value={search}
        onChange={(e) => setSerach(e.target.value)}
        name="products"
      />
      <h1>totoal products: {products.length}</h1>
    </>
  )

}

export default App;