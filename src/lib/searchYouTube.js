var searchYouTube = (options, callback) => {

  // var url = 'https://www.googleapis.com/youtube/v3/search&key={' + window.YOUTUBE_API_KEY + '}';
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {key: options.key, q: options.query, maxResults: options.max, videoEmbeddable: true, part: 'snippet', type: 'video'},
    contentType: 'application/json',
    success: function (data) {
      console.log('Youtube Search Results Returned');
      console.log(data.items);
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Youtube Search Failed', data.responseText);
    }
  });
};

window.searchYouTube = searchYouTube;

// Options = {}
// options.query = "";
// options.max = 5
// api = apkikey
// parts: options.querey
// maxresults: options.max
