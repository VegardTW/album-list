// select all child divs with the class "album"
const albums = document.querySelectorAll('.album');

// loop through each album div and set its top style based on its index
for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    album.style.top = (i * 200) + 'px';
}