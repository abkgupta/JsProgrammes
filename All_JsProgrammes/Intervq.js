
// function myfunc(obj,value) {
//   const fltitm = obj.filter((x) => x.name == value)
//      if(!fltitm)
//      return 0
//      else
//     return  fltitm[0].code
// }
const jsa = [
    {name: "abhishek", code: 10},
    {name: "sejal", code: 20},
    {name: "raj chedi", code: 30},
]


// const count = myfunc(jsa,"abhishek")

// console.log(count)

// 2nd method

// function myfunc(obj,value) {
//     var count = 0
//     const fltit = obj.forEach(element => {
//         if(element.name == value)
//         {
//             count = element.code
//         }
//     });
//     return count
// }


// const co = myfunc(jsa,"sejal")

// console.log(co)

const arr = ['flower','flow','fly']
let max  = 0;
for(let i=0;i<arr.length-1;i++)
{
     max = func(arr[i],arr[i+1])
}
console.log(max)


function func(str1,str2)
{
    let i =0,j =0
    let c=0
    console.log(str1.length +' ' + str2.length)
    while(i<str1.length && j<str2.length)
    {
     
        if(str1[i] == str2[j])
         c++
         else 
         {
            // c=0 
            break;
         }
         i++;
         j++;
    }
    return c;
}




