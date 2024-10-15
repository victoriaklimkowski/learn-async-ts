const fetchPromise1 = fetch(
    // Call to a remote server/process
    // We know this is a long process. We can do other things while waiting.
    // REST services always return JSON data.
    // So this has to be an async function. 
    // We know this is a promise API because when we hover over it, it shows the Promise
    // or can also console log it and see the Promise object.
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
console.log(fetchPromise1);
  
// Signal to the main thread that we are done with the fetch call.
// Then we have the response call and can process it.
// 
fetchPromise1.then((response: Response) => {
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
});
  
console.log("Started request…");
for (let i = 0; i < 10; i++) {
  console.log('do other things ...');
}
  