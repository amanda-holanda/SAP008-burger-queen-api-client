export const setTokenPosition = (token, position) => {
    localStorage.setItem('token', token);
    localStorage.setItem('position', position);
  }

export const getToken = () => localStorage.getItem('token');
export const getPosition = () => localStorage.getItem('position');

export const createUser = (name, email, password, position) => {
    return fetch('https://lab-api-bq.onrender.com/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        position: position,
        restaurant: "Hamburgreen",
      }),
    })};

// // const baseUrl = 'https://lab-api-bq.onrender.com/'; //tá certo?
// // const apiCreateUser = `${baseUrl}/users/`;
// //criar uma função pra montar esse objeto. tem que receber os dados do input. 
// //tem que ser chamada nos componentes do react

// const createUser = () => {
//     const creatingUsers = {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',        
//         },
//         body: {
//             "name": "Sample Name - optional", //trocar pelos dados do input,
//             "email": "sample@mail.com",
//             "password": "sample",
//             "role": "sample role",
//             "restaurant": "sample restaurant"
//         }
//     }
// }

// export const fetchCreateUser = async () => {
//     fetch(apiCreateUser, createUser)
//         .then((response) => response.json())
//         //colocar outro then com data (print ju)
// }


//passo a passo
// [X] - spa: fazer as funções de hashchanges para fazer as rotas 
// [] - componentizar os inputs
// [] - colocar o valor dos inputs no body do objeto/funcao do createUser
// [] - colocar o then com o data na linha 26 (dps do then)
// [] - fazer os testes no postman
