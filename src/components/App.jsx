// project ID: re-castly-159618(Google)
//our API key: AIzaSyCM_voLXsndKMFbz21ogEZoZC83RPvTHPo
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  componentDidMount () {
    this.getYouTubeVideos('dogs');
  }

  onUserInput(param) {
    this.getYouTubeVideos(param);
  }

  getYouTubeVideos(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videoList) => {
      this.setState({
        videoList: videoList,
        currentVideo: videoList[0]
      });
    });
  }

//added event as a parameter
  playClicked(event) {
    // Iterate through this.state.videoList 
    for (var i = 0; i < this.state.videoList.length; i++) {
      if (event === this.state.videoList[i].id.videoId) {
        this.setState({currentVideo: this.state.videoList[i]});
        break;
      }
     // check if event ==== videoId
     //   if yes set this.state.currentVideo = the video
    }
  }

  render() {
    return (
    <div>
      <Nav onUserInput={this.onUserInput.bind(this)} />
      <div className="col-md-7">
        <VideoPlayer video = {this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videoList={this.state.videoList} titleClicked={this.playClicked.bind(this)} />
      </div>
    </div>
      );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

