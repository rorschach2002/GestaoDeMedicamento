let sideBar = document.querySelector('#sideBar');
let sideBar2 = document.querySelector('#sideBar2');
let mostrarMais = document.querySelector('#mostrarMais')
let mostrarMenos = document.querySelector('#mostrarMenos')

function mostrarMa(){
    mostrarMais.setAttribute('style', 'display: none;')
    mostrarMenos.setAttribute('style', 'display: flex; left: 250px;')
    sideBar.setAttribute('style', 'display: none;')
    sideBar2.setAttribute('style', 'display: flex;')

}

function mostrarMe(){
    mostrarMais.setAttribute('style', 'display: flex;')
    mostrarMenos.setAttribute('style', 'display: none;')
    sideBar.setAttribute('style', 'display: flex;')
    sideBar2.setAttribute('style', 'display: none;')
}