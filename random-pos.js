function random() {
    let val = ((Math.random() * 30) ** 0.55);
    if (Math.random() > 0.5) {
        val = -val
    }
    return val
}

const albums = document.querySelectorAll('.album');
const mainElement = document.getElementById("main");

enquire.register("screen and (min-width:1000px)", {
    match: function () {

        // create an array of randomized indices for the albums array
        const indices = [];
        for (let i = 0; i < albums.length; i++) {
            indices.push(i);
        }
        shuffleArray(indices);

        // loop through each album div and set its top style using the randomized indices
        for (let i = 0; i < albums.length; i++) {
            const album = albums[indices[i]];
            album.style.top = ((i + 1) * 200) + 'px';
        }

        // helper function to shuffle an array randomly
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        albums.forEach(album => {
            const x = random() * 3;
            const y = random() * 10;
            const z = random();
            album.style.left = `${parseInt(album.style.left || 40) + x}vw`;
            album.style.top = `${parseInt(album.style.top || 30) + y}px`;
            album.style.zIndex = `${parseInt(album.style.zIndex || 0) + z}`;
        })

        let largestTopValue = -Infinity;
        albums.forEach((album) => {
            const topValue = parseInt(album.style.top);
            if (topValue > largestTopValue) {
                largestTopValue = topValue;
            }
        });
        const newHeightValue = largestTopValue + 600;
        mainElement.style.height = newHeightValue + "px";

    }
})

enquire.register("screen and (max-width:1000px)", {
    match: function () {

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

        albums.forEach(album => {
            const x = random() * 3;
            const y = random() * 1.1;
            const z = random();
            album.style.left = `${parseInt(album.style.left || 30) + x}vw`;
            album.style.top = `${parseInt(album.style.top || 30) + y}vw`;
            album.style.zIndex = `${parseInt(album.style.zIndex || 0) + z}`;
        })
    }
});