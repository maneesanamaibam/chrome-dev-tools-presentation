### Demo Presentation of Chrome Dev Tools

### Console API

1. **Stack trace Example**
   _Console Table_

```js
const data = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];
console.table(data);
```

_Console Time_

```js
function testRun() {
  const arr = [...Array(1000).keys()];

  const findNumber = (target) => arr.find((num) => num === target);
  const result = findNumber(100);
  console.log(result);
}
testRun();
```

### Using Debugger

### Network

1. **Inspecting Network**
   [Demo Link](https://devtools.glitch.me/network/getstarted.html)
2. **Overriding Response Headers**

[Demo Link](https://cors-demo-devtools.glitch.me/)

- Add `Access-Control-Allow-Origin: *` to the response headers

3. **Mocking API using Network Override Content**

- We can override content of an API response on the network tab. This is useful specially when backend is not ready with the API but you have a mock data, at this moment front-end can test their UI and functionalities using the Network Override feature.
  Example: [Demo Link](https://coffee-cart.app/)

### Sources

### Performance Profile

1. Jankyness
   [Demo Link](https://googlechrome.github.io/devtools-samples/jank/)

### Memory Leaks

1. Dangling Event Listeners
   Demo link: [Squoosh](https://deploy-preview-1113--squoosh.netlify.app/)

**Code Example for Memory leaks due to forgotten timers or callbacks**

```js

for(let i=0; i< 1000_000; i++){

  let obj={
    fnCall:function(){
      setTimeOut(()=>{
        // DO SOMETHING
console.log('Doing nothing special')

},3000)
}

obj.fnCall()
obj=null

}
  }


```

### Coverage

### Core WebVitals
