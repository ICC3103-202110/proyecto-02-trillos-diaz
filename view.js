const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')

function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const printing_list = []
    for (var i = 0; i < model.length; i++){
        var Name = model[i].cityName
        var Temp = model[i].cityTemp
        var Min = model[i].minTemp
        var Max = model[i].maxTemp
        var m = {'name': Name, 'temp': Temp, "min": Min, "man": Max}

        printing_list.push(m)
    }
   return printing_list
}

function inputForm(model){
    //const option = 0
    const {choice} = model
    //const mes1 = 'Select action'
    const mes2 = 'Location'
    const Options = ['Add City', 'Update City', 'Delete City']
    return inquirer.prompt([
        {
            name: 'option',
            type: 'list',
            message: mes2,
            default: choice,
            choices: Options
        }

    ])
}
function inputFormAdd(model){
    //const option = 0
    const {newCity} = model
    const mes2 = 'Location'
    //const Options = ['Add City', 'Update City', 'Delete City']
    return inquirer.prompt([
        {
            name: 'newCity',
            type: 'input',
            message: mes2,
            default: newCity
        }

    ])
}
function inputFormUpRemove(model){
    const {cityUpRem} = model
    const mes2 = 'Location'
    const Options2 = model
    const opts = []
    for(var i = 0; i<Options2.length;i++){
        opts.push(Options2[i].cityName)
    }
    return inquirer.prompt([
        {
            name: 'cityUpRem',
            type: 'list',
            message: mes2,
            default: cityUpRem,
            choices: opts
        }

    ])
}


// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    inputFormAdd,
    inputFormUpRemove
}