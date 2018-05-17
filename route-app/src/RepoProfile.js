import React from 'react';

export default class RepoItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            repo: null,
            loading: false,
        }
        this.fetchRepose = this.fetchRepose.bind(this);
    }
    

    componentDidMount() {
        this.fetchRepose();
    }

    fetchRepose(){
        const {username, repo} = this.props.match.params;
        this.setState({ loading: true})
        fetch(`https://api.github.com/repos/${username}/${repo}`)
            .then((response)=> response.json())
            .then(data => this.setState({ repo: data, loading: false}));
    
    }
    
    render(){
        console.log(this.props);
        const {repo, loading} = this.state;
        return( 
            <div>
                <ul>
                    {
                     JSON.stringify(repo) 
                    }
                </ul>
                {loading && <div className="loader"/>}
            </div>
            );
    }
}