import { searchFunc } from "./searchFunc.js";
import { btnShowAddnCloseAddFunc,addDataFunct,btnClearAllFunct } from "./crudFunc.js";
import { showData } from "./storage.js";
import { checkDataStillSave, loadFormLogin, validationLogin } from "./load.js";
// Expression function
const runAllFunction = function() {
    
    document.onpageshow = loadFormLogin();
    validationLogin();
    checkDataStillSave();
    searchFunc(showData());
    btnShowAddnCloseAddFunc();
    addDataFunct();






    btnClearAllFunct();
}

runAllFunction();