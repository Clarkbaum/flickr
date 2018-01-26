$.get({
  url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f399a174c74917573c75f080c96162ac&tags=puppy&format=json&nojsoncallback=1&auth_token=72157692669015065-41ea4fed6958bf83&api_sig=07dfdfe1c7c7095f269bae6087777bb2",
})
.done(function(res) {
  console.log(res.photos.photo)
  res.photos.photo.forEach(function(pic) {
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    $("#list")
      .append('<div> ' + pic.title + ' </div>')
      .append('<img src="https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg" > </img>')

  })
})