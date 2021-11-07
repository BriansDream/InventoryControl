
function btnAddFunc() {
    const btnAdd = document.querySelector('.btnAdd');
    const btnCloseAdd = document.querySelector('.closeFormAdd');
    btnAdd.addEventListener('click',(event) => {
      const addFormContainer = document.getElementById('addform-container');
      addFormContainer.removeAttribute('hidden');

    //   Custom Event
    // Memungkinkan untuk menjalankan sebuah event handler setelah sebuah event handler lain selesai dipanggil 
    const customEvent = new Event('customEvent');
    // Add EventListener custom event dan event handler when event listener terjadi
    btnCloseAdd.addEventListener('customEvent', customEventHandler);
    btnCloseAdd.addEventListener('click', (event) => {
        // Membangkitkan custom event
        btnCloseAdd.dispatchEvent(customEvent);
    });
    });




}

const customEventHandler = (ev) => {
    const addFormContainer = document.querySelector('#addform-container');
    addFormContainer.setAttribute('hidden','hidden');
}

btnAddFunc();
export {btnAddFunc}