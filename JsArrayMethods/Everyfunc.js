const ages = [23,32,45,6,18]

console.log(ages.every(checkage))

function checkage(age)
{
    return age > 18
}
