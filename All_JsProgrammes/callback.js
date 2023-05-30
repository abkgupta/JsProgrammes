function mydisplay(sum)
{
    console.log(sum)
}

function mycalcul(num1,num2,callback)
{
    let sum = num1+num2
     callback(sum)
}

mycalcul(2,3,mydisplay)