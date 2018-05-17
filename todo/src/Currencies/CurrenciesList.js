import React from 'react';

const API_KEY = `bbcb162a9fa6411ba4322b554baa8f2e`;
const API_URL = `http://openexchangerates.org/api/latest.json`;

const currenciesLocalList = ['DKK', 'EUR', 'BTC', 'SEK', 'NOK', 'DZD', 'CAD'];

export default class CurrenciesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { // we use state because the data is changing
            rates: null,
            error: null,
        }
        this.fetchData = this.fetchData.bind(this);
        this.refreshData = this.refreshData.bind(this);
    }

    componentDidMount() {
        setTimeout(this.fetchData, 700);
    }
    
    fetchData(){
        // this.setState({ rates: null });
        fetch(`${API_URL}?app_id=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => {
            this.setState({rates: json.rates}); // Use/call setState to notify the component to "RE render"
        })
        .catch(() => this.setState({error: 'error loading the data'}));
    }

    refreshData(){
        this.setState({ error: null, rates: null})
        setTimeout(this.fetchData, 700);
    }  

    render() {
        const {rates, error} = this.state;
        return (
                <div className = 'currencyList'>
                        <h2 className = 'listHeadline'>
                            <b><em> List of Currencies: </em> </b>
                        </h2> 
                <button onClick={this.refreshData} >Refresh List</button>
                <div>
                    {
                     error && <h3 className = 'error-msg' > error: {error}</h3>
                    }
                    {
                     rates && <ul className = 'currencyList' > {
                        Object.keys(rates)
                        .filter(rate => currenciesLocalList.includes(rate))
                        .map((rate) => {
                            return <li key = {rate} > {rate} {rates[rate]} </li>
                                })
                            }
                     </ul> 
                    }
                    {
                       !rates && !error && <p > No data Available </p>
                    }
                </div>
                </div>
                );
    }
}