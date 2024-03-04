const pageTitle = document.querySelector('h1')
pageTitle.addEventListener('click', function() {
    window.location.href = './index.html'    
})

document.getElementById('add-item').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que o formulário seja submetido normalmente

    // Obter os valores dos campos
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var publisher = document.getElementById('publisher').value;
    var itemType = document.getElementById('itemType').value;
    var itemFormat = document.querySelector('input[name="itemFormat"]:checked').value;
    var pagesNumber = document.getElementById('pagesNumber').value;
    var edition = document.getElementById('edition').value;
    var editionYear = document.getElementById('editionYear').value;
    var binding = document.getElementById('binding').value;
    var language = document.getElementById('language').value;
    var country = document.getElementById('country').value;
    var copies = document.getElementById('copies').value;
    var collection = document.getElementById('collection').value;

    // Criar o objeto com os dados a serem enviados
    var data = {
        title: title,
        author: author,
        publisher: publisher,
        itemType: itemType,
        itemFormat: itemFormat,
        pagesNumber: pagesNumber,
        edition: edition,
        editionYear: editionYear,
        binding: binding,
        language: language,
        country: country,
        copies: copies,
        collection: collection
    };

    // Enviar a solicitação para a API REST
    fetch('http://localhost:8081/collection-ws/v1/createItem/', {
        method: 'POST', // ou 'PUT', 'DELETE', etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
        // Aqui você pode adicionar lógica para lidar com a resposta da API, se necessário
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
});