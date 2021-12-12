const textInput = document.querySelector('#text-input');

textInput.onkeyup = function(){
    document.querySelector('#meme-text').innerHTML = textInput.value;
}

var loadFile = function(event) {
	var imagem = document.getElementById('image-input');
	imagem.src = URL.createObjectURL(event.target.files[0]);
};