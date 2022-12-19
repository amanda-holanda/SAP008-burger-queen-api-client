export const setTokenRole = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
}

export const getToken = () => localStorage.getItem('token');
export const getRole = () => localStorage.getItem('role');

const request = (endPoint, method, headers, body) => {
  return fetch(`https://lab-api-bq.onrender.com${endPoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((obj) => {
      if (obj.code) {
        throw (obj.message)
      } else {
        return obj
      }
    })
};

export const createUser = (name, email, password, role) => {
  return request("/users", "POST", null, {
    name,
    email,
    password,
    role,
    restaurant: "Hamburgreen",
  })
};

export const login = (email, password) => request("/auth", "POST", null, {
  email,
  password,
});

export const accessUser = () => request("/users", "GET", { Authorization: getToken() })


