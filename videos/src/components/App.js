import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({videos: response.data.items});
    };

    onVideoSelect = video => {
        console.log('from the app!', video);
    }

    render(){
        return ( 
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoList 
            onVideoSelect={this.onVideoSelect} 
            videos= {this.state.videos} 
            />
        </div>
        );
    }
}
export default App;