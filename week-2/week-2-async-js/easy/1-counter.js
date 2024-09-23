let count = 0;
let intervalId;

const counter = () => {
    count++;
    console.log(count);

    if(count >= 10) clearInterval(intervalId);
}

console.log("Counter increases count after every 1 second.")
intervalId = setInterval(counter, 1000);