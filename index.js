import inquirer from "inquirer";
const question = [
    {
        type: "number",
        name: "Number1",
        message: "Enter Number one"
    },
    {
        type: "number",
        name: "Number2",
        message: "Enter number two"
    },
    {
        type: 'list',
        name: "Choice",
        message: "Select Operator to perform calculation",
        choices: ['/', '*', '+', '-']
    }
];
try {
    const result = await inquirer.prompt(question);
    if (result.Choice === '/') {
        if (result.Number2 === 0) {
            console.log("Divison by Null is not allowed please select number greator than zero");
        }
        else {
            console.log("The result of division of two numbers is ", result.Number1 / result.Number2);
        }
    }
    else if (result.Choice === '*') {
        console.log("The result of  multiplication of two numbers is ", result.Number1 * result.Number2);
    }
    else if (result.Choice === '+') {
        console.log("The result of addition of two numbers is", result.Number1 + result.Number2);
    }
    else if (result.Choice === '-') {
        console.log("Result of subtraction of two numbers is ", result.Number1 - result.Number2);
    }
    // else
    // {
    //     console.log("User selects nothing")
    // }
}
catch (error) {
    console.log("Error", error);
}
//console.log(result)
