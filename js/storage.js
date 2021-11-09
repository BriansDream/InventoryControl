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

const renderHistoryData = () => {
    const historyData = showData();
 
    const tableBody = document.querySelector('.table-body');
    
    // Agar tidak terjadi data ganda
    // After data added clean up body table and update using data in storage 
        tableBody.innerHTML = "";
    for(let index=0; index < historyData.length; index++) {
        
        // Create row element
        const row = document.createElement('tr');
        row.innerHTML = `<td> ${index} </td>`;
        row.innerHTML += `<td> ${historyData[index].itemName} </td>`;
        row.innerHTML += `<td> ${historyData[index].itemStock} </td>`;
       

        tableBody.appendChild(row);
    }
}

const updateButton = () => {
    const btnUpdate = document.createElement('div');
    btnUpdate.setAttribute('class','btnUpdate');
    btnUpdate.innerHTML = "Update";
    btnUpdate.classList.add('btnUpdateDelete');
    return btnUpdate;


}



// Clear all data from storage
const btnClearAllData = () => {
    if(checkWebStorage()) {
        if(localStorage.getItem(cacheKey) == null) {
            alert('data belum ada');
        } else {
            localStorage.removeItem(cacheKey);
            renderHistoryData();
            console.log(showData());
        }
    }
}



renderHistoryData();

