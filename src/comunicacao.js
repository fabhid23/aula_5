function comunicacaoDosAnimais(nomeDoAnimal) {
    if (nomeDoAnimal == 'cachorro') {
        return 'au au'
    } else if (nomeDoAnimal == 'gato') {
        return 'miau miau'
    } else {
        return 'invalido'
    }
}

module.exports = {
    comunicacaoDosAnimais
};
