import React, {
  Component
} from 'react';
import CurrenciesList from './Currencies/CurrenciesList';

class App extends Component {
  render() {
    return ( 
      <div className = "App">
      <CurrenciesList />
      </div>
    );
  }
}

export default App;
