


function btnShowAddnCloseAddFunc() {
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

// Used for ID
const DateforID = () => {
    const today = new Date();
    return today.getTime();
}

const addDataFunct = () => {
    const formAdd = document.getElementById('formAdd');
    formAdd.addEventListener('submit', (event) => {

        const addNameItem = document.querySelector('.addNameItem').value.toLowerCase();
        const addStockItem = document.querySelector('.addStockItem').value;

     
        try {
                if(addNameItem == '' || addNameItem == null, addStockItem == '' || addStockItem == null) {
                    throw new SyntaxError('Input form cannot be empty');
                }


        } catch (error) {
            if(error instanceof SyntaxError) {
                alert(error.message);
                event.preventDefault();
            }
        }


        const addData = { 
            id: DateforID().toString(),
            itemName: addNameItem.toString(),
            itemStock: addStockItem.toString()
        }
        putData(addData);
        
        alert('Data added succesfuly');
        renderHistoryData();
        console.log(showData());
   
    })
}

const btnClearAllFunct = () => {
    const btnClearAll = document.querySelector('.btnClearAll');
    btnClearAll.addEventListener('click',(event) => {
        btnClearAllData();

    })
}

btnShowAddnCloseAddFunc();
addDataFunct();
btnClearAllFunct();
export {btnShowAddnCloseAddFunc,btnClearAllFunct};