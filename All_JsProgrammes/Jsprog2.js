// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits)

// To sort in Descending order
const points = [40, 100, 1, 5, 25, 10]
points.sort(
    function(a,b)
    {
        return b-a;
    }
)
console.log(points)