const camposDoFormulario = document.querySelectorAll('[required]');
const submitButton = document.querySelectorAll('.input-submit');
// console.log(submitButton);

function validaCnpj(){
    if (camposDoFormulario[0].value.lenght<18){
        console.log("CNPJ INVÁLIDO.")
    }else{
        console.log("CNPJ válido.")
    }


}









































// submitButton.addEventListener("submit", (e) => {
//     e.preventDefault();

// })

// const typesOfError = [
//     "valueMissing",
//     "typeMismatch",
//     "patternMismatch",
//     "tooShort",
//     "customError",
//     "tooLong",

// // ]

// const mensagensDeErro = {

//     cnpj: {
//         tooLong:"CNPJ inválido",
//         },
        
//     razao: { 
//         tooLong: "Tamanho máximo de 30 caracteres",
//     },

//     cpf: {
//         tooLong: " CPF inválido"
//     },

//     nome: {
//         tooLong: "Tamanho máximo de 20 caracteres"
//     },

//     nickname: {
//         tooLong: "Tamnho máximo de 10 caracteres"
//     }

// }