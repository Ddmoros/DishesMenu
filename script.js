const menuUL = document.getElementById('menuUL')


for(let index=0; index<dishes.length; index++){
    const dish = dishes[index]
    const dishItem = `

    <li>
        <h2>👨‍🍳 ${dish.title}</h2>

        <div class = "menuClass">
            <img class ="foto" src=${dish.imageURL}>
            <div class = "descript">✌️ ${dish.description}✌️</div>
            <p>💵 ${dish.price}</p>
        </div>
    </li>    

    `
menuUL.insertAdjacentHTML('beforeend', dishItem)

}