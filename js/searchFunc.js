import { EmptyData } from "./classCollection.js";

const searchFunc = (dataInventory) => {
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit',(event) => {
        const searchText = document.querySelector('.search-text').value.toLowerCase();
        const displaySearch = document.querySelector('.display-search');


            try {
                // Cek jika input kosong
                if(searchText == '' || searchText == null) {
                    throw new EmptyData("Search input cannot be empty!");
                }
            
               dataInventory.map((data) => {
                    if(searchText == data.itemName) {
                        displaySearch.innerHTML = `Item name: ${data.itemName} <br> Stock: ${data.itemStock}`;
                       
                        event.preventDefault();
            
                    } 
                })
                event.preventDefault();
            
           

            } catch (error) {
                    if(error instanceof EmptyData) {
                        alert(error.message);
                    } 
            }
    })
}


export {searchFunc}