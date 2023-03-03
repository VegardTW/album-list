// select all child divs with the class "album"
const albums = document.querySelectorAll('.album');

// create an array of randomized indices for the albums array
const indices = [];
for (let i = 0; i < albums.length; i++) {
    indices.push(i);
}
shuffleArray(indices);

// loop through each album div and set its top style using the randomized indices
for (let i = 0; i < albums.length; i++) {
    const album = albums[indices[i]];
    album.style.top = ((i + 1) * 23) + 'vw';
}

// helper function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

