//３秒後にHello!と表示し、その２秒後にByeと表示する

setTimeout(() => {
    console.log("Hello!")
    setTimeout(() => {
        console.log("bye")
    }, 2000);
}, 3000);
