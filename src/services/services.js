const baseUrl = 'https://lab-api-bq.onrender.com/'; //tá certo?
const apiCreateUser = `${baseUrl}/users/`;

//criar uma função pra montar esse objeto. tem que receber os dados do input. 
//tem que ser chamada nos componentes do react

const createUser = () => {
    const creatingUsers = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',        
        },
        body: {
            "name": "Sample Name - optional", //trocar pelos dados do input,
            "email": "sample@mail.com",
            "password": "sample",
            "role": "sample role",
            "restaurant": "sample restaurant"
        }
    }
}

export const fetchCreateUser = async () => {
    fetch(apiCreateUser, createUser)
        .then((response) => response.json())
        //colocar outro then com data (print ju)
}

