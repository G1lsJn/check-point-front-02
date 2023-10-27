// No arquivo animals.js, armazene em uma constante animals uma array com alguns Animais 

const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo", "leão"]

// verifique se o animal "leão" **não** existe no array. 
// Se não existir, exiba no console a mensagem "Leão não existe no array animals. 
//   - Se existir, exiba no console a mensagem "Existe um leão no array animals.". 

// Se animals.includes("leão") for true significa que EXISTE o animal 'leão' na lista
if (animals.includes("leão") != true) {
    console.log("Leão não existe no array animals")
} else {
    console.log("Existe um leão no array animals.")
}