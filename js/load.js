

// Pure function
const formLogin = () => {
    // getElement body and put background for that
    const body = document.body;
    body.classList.add('bodyClass');
    // Create container form login
    const container = document.createElement('section');
    container.setAttribute('id','container-form');
    container.style.cssText = `
        max-width: 100%;
        width: 900px;
        margin: 0 auto;
        margin-top: 200px;
        padding: 50px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0px rgba(0,0,0,0.2); 
    `;

    // Create form login 
    const formLogin = document.createElement('form');
    const inputUsername = document.createElement('input');
    const inputPassword = document.createElement('input');
    const formButton = document.createElement('button');
    
    // Input username
    inputUsername.setAttribute('class',"username");
    inputUsername.setAttribute('placeholder',"Input your username");
    inputUsername.style.cssText = `
        padding: 10px;
        font-size: 1.5em;
        width: 100%;
        border-radius: 5px;
        border: 0.2px solid;
        font-weight: lighter;
        margin-bottom: 20px;
    `;

    // Input password
    inputPassword.setAttribute('class','password');
    inputPassword.setAttribute('placeholder',"Please input your password");
    inputPassword.setAttribute('type','password');
    // Menambahkan style class yang dibuat di CSS
    inputPassword.classList.add('inputStyle');



    // Form Button
    formButton.setAttribute('type','submit');
    formButton.setAttribute('class','btnForm');
    formButton.setAttribute('value','Submit');
    formButton.innerText = "Login Yuk"
    formButton.classList.add('button');



    formLogin.appendChild(inputPassword);
    formLogin.insertBefore(inputUsername,inputPassword);
    formLogin.appendChild(formButton);
    container.appendChild(formLogin);

    // Create title container
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('class','title-container');
    titleContainer.innerHTML = "<h1>Welcome briansdream</h1>";
    titleContainer.style.cssText = `
        font-size: 1.7em;
        font-weight: bolder;
        text-align: center;
        margin-top: -10px;
        margin-bottom: 20px;
        `;
    container.insertBefore(titleContainer,formLogin);
    body.appendChild(container);
}


document.onload = formLogin();
