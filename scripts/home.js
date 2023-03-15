const plataformButtonRef = document.querySelector('#button_plataform');

//função principarl que estarta função de redireciomento de página, após animações
function login() {
    const homeRef = document.querySelector('#title_home');
    
    //altera HTML e CSS
    homeRef.innerHTML = 'Aparatar';
    homeRef.style.fontSize = '8rem';
    homeRef.style.color = 'orange';

    //Adiciona clase ao CSS
    homeRef.classList.add("rotate_efect");

    //Estarta função de redirecionemto de página
    startLogin();
}

//função que redireina a página 3,5s após o click
function startLogin() {

    setTimeout(function() {
        window.location.href = "../views/index.html";
    }, 3500);
}

//dispara a função com clique no botão plataform
plataformButtonRef.addEventListener('click', login);