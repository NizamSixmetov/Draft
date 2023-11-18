const dataUrl = ('https://jsonplaceholder.typicode.com/users');
axios(dataUrl).then(({data})=>{
    data.forEach(element => {
        document.getElementById('container').innerHTML+=`
        <div class="container-1">
        <b class="container-text">${element.id}</b>
        <h1 class="container-text">${element.username}</h1>
        <h2 class="container-text">${element.name}</h2>
        <h4 class="container-text">${element.email}</h4>
        </div>
        `
    });
})
axios(dataUrl).then(({data}) =>{
    data.forEach(element =>{
        console.log(element);
    })
})