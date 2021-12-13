const textInput = document.querySelector('#text-input');

textInput.onkeyup = () => {
  document.querySelector('#meme-text').innerHTML = textInput.value;
};
// Retirei a ideia do onkeyUp daqui https://stackoverflow.com/questions/14411235/while-typing-in-a-text-input-field-printing-the-content-typed-in-a-div

const carregaImagem = (event) => {
  const imagem = document.getElementById('meme-image');
  imagem.src = URL.createObjectURL(event.target.files[0]);
};

//  Retirei a ideia de fazer o upload da imagem daqui:
//  https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
//  Utilizei este outro link pra estudo.
//  https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example.3a_using_object_urls_to_display_images

const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const imageContainer = document.querySelector('#meme-image-container');

fireButton.addEventListener('click', () => {
  imageContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  imageContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  imageContainer.style.border = '6px groove green';
});

const memesPronto = document.querySelector('#preImage-container');
memesPronto.addEventListener('click', (e) => {
  const img = document.getElementById('meme-image');
  img.src = e.target.src;
});
