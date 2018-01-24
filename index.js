console.log("this worked")
$.get({
  url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=866c98193c22567ad21e0f5bffc68f9a&tags=puppy&format=json&nojsoncallback=1&auth_token=72157691854939594-7a933e6483932837&api_sig=e4cfce3d2eed60a6e464a6020dbe59b1",
})
.done(function(res) {
  console.log(res.photos.photo)
  res.photos.photo.forEach(function(pic) {
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    $("#list").append('<img src="https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg" > </img>')
  })
})