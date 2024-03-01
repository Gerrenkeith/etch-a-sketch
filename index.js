const body = document.querySelector('body');
const container = document.getElementById("container")

    
for (let i = 0; i <= 255; i++) {
      const div = document.createElement('div')
        div.id = i;
        container.appendChild(div);
    }

const getAllIds = [];

for (let i = 0; i <= 255; i++){
 getAllIds.push(i);
}
console.log(getAllIds)

const divRows = Array.from({ length: Math.ceil(getAllIds.length / 16)}, (_, index) => 
        getAllIds.slice(index * 16, index * 16 +16)
);

console.log(divRows);

for(let i = 0; i < divRows.length; i++){
    const div = divRows[i]
    console.log(div)

    for(let j = 0; j < div.length; j++){
        const item = document.getElementById(div[j])
        item.className = `row ${i + 1}`

    }
}


