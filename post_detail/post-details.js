// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location.href);

let id = url.searchParams.get(`id`);
let postId = +url.searchParams.get('postId');

console.log(id);
console.log(postId);

let maindiv = document.createElement("div");
maindiv.classList.add('Main');
document.body.appendChild(maindiv);

let title = document.createElement("div");
title.classList.add('Title');
title.innerText = 'Post details'
maindiv.appendChild(title);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(posts => {

        let infopost = document.createElement("div");
        infopost.classList.add('Infopost');
        maindiv.appendChild(infopost);


         let userId = document.createElement("div");
         userId.innerText = `Userid - ${posts.userId}`
         infopost.appendChild(userId);

        let postId = document.createElement("div");
        postId.innerText = `PostId - ${posts.id}`
         infopost.appendChild(postId);

        let titleDiv = document.createElement("div");
        titleDiv.innerText = `Title - ${posts.title}`
        infopost.appendChild(titleDiv);

        let bodyDiv = document.createElement("div");
        bodyDiv.innerText = `Post - ${posts.body}`
        infopost.appendChild(bodyDiv);
    })



fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())

    .then(comments => {



        let infodiv = document.createElement("div");
        infodiv.classList.add('Info');
        maindiv.appendChild(infodiv);

for (const comment of comments){
        let commentdiv = document.createElement("div");
    commentdiv.classList.add('Comment');
    infodiv.appendChild(commentdiv);

    let idcomment = document.createElement("div");
    idcomment.innerText = `Comment id - 
    ${comment.id}`
    commentdiv.appendChild(idcomment);

    let nameDiv = document.createElement("div");
    nameDiv.innerText = `Nickname - 
    ${comment.name}`
    commentdiv.appendChild(nameDiv);

    let emailDiv = document.createElement("div");
    emailDiv.innerText = `Сommenter's email - 
    ${comment.email}`
    commentdiv.appendChild(emailDiv);

    let bodyDiv = document.createElement("div");
    bodyDiv.innerText = `Comment - 
    ${comment.body}`
    commentdiv.appendChild(bodyDiv);


}





    })