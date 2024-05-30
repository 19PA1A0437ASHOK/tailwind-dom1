
const loadCountries =()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response =>response.json())
    .then(data => displayCountries(data));
}
const displayCountries = countries =>{
    const divContainer = document.getElementById("country");
    divContainer.innerHTML = '';
    countries.forEach(country=>{
        const div =document.createElement('div');
        div.className='country shadow-sm height-full pb-2';
        div.innerHTML =  
        `<img src="${country.flags.png}" alt="${country.name.common}" class="w-64 h-36 object-cover rounded-md mb-4">
        <p><span class="px-3"><b>${country.name.common}</b></span></p>
        <p><span class="px-3 font-semibold">Capital: </span>${country.capital}</p>
        <p><span class="px-3 font-semibold">Population: </span>${country.population}</p>
        <p><span class="px-3 font-semibold">Region: </span>${country.region}</p>`;
        divContainer.appendChild(div);
    });
}
loadCountries();
document.getElementById('dropdownMenu').addEventListener('click', function(event) {
    const region = event.target.innerText;
    fetch(`https://restcountries.com/v3.1/region/${region.toLowerCase()}`)
    .then(res => res.json())
    .then(data => displayCountries(data))
  });
 let dm =0;
 let darkButton = document.getElementById('darkModeBtn');
 darkButton.addEventListener('click',(data)=>{
    let all = document.getElementsByTagName('*');
    if (dm === 0) {
    for(let i=0;i<all.length;i++){
        all[i].style.backgroundColor = "hsl(207, 26%, 17%)";
        all[i].style.color='white'; 
    }
    let headers = document.getElementsByTagName("header");
    headers[0].style.backgroundColor = "hsl(209, 23%, 22%)";
    let headersContainers = document.querySelector("header nav");
    headersContainers.style.backgroundColor = "hsl(209, 23%, 22%)";
    headersContainers.childNodes[1].style.backgroundColor ="hsl(209, 23%, 22%)";
    headersContainers.childNodes[3].style.backgroundColor ="hsl(209, 23%, 22%)";
    let searchSymbol = document.getElementsByClassName("new");
    searchSymbol[0].childNodes[1].childNodes[1].style.backgroundColor =
      "hsl(209, 23%, 22%)";
    searchSymbol[0].childNodes[1].childNodes[3].style.backgroundColor =
      "hsl(209, 23%, 22%)";
    searchSymbol[0].childNodes[1].style.backgroundColor = "hsl(209, 23%, 22%)";
    dm=1;
}else{
    for (let index = 0; index < all.length; index++) {
      all[index].style.backgroundColor = " hsl(0, 0%, 98%)";
      all[index].style.color = "hsl(200, 15%, 8%)";
    }
    let headers = document.getElementsByTagName("header");
    headers[0].style.backgroundColor = "hsl(0, 0%, 98%)";

    let headersContainers = document.querySelector("header nav");
    headersContainers.style.backgroundColor = "hsl(0, 0%, 98%)";
    headersContainers.childNodes[1].style.backgroundColor = "hsl(0, 0%, 98%)";
    headersContainers.childNodes[3].style.backgroundColor = "hsl(0, 0%, 98%)";
    dm=0;
}
    });