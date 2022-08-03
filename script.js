var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e) {

    e.preventDefault()//Bloqueia o refresh caso campo vazio

    let urlForm = "https://pokeapi.co/api/v2/pokemon/"; //URL da API metodo GET
    let nome = document.getElementById("name")
    urlForm = urlForm + this.name.value
    urlForm = urlForm.toLowerCase()
    let resposta = document.getElementById('content')
    let imagem = document.getElementById('ImgPokemon')
    let html = ''//Resposta em HTML

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Name:  ' + maiusculo(data.name) + '<br>'
            html = html + 'Type: ' + maiusculo(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'> "
            
            
        })
        .catch(function(err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado!'
            } else {
                html = err
            }
            resposta.innerHTML = html
        })

    

});

function maiusculo(valor){
    return valor[0].toUpperCase() + valor.substr(1)
}
