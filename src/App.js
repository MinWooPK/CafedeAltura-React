import { useEffect, useContext } from 'react'
import './App.css';
import ApiContextProvider, { ApiContext } from './context/ApiContext';

import MainRoutes from './components/Routes';
import getAllCoffees from './services/coffees'

import ShoppingCartContextProvider from './context/ShoppingCardContext';

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <ShoppingCartContextComponent>
          <MainRoutes />
        </ShoppingCartContextComponent>
      </ApiContextProvider>
    </div>
  );
}

function ShoppingCartContextComponent({ children }) {
  const { setCoffees } = useContext(ApiContext)

  useEffect(() => {
    async function fetchCoffees() {
      const fetchedCoffees = await getAllCoffees()
      setCoffees(fetchedCoffees.products)
    }
    fetchCoffees()
  }, [setCoffees])

  return (
    <ShoppingCartContextProvider>
      {children}
    </ShoppingCartContextProvider>
  )
}

export default App;