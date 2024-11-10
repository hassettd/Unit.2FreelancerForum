


const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

//   function average(price) { 
//     if (price.length === 0) return 0; 
//     const sum = price.reduce((acc, currentValue) => acc + currentValue, 0); 
//     return sum / price; 
// } 


function average(price) { 
    if (price.length === 0) return 0; 
    const sum = price.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
    return sum / price.length; 
}

const numbers = [25, 51, 43, 81, 43, 76, 47, 72]; 
const avg = average(numbers); 
console.log(avg); 


const body = document.querySelector("body");


    const init = () => { 

    const section = document.createElement("section");
    section.style.display = "flex";
    section.style.flexwrap = "wrap";
    section.style.justifyContent = "space-around";
    for (let i = 0; i < freelancers.length; i++) {
        const element = freelancers[i];
        const div = document.createElement("div")
        div.style.display ="grid"
        const h3 = document.createElement("h3");
        h3.innerText = element.name;
        const h4 = document.createElement("h4");
        h4.innerText = element.price;
        const h5 =document.createElement("h5");
        h5.innerText = element.occupation;
        div.append(h3);
        div.append(h4);
        div.append(h5);
        section.append(div);
        
        
    }
    body.append(section);

    const div2 = document.createElement("div2");
        div2.innerText = (average(element.price));
        div2.style.display ="grid";
        const h3 = document.createElement("h3");
        h3.innerText = element.h5;
        const h5 =document.createElement("h5");
        section.append(div2);
};

init();

