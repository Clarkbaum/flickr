console.log("this worked")
$.get({
  url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3ec63ca541cfee22909340679072dec9&tags=puppy&format=json&nojsoncallback=1&auth_token=72157689681998012-fb6c37bf4a5a52ec&api_sig=116044bf7f0df75e7d45fbf125d0dbb0",
})
.done(function(res) {
  console.log(res)
})