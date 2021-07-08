import './index.css'
import AllItems from './components/AllItems';
import BasketItem from './components/BasketItem';
import Store from './store';
import {Provider} from 'react-redux';


function App() {
  return (
    <Provider store={Store}>
    <div className="app">
      <header className="header">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0
         00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0
          01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
      </svg>
					<h1 className="title">Grocery Basket!</h1>
			</header>

			<div className="search">
          <div className="group">
					<input type="text" name="search" placeholder="search item..."  />
          </div>
      </div>

      <main>
				<AllItems />
				<BasketItem />
      </main>
				
    </div>
    </Provider>
        
    
  );
}

export default App;
