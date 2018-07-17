window.onload = function() {
    initImage();
};

var initImage = function() {
    var imageIndex = Math.floor(Math.random() * data.allTheScat.length);        
    var image = new Image();
    image.src = data.allTheScat[imageIndex].url;
    document.getElementById('image').append(image);    

    var caption = document.createTextNode(data.allTheScat[imageIndex].caption);
    document.getElementById('caption').append(caption);
}