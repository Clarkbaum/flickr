$.get({
  url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f5ab29a2e940fc1280543f6206e186db&tags=puppy&format=json&nojsoncallback=1",
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
.catch(function() {
  console.log("error hitting endpoint")
})