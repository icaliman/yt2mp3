var API_KEY = "AIzaSyBcIDIbD4z6KQE1FQY-fdedQjP5a_uYhdY";

// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.client.setApiKey(API_KEY);

  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
};