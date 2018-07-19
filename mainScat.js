var guessCount = 0;
var _data;

window.onload = function() {
    _data = data;
    initImage();
};

var initImage = function() {
    var imageIndex = Math.floor(Math.random() * _data.allTheScat.length);        

    document.getElementById('image').innerHTML = '<img src="' + _data.allTheScat[imageIndex].url + '"/>';
    document.getElementById('caption').innerHTML = _data.allTheScat[imageIndex].caption;

    _data.allTheScat.splice(imageIndex, 1);    
}

var submitGuess = function() {
    document.getElementById('question').classList.add('hidden');
    
    if (++guessCount < 5) {
        document.getElementById('failure').classList.remove('hidden');
    } else {
        document.getElementById('success').classList.remove('hidden');
    }
}

var tryAgain = function() {
    document.getElementById('question').classList.remove('hidden');
    document.getElementById('failure').classList.add('hidden');
    
    initImage();
}

var getPrize = function() {
    document.getElementById('success').classList.add('hidden');
    document.getElementById('prize').classList.remove('hidden');    
}
