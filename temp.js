let promise1 = new Promise(function (resolve,reject){
  setTimeout(()=> resolve('Operation success'),2000);
  //Resolve ==>
  //Reject ==> failure
});

promise1.then(function(operationStatus)
{
  console.log(operationStatus);{
    console.log(operationStatus);
  }
})