const linearSearch = (arr,target) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i]===target){
        return i;
    }
  }
  return -1;
}
console.log(linearSearch([1,34,4,5,2,6,8,9],17))
