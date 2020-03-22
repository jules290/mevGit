const counter = document.getElementById('counter')

const updateCounter = async () => { 
    const data = await fetch("https://api.countapi.xyz/hit/jules-e/visits");
    const count = await data.json();
    console.log(count.value - 5000)
};

updateCounter();