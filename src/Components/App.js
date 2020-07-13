import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../APIs/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const KEY = 'AIzaSyCd0OoXTONFgjG09uzZxS1zoO3LugaVrVs';

class App extends React.Component {
    state= { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('Super Cars')
    }

    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: term
            }
        })
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;