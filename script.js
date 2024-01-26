let shop = document.getElementById("shop")
let shopData = [{
    id:"Official Work",
    name: "Formal Shirt",
    cost: 2500,
    desc: "Classic and formal shirt for mens. Full-sleeves, spare buttons included.",
    img:"images/Shirts/Formal-shirt.png"
}, 
{
    id:"Funky Wears",
    name: "Casual Shirt",
    cost: 1000,
    desc: "Casual shirts for young boys. Black shirt with white t-shirt & stylish locket.",
    img:"images/Shirts/Casual-shirt.png"
}, 
{
    id:"Moderate Wear",
    name: "Checked Shirt",
    cost: 900,
    desc: "Check shirt is available in stock for Men's in your favourable colors.",
    img:"images/Shirts/check-shirts.png" 
}, 
{
    id:"Occasional Wears",
    name: "Denim Shirts",
    cost: 1500,
    desc: "Stylish Denim shirt is in stock with black t-shirt for layering.",
    img:"images/Shirts/denim-shirt.png"

}]

let generateShops = () => {
    return (shop.innerHTML = shopData.map((e) => {
        // let {id,name,cost,desc,img} = e
        return `
        <div id = prod-id-${e.id}class="item">
                <img width = 220 style="padding-right: 20px; height: 179px;" src=${e.img} alt="">
                <div class="desc">
                    <h3> ${e.name} </h3>
                    <p>${e.desc}</p>
                    <div class="cost-quantity">
                        <h2>₹ ${e.cost}</h2>
                        <div class="buttons">
                            <div onclick = "decrease()" class="less"> - </div>
                            <div id=${e.id}class = "quantity">0</div>
                            <div onclick = "increase()" class="add">+</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join(""))
}
generateShops()

let increase = () => {
    console.log('increament');
    
}

let decrease = () => {
    console.log('decreament');
    
}

let update = () => {
    
}

// Ye apne ap kia tha!
// const decreaseItem = document.getElementById('decreaseProducts')
// const increaseItem = document.getElementById('increaseProducts')
// let quantElement = document.getElementById(e.id)
// let quant = 1

// Function to update the quantity display

// function updateQuant() {
//     quantElement.textContent = quant;
// }

// decreaseItem.addEventListener('click', function() {
//     if(quant > 1){
//         quant--
//         updateQuant()
//     }
// })