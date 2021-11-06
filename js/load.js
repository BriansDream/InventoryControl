


const inventoryControl =  {
    username: "Andesta",
    password: "12345"
}

// Apply Event capturing 
// Mentrigger event handler dari parent ke child
// Ketika browser diload maka tampilkan element yang sudah dibuat
// window.addEventListener('load',())  

const loadFormLogin = () => {

    const backgroundContainer = document.createElement('div');
    backgroundContainer.setAttribute('class','backgroundContainer');
   
  
    // Create container form login
    const container = document.createElement('section');
    container.setAttribute('id','container-form');
    container.style.cssText = `
        max-width: 100%;
        width: 900px;
        margin: 0 auto;
        margin-top: 15%;
        padding: 50px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0px rgba(0,0,0,0.2); 
    `;

    // Create form login 
    const formLogin = document.createElement('form');
    const inputUsername = document.createElement('input');
    const inputPassword = document.createElement('input');
    const formButton = document.createElement('input');

    // Form
    formLogin.setAttribute('class','formLogin');
    
    // Input username
    inputUsername.setAttribute('class',"username");
    inputUsername.setAttribute('type','text');
    inputUsername.setAttribute('placeholder',"Input your username");
    inputUsername.setAttribute('maxlength','15');
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
    inputPassword.setAttribute('maxlength','15');
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
    backgroundContainer.appendChild(container);
    document.body.appendChild(backgroundContainer);

    
  
 
}



const validationLogin = () => {
    const formLogin = document.querySelector('.formLogin');

    formLogin.addEventListener('submit',(event) => {
        const username = document.querySelector('.username').value;
        const password = document.querySelector('.password').value;

        try {
                if(username == '' || username == null, password == '' || password == null) {
                    throw new SyntaxError('Brother Form login cannot be empty!');
                } 

                if(username.toLocaleLowerCase() == inventoryControl.username.toLocaleLowerCase() && password.toLocaleLowerCase() == inventoryControl.password.toLocaleLowerCase()) {
                    alert("Login Succesfully");

                    const backgroundContainer = document.querySelector('.backgroundContainer');
                    backgroundContainer.remove();
                    const mainContent = document.getElementById('content');
                    mainContent.removeAttribute('hidden');

                } else {
                    throw new ReferenceError('Check again your username or password');
                }

        } catch (error) {
                if(error instanceof SyntaxError) {
                    alert(error.message);
                } else if(error instanceof ReferenceError) {
                    alert(error.message);
                } else {
                    console.log(error);
                }
        }

        
    })
}

document.onload = loadFormLogin();
validationLogin();

  // Create custom event berasal dari class Event
    // Memungkinkan untuk menjalankan sebuah event handler setelah sebuah event handler lain selesai dipanggil
    // const ValidationUsernamePassword = new Event('ValidationUsernamePassword');
    // const loginForm = document.querySelector('.btnForm');
    // loginForm.addEventListener('ValidationUsernamePassword', customEventHandler());
    // loginForm.addEventListener('click',(event) => {
    //     // Membangkitkan custom event
    //     loginForm.dispatchEvent(ValidationUsernamePassword);

    // })