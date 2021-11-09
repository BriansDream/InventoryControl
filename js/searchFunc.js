

const searchFunc = (data) => {
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit',(event) => {
        const searchText = document.querySelector('.search-text').value;

        
       
        event.preventDefault();
    })
}

export {searchFunc};