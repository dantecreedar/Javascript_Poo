const btn = document.getElementById('btn__presionar');
const text = document.getElementById('site')

const precionar = btn.addEventListener('click', () => {
    text.innerHTML = 'has precionado el boton';
    console.log('he pasdo por aqui')
});
