function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const body = JSON.stringify(userData);

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: headers,
    body: body
  })
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      const idElement = document.createElement('p');
      idElement.textContent = `New ID: ${id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement('p');
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
}