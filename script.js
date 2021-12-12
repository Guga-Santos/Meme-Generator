const textInput = document.querySelector('#text-input');

textInput.onkeyup = () => {
  document.querySelector('#meme-text').innerHTML = textInput.value;
};

const carregaImagem = (event) => {
  const imagem = document.getElementById('image-input');
  imagem.src = URL.createObjectURL(event.target.files[0]);
};
