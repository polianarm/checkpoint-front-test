const cardRef = document.querySelector('#cards_list');
const CreateButtonRef = document.querySelector('#create')
const CleanFormRef = document.querySelector('#clean')
const MyformRef = document.querySelector('#myform')

// função principal que cria os cards
function createAvatar() {

    //pegar elementos do html e ou inputados pelo usuário
    const nameRef = document.querySelector('#name');
    const witcherRef = document.querySelector('#avatar');
    const patronRef = document.querySelector('#patron');
    const houseRef = document.querySelector('#house');
    const spellRef = document.querySelector('#spell');
    const detailsRef = document.querySelector('#details');
    const titleCardsListRef = document.querySelector('#title_cards_list');

    const errorNameRef = document.querySelector('#error_name');
    const errorAvatarRef = document.querySelector('#error_avatar');
    const errorSpellRef = document.querySelector('#error_spell');
    const errorHouseRef = document.querySelector('#error_house');
    const errorPatronRef = document.querySelector('#error_patron');
    const errorDetailsRef = document.querySelector('#error_details');

    // Limpar as mensagens de erro anteriores
    errorNameRef.innerHTML = '';
    errorAvatarRef.innerHTML = '';
    errorSpellRef.innerHTML = '';
    errorHouseRef.innerHTML = '';
    errorPatronRef.innerHTML = '';
    errorDetailsRef.innerHTML = '';

    //Contar caracteres inputados pelo usuário para posterior validação
    countNameRef = nameRef.value.length;
    countdetailsRef = detailsRef.value.length;

    // Verificar se o nome é válido
    if (nameRef.value.trim() === '') {
        nameRef.style.borderColor = "red";
        errorNameRef.innerHTML += '<p>Favor informe o nome do seu avatar</p>';
    } else if (countNameRef < 4) {
        errorNameRef.innerHTML += '<p>O nome do seu avatar precisa ter no mínimo 4 caracteres</p>';
    } else {
        nameRef.style.borderColor = 'initial';
    }

    // Verificar se a imagem do avatar é válida
    if (witcherRef.value.trim() === '') {
        witcherRef.style.borderColor = 'red';
        errorAvatarRef.innerHTML += '<p>Favor informe a imagem do seu avatar</p>';
    } else {
        witcherRef.style.borderColor = 'initial';
    }

    // Verificar se o patrono é válido
    if (patronRef.value.trim() === '') {
        patronRef.style.borderColor = 'red';
        errorPatronRef.innerHTML += '<p>Favor informe o patrono do seu avatar</p>';
    } else {
        patronRef.style.borderColor = 'initial';
    }

    // Verificar se a casa é válida
    if (houseRef.value.trim() === '') {
        houseRef.style.borderColor = 'red';
        errorHouseRef.innerHTML += '<p>Favor informe a casa do seu avatar</p>';
    } else {
        houseRef.style.borderColor = 'initial';
    }

    // Verificar se o feitiço é válido
    if (spellRef.value.trim() === '') {
        spellRef.style.borderColor = 'red';
        errorSpellRef.innerHTML += '<p>Favor informe o feitiço preferido do seu avatar</p>';
    } else {
        spellRef.style.borderColor = 'initial';
    }

    // Verificar se os detalhes são válidos
    if (detailsRef.value.trim() === '') {
        detailsRef.style.borderColor = 'red';
        errorDetailsRef.innerHTML += '<p>Favor informe os detalhes do seu avatar</p>';
    } else if (countdetailsRef < 30) {
        errorDetailsRef.innerHTML += '<p>Os detalhes do seu avatar precisa ter no mínimo 30 caracteres</p>';
    } else {
        detailsRef.style.borderColor = 'initial';
    }

    // Se houver mensagens de erro, interrompa a criação do avatar
    if (error_name.innerHTML !== '' || error_avatar.innerHTML !== '' || error_spell.innerHTML !== '' || error_house.innerHTML !== '' || error_patron.innerHTML !== '' || error_details.innerHTML !== '') {
        return;
    }

    //Pegar dados das variáveis e jogar no objeto avatar
    const avatar = [{
        name: nameRef.value,
        witcher: witcherRef.value,
        patron: patronRef.value,
        house: houseRef.value,
        spell: spellRef.value,
        details: detailsRef.value,
    }];

    // Alterar titulo do card list quando criar o primeiro avatar
    titleCardsListRef.innerHTML = 'Trouxas cadatrados no ministério da magia';

    // Criar o avatar no card list
    cardRef.innerHTML += `
        <div class="card glow">
            <article>
                <img src="${avatar[0].witcher}">
                <h4>${avatar[0].name}</h4>
                <p>Patrono: ${avatar[0].patron}</p>
                <p>Casa: ${avatar[0].house}</p>
                <p>Feitiço preferido: ${avatar[0].spell}</p>
                <p>${avatar[0].details}</p>
            </article>
        </div>
    `;

    // Limpar as campos preechidos
    resetForm();
}

//dispara a função com clique no botão finalizar
CreateButtonRef.addEventListener('click', createAvatar);
CleanFormRef.addEventListener('click', resetForm);

function resetForm() {
    MyformRef.reset()
}