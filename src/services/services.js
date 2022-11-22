const baseUrl = 'https://lab-api-bq.onrender.com/'; //tá certo?
const apiCreateUser = `${baseUrl}/users/`;

const creatingUsers = {
    method: 'POST',
    body: {
        "name": "Sample Name - optional",
        "email": "sample@mail.com",
        "password": "sample",
        "role": "sample role",
        "restaurant": "sample restaurant"
      }
}

export const fetchCreateUser = async () => {
    fetch(apiCreateUser, creatingUsers)
    .then((response) => {response.json})
}


//dúvidas:
// 1. postman: precisa usar o postman ou dá pra fazer sem?
