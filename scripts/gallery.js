var galleryExpanded = false;

function toggleGallery() {
    var galleryPhotos = document.querySelector('.gallery_school_photos');
    var galleryButton = document.querySelector('.main_button');

    if (galleryExpanded) {
        galleryButton.textContent = 'Zobrazit více';
        while (galleryPhotos.children.length > 6) {
            galleryPhotos.removeChild(galleryPhotos.lastChild);
        }
        galleryExpanded = false;
    } else {
        galleryButton.textContent = 'Zobrazit méně';
        addPhotosToGallery(21);
        galleryExpanded = true;
    }
}

function addPhotosToGallery(numPhotos) {
    var gallery = document.querySelector('.gallery_school_photos');
    for (var i = 1; i <= numPhotos; i++) {
        var img = document.createElement('img');
        img.src = `../assets/g${i}.png`;
        img.alt = `Photo ${i}`;
        img.classList.add('gallery_school_photo');
        gallery.appendChild(img);
    }
}

window.addEventListener('load', function() {
    addPhotosToGallery(6);
});