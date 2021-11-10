



const cacheKey = 'CACHE_KEY';
const checkWebStorage = () => {
    return typeof(Storage) != null;
}

const putData = (data) => {
    let dataBarang = null;
    if(checkWebStorage()) {

        if(localStorage.getItem(cacheKey) == null) {
            dataBarang = [];
        } else {
            dataBarang = JSON.parse(localStorage.getItem(cacheKey));
        }
 
        dataBarang.push(data);

        if(dataBarang.length > 10) {
            dataBarang.pop();
        }

        localStorage.setItem(cacheKey,JSON.stringify(dataBarang));

    } else {
        alert("Your browser not support web storage")
    }
}

const showData = () => {
    if(checkWebStorage()) {
    return JSON.parse(localStorage.getItem(cacheKey)) || [];
} else {
    return [];
}
}

const reloadPageFunct = () => { 
    return location.reload()
}

const renderHistoryData = () => {
    const historyData = showData();
 
    const tableBody = document.querySelector('.table-body');
    // Agar tidak terjadi data ganda
    // After data added clean up body table and update using data in storage 
        tableBody.innerHTML = "";
      
    for(let index=0; index < historyData.length; index++) {
        // Create new element
        const row = document.createElement('tr');
        const btnUpdate = document.createElement('button');
        const btnDelete = document.createElement('button');
        const td = document.createElement('td');

        row.innerHTML = `<td> ${index} </td>`;
        row.innerHTML += `<td> ${historyData[index].itemName} </td>`;
        row.innerHTML += `<td> ${historyData[index].itemStock} </td>`;


        btnDelete.setAttribute('class','btnDelete');
        btnDelete.innerHTML = 'Delete';
        btnDelete.classList.add('btnUpdateDelete');
        
        // Memasukkan objek create elemen ke dalam HTML
        td.appendChild(btnDelete);
        td.insertBefore(btnUpdate,btnDelete);
        row.appendChild(td);
        tableBody.appendChild(row);

        
        // When delete button clicked, run this funct
        btnDelete.addEventListener('click', () => {
        // if data's not empty
        if(historyData != '') {
            const getIdData = historyData[index].id; 
        // Check if id thaw we click == with id in storage 
           if(getIdData == historyData[index].id) {
        // Delete based on we've clicked 
            historyData.splice(index,1);
        // every transaction with local storage have to check web storage
                if(checkWebStorage()) {
                    localStorage.removeItem(cacheKey);
                    historyData.forEach(data => {
                        putData(data);
                    });  
                }
                
           }

        }
        reloadPageFunct();
      
        })
    }
   
}
renderHistoryData();
