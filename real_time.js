var nameInput = document.getElementById('nameInput')
var ageInput = document.getElementById('ageInput')

var addButton = document.getElementById('addButton')


addButton.addEventListener('click', function(e) {
		e.preventDefault();		
        inserir(nameInput.value, ageInput.value)

})

function inserir(name, age){
	var data = {name: name, age: age}
    return firebase.database().ref().child('usuarios').push(data)


}