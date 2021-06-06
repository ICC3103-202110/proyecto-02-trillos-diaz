const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {LeftVal} = model
    const {LeftUn} = model
    const {RightVal} = model
    const {RightUn} = model
    return [
        {"Left Value": LeftVal,"Left Unit": LeftUn  ,"Right Value": RightVal,"Right Unit": RightUn},
        
    ]
}

function inputForm(model){
    const {LeftVal} = model
    const {RightVal} = model
    const {LeftUn} = model
    const {RightUn} = model
    const {FirstVal} = model
    const {SecondVal} = model
    const {source} = model
    const {val} = model
    const mes1 = 'Left temperature is source? (Y/N)'
    const mes2 = 'Temperature value to convert:'
    const mes3 = 'From?'
    const mes4 = 'To?'
    const Units = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt([
        {
            name: 'source',
            type: 'input',
            message: mes1,
            default: source,
            validate: function(value){
            if (value == "Y"|| value == "N"){return true}
            else{return "Please insert a source"}
            }
        },{
            name: 'val',
            type: 'input',
            message: mes2,
            default: val,

        },{
            name: 'firstVal',
            type: 'list',
            message: mes3,
            default: FirstVal,
            choices: Units
        },{
            name: 'secondVal',
            type: 'list',
            message: mes4,
            default: SecondVal,
            choices: Units
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
    inputForm
}