class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  playClicked() {
    console.log('clicked');
  }

  render() {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video = {this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videoList = {this.state.videoList}/>
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