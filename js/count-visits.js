const counter = document.getElementById('counter')

const updateCounter = async () => {
    if(window.location.href == "https://mon-entrainement-velo.netlify.com/prgmy.html") {
    const data = await fetch("https://api.countapi.xyz/hit/jules-e/visits");
    const count = await data.json();
    console.log("visits: " + count.value - 5220)
}
};

updateCounter();