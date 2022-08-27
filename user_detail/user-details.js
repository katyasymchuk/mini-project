// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.





let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get(`id`);
console.log(id);


let users = document.createElement('div');
document.body.appendChild(users);
users.classList.add('Users');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
    let title = document.createElement("div");
    title.innerText= `Information of ${user.name}`;
    title.classList.add('Title');
        users.appendChild(title);
        let infodiv = document.createElement("div");
        infodiv.classList.add('Infodiv')
        users.appendChild(infodiv);

        let idDiv = document.createElement("div");
            idDiv.innerText = `id - ${user.id}`;
        infodiv.appendChild(idDiv);

        let nameDiv = document.createElement("div");
        nameDiv.innerText = `Name - ${user.name}`;
        infodiv.appendChild(nameDiv);

        let usernameDiv = document.createElement("div");
        usernameDiv.innerText = `Username - ${user.username}`;
        infodiv.appendChild(usernameDiv);

        let emailDiv = document.createElement("div");
        emailDiv.innerText = `Email - ${user.email}`;
        infodiv.appendChild(emailDiv);

        let addressDiv = document.createElement("div");
        addressDiv.innerText = `Address: 
        street - ${user.address.street}
        suite - ${user.address.suite}
        city - ${user.address.city}
        zipcode - ${user.address.zipcode}
        Geo: Lat - ${user.address.geo.lat},  Lng - ${user.address.geo.lng}`;
        infodiv.appendChild(addressDiv);

        let postuser = document.createElement("button");
        postuser.innerText = `Post of current user`;
        infodiv.appendChild(postuser);
        let postdiv = document.createElement('div');
        postdiv.classList.add('Postdiv')
        users.appendChild(postdiv);


        postuser.onclick = (e) => {
            e.preventDefault();
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts){
                        let postiddiv = document.createElement('div');
                        postiddiv.innerText = `Id post - ${post.id}
                        Title - "${post.title}`;
                        postdiv.appendChild(postiddiv);
        let postBtn = document.createElement("button");
        postBtn.innerText = `Show comments`;

        postBtn.onclick = function (){

           let click =JSON.parse(localStorage.getItem('post')) || [];
            click.push(post);
            localStorage.setItem('post', JSON.stringify(click));
            location.href = `../post_detail/post-details.html?id=${id}&postId=${post.id}`;
}
        postdiv.appendChild(postBtn);


                    }

        })}
        document.body.appendChild(users);
        console.log(user);
    })

