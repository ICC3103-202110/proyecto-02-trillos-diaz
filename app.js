const {inputForm, listForm} = require('./view')
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
        if(input["source"]=="Y"){
            const updatedModel = updateLeft(input["val"],input["firstVal"],input["secondVal"], model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }else{
            const updatedModel = updateRight(input["val"],input["firstVal"],input["secondVal"], model)
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