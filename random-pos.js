function random() {
    let val = ((Math.random() * 30) ** 0.55);
    if (Math.random() > 0.5) {
        val = -val
    }
    return val
}

document.addEventListener('DOMContentLoaded', () => {
//const container = document.querySelector('.album-container');
    const albums = document.querySelectorAll('.album');

    albums.forEach(album => {
        const x = random() * 3;
        const y = random() * 10;
        const z = random();
        album.style.left = `${parseInt(album.style.left || 36) + x}vw`;
        album.style.top = `${parseInt(album.style.top || 30) + y}px`;
        album.style.zIndex = `${parseInt(album.style.zIndex || 0) + z}`;
    });
});
