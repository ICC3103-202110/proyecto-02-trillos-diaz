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
    const tabList = []
    if(model.length>=2){
        for (var i = 1; i < model.length; i++){
            var singleList = {'name': model[i].cityName,
            'temp': model[i].cityTemp,
            "min": model[i].minTemp,
            "man": model[i].maxTemp}

            tabList.push(singleList)
        }
    }
    else{
        var singleList = {'name': " ",
        'temp': 0,
        "min": 0,
        "man": 0}

        tabList.push(singleList)
    }
   return tabList
}

function inputForm(model){
    const {choice} = model
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
    const {newCity} = model
    const mes2 = 'Location'
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
    for(var i = 1; i<Options2.length;i++){
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