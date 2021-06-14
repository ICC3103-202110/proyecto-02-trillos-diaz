const {inputForm, listForm, inputFormAdd, inputFormUpRemove,} = require('./view')
const {addCity,updateCity,removeCity} = require('./update')
const {printTable} = require('console-table-printer')
var prompt = require('prompt-sync')();
// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const input = await inputForm(model)
        if(input["option"]=="Add City"){
            const input2 = await inputFormAdd(model)
            updatedModel = await addCity(input2["newCity"],model)
            //updatedModel =  get_api(input2["newCity"],model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }else if(input["option"]=="Update City"){
            const input3 = await inputFormUpRemove(model)
            updatedModel = await updateCity(input3["cityUpRem"],model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }else if(input["option"]=="Delete City"){
            
            const input3 = await inputFormUpRemove(model)
            updatedModel = removeCity(input3["cityUpRem"],model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        //const updatedModel = update(input["Price"],input["Tipp"], model)

    }
}

module.exports = {
    app
}