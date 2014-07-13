var nextPageToken;
var prevPageToken;
var query;

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  makeRequest({
    q: q,
    type: 'video',
    maxResults: 50,
    order: 'viewCount', //rating
//    videoDefinition: 'high',
//    videoEmbeddable: true,
    part: 'snippet'
  });
}

function nextPage() {
  if (!nextPageToken) return;
  query.pageToken = nextPageToken;
  makeRequest(query);
}

function prevPage() {
  if (!prevPageToken) return;
  query.pageToken = prevPageToken;
  makeRequest(query);
}

function makeRequest(args) {
  var request = gapi.client.youtube.search.list(args);

  request.execute(function(response) {
    console.log(response);
    var str = JSON.stringify(response.result, null, 0);
    $('#search-container').html('<pre>' + str + '</pre>');

    nextPageToken = response.nextPageToken;
    prevPageToken = response.prevPageToken;
  });

  query = args;
}