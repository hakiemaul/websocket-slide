var config = {
  apiKey: "AIzaSyA1_GmSaCxf1gxPRC-11NmW5niDIaaO3KE",
  authDomain: "fir-lecture-77a47.firebaseapp.com",
  databaseURL: "https://fir-lecture-77a47.firebaseio.com",
  storageBucket: "fir-lecture-77a47.appspot.com"
};
firebase.initializeApp(config);

var database = firebase.database();

function writeURLHash(hash) {
  database.ref('urls/').set({
    hash: hash
  });
  console.log('success');
}

var listenURL = database.ref('urls/');
listenURL.on('value', function(url) {
  var data = url.val();
  window.location.hash = data.hash;
});

$(window).on('hashchange', function(){
  writeURLHash(window.location.hash)
});