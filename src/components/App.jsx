class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }
//added event as a parameter
  playClicked(event, app) {
    console.log('clicked');
    console.log(event);
    // Iterate through this.state.videoList 
    for (var i = 0; i < app.state.videoList.length; i++) {
      if (event === app.state.videoList[i].id.videoId) {
        app.setState({currentVideo: app.state.videoList[i]});
        break;
      }
     // check if event ==== videoId
     //   if yes set this.state.currentVideo = the video
    }
    //newly added stuff:
    //failed trial. "this" is currently null
    // this.setState({currentVideo: this, videoList: window.exampleVideoData});
  }

  render() {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video = {this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videoList={this.state.videoList} titleClicked={this.playClicked} app={this}/>
      </div>
    </div>
      );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videoList={window.exampleVideoData}/>
//     </div>
//   </div>
// );

//videoList={window.exampleVideoData}