// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(users => console.log(users))

// Wablon

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => users.forEach(users => {
    document.querySelector('.container').innerHTML +=`
    <div class="child_container">
    <p>${users.id}</p>
    <h3>${users.name}</h3>
    <p>${users.username}</p>
    <p>${users.email}</p>
    </div>
    `
}))