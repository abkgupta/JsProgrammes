function checkStringsAnagram(a, b) {
   let len1 = a.length;
   let len2 = b.length;
   if(len1 !== len2){
      console.log('Invalid Input');
      return
   }
    //   let str1 = a.sort();
  let str1 = a.split('').sort().join('');
   let str2 = b.split('').sort().join('');
   console.log(str1)
   if(str1 = str2){
     console.log("true");
   } else { 
      console.log("false");
   }
}
checkStringsAnagram("indian","ndiani")
// console.log("dsfdv")