const {inputForm, listForm, inputFormAdd, inputFormUpRemove} = require('./view')
const {updateLeft,updateRight} = require('./update')
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
        //const input2 = await inputFormAdd(model)
        //const input3 = await inputFormUpRemove(model)
        if(input["option"]=="Add City"){
            const input2 = await inputFormAdd(model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }else if(input["option"]=="Update City"){
            const input3 = await inputFormUpRemove(model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }else if(input["option"]=="Delete City"){
            const input3 = await inputFormUpRemove(model)
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