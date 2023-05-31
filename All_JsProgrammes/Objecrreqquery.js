function objectToQueryString(obj) {
    const params = new URLSearchParams();
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.append(key, obj[key]);
      }
    }
  
    return params.toString();
  }
  
  const obj = {
    name: 'John Doe',
    age: 25,
    city: 'New York'
  };
  
  const queryString = objectToQueryString(obj);
  console.log(queryString); //