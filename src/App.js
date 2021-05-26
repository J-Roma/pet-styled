import Cart from "./components/Cart";
import Items from "./components/Items";
import { Store } from './store/Store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={Store}>
      <div className="container">
        <h1 className="text-center p-5">PetShop</h1>
        <div className="row mt-3">
          <div className="col-md-6">
            <Items />
          </div>
          <div className="col-md-6">
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
