// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули



const arrayuser = document.createElement('div');
document.body.appendChild(arrayuser);
arrayuser.classList.add('Users');


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => users.forEach(user => {
            const listuser = document.createElement('div');
            listuser.classList.add('Userinfo');
            arrayuser.appendChild(listuser);

            let id = document.createElement('p');
            id.innerText = user.id;
            listuser.appendChild(id);

            let name = document.createElement('h4');
            name.innerText = user.name;
            listuser.appendChild(name);

    let detailsBtn = document.createElement("button");
            detailsBtn.innerText = 'Переглянути інфо';

            detailsBtn.onclick = function () {

                let click = JSON.parse(localStorage.getItem('user')) || [];
                click.push(user);
                localStorage.setItem('user', JSON.stringify(click));
                location.href = `user_detail/user-details.html?id=${user.id}`;
            }
            listuser.appendChild(detailsBtn);
        }));




