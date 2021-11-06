

const searchForm = () => {
    const formSearch = document.getElementById('searchForm');
    formSearch.addEventListener('submit',(event) => {

        const searchInput = document.querySelector('.search-input').value;
     

    
        event.preventDefault();
    });
}

// when add item on click
const btnAddForm = () => {
    const btnShowAddForm = document.querySelector('.btnAdd');
    btnShowAddForm.addEventListener('click',() => {
        const formContainer = document.querySelector('.addFormContainer');
        formContainer.removeAttribute('hidden');
        formContainer.classList.add('popupAnimation');
    })

}

// after add item
const formAddItem = () => {

    const addForm = document.querySelector('.addForm');
    addForm.addEventListener('submit', () => {

        const formContainer = document.querySelector('.addFormContainer');

        // simpan ke localstorage lalu tampilkan

        // hilangkan formcontainer
        
        formContainer.setAttribute('hidden','hidden');



    })
}


const runApp = function() {

    searchForm();
    btnAddForm();
    formAddItem();

}

runApp();