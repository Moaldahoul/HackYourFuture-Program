import React from 'react';
import RepoItem from './RepoItem';

export default class UserProfile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loading: false,
        }
        this.fetchRepose = this.fetchRepose.bind(this);
    }
    

    componentDidMount() {
        this.fetchRepose();
    }

    fetchRepose(){
        const name = this.props.match.params.username;
        this.setState({ loading: true})
        setTimeout(() => {
            fetch(`https://api.github.com/users/${name}/repos`)
                .then((response)=> response.json())
                .then(data => this.setState({ repos: data, loading: false}));
                }, 0);
    }
    
    render(){
        console.log(this.props);
        const {repos, loading} = this.state;
        const name = this.props.match.params.username; // we need to get this from the router:
        return( 
            <div>
                <p>Welcome <b> { name } </b> to your repositories Profile! </p>
                <ul>
                    {
                      repos.length > 0 && repos.map(repo => {
                        return <RepoItem username={name} key={repo.id} repo={repo} />
                    })
                    }
                </ul>
                {loading && <div className="loader"/>}
            </div>
            );
    }
}