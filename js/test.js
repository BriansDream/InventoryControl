// const dateFunct  = () => {
//     const DateNow = new Date();
//     return DateNow.toUTCString();
// }

// console.log(dateFunct());

const dataBarang = [
    { id: 50,
    itemName: "Penghapus",
    Stock: "30"
    },
    { id: 40,
        itemName: "rautan",
        Stock: "20"
    },
    { id: 20,
        itemName: "Penghapus",
        Stock: "30"
    },
    { id: 10,
        itemName: "Penghapus",
        Stock: "30"
        }
]

for(let index=0; index < dataBarang.length; index++) {
    console.log(`NO. ${index} Nama Barang ${dataBarang[index].itemName}`);
    
}




// let index = 0;
// index++;

// for (let barang of dataBarang) {
//         console.log(barang[index]);
// }
