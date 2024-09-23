let count = 0;
let timeoutId;

const counter = () => {
    count++;
    console.log(count);
    
    timeoutId = setTimeout(counter, 1000);
}

counter();

setTimeout(() => {
    clearTimeout(timeoutId);
}, 20000);