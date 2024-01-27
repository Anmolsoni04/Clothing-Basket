let shop = document.getElementById("shop")
let shopData = [{
    id:"Official_Wear",
    name: "Formal Shirt",
    cost: 2500,
    desc: "Classic and formal shirt for mens. Full-sleeves, spare buttons included.",
    img:"images/Shirts/Formal-shirt.png"
}, 
{
    id:"Funky_Wear",
    name: "Casual Shirt",
    cost: 1000,
    desc: "Casual shirts for young boys. Black shirt with white t-shirt & stylish locket.",
    img:"images/Shirts/Casual-shirt.png"
}, 
{
    id:"Moderate_Wear",
    name: "Checked Shirt",
    cost: 900,
    desc: "Check shirt is available in stock for Men's in your favourable colors.",
    img:"images/Shirts/check-shirts.png" 
}, 
{
    id:"Occasional_Wear",
    name: "Denim Shirts",
    cost: 1500,
    desc: "Stylish Denim shirt is in stock with black t-shirt for layering.",
    img:"images/Shirts/denim-shirt.png"

},

// T-shirts
{
    id:"Leisure_Wear",
    name: "Round-Neck T-Shirt",
    cost: 200,
    desc: "Find Comfort in Our Round-Neck Tees.",
    img:"images/Tshirts/round-neck.jpg"

},
{
    id:"College_Wear",
    name: "Collor T-Shirt",
    cost: 500,
    desc: "Upgrade Your Style with Collar T-Shirts.",
    img:"images/Tshirts/collor-tshirt.jpg"

},
{
    id:"Sporty_Wear",
    name: "Sports T-Shirt",
    cost: 1000,
    desc: " Dominate Your Workout in Our Sport T-Shirts.",
    img:"images/Tshirts/sport-tshirt.jpg" 

},
{
    id:"Royal_Wear",
    name: "V-Neck T-Shirt",
    cost: 800,
    desc: "Define Your Look with V-Neck Tees",
    img:"images/Tshirts/v-neck-t-shirts.png"

},

// Trousers
{
    id:"Stylish_Wear",
    name: "Baggy pant",
    cost: 3500,
    desc: "Embrace Comfort with Baggy Pants",
    img:"images/Trousers/BaggyPants.jpg"

},
{
    id:"Cool_Wear",
    name: "Cargos",
    cost: 2500,
    desc: "Explore in Comfort with Cargo Pants..",
    img:"images/Trousers/Cargos.jpg"
},
{
    id:"Normal_Wear",
    name: "Jeans",
    cost: 1000,
    desc: "Find Your Perfect Pair of Jeans.",
    img:"images/Trousers/Jeans.jpg"

},
{
    id:"Abroad_Wear",
    name: "Khakis",
    cost: 1500,
    desc: "Elevate Your Wardrobe with Khaki Pants.",
    img:"images/Trousers/Khakis.jpg"

},
// Shoes
{
    id:"King_FootWears",
    name: "Combat Shoes",
    cost: 2000,
    desc: "Unleash Power with Combat Shoes.",
    img:"images/Shoes/combat-shoes.png"

},
{
    id:"Loafy_Foots",
    name: "Loafers",
    cost: 2500,
    desc: "Discover Our Classic Loafer Shoes.",
    img:"images/Shoes/Loafers.jpg"

},
{
    id:"Okay_Wear",
    name: "Sneakers",
    cost: 900,
    desc: "Step Into Style with Our Latest Sneaker Collection.",
    img:"images/Shoes/Sneakers.jpg" 

},
{
    id:"Outdoor_Wear",
    name: "Sports Shoes",
    cost: 3000,
    desc: "Next-Level Performance Sport Shoes for Every Athlete.",
    img:"images/Shoes/sports-shoes.png"

},

]

// Main Logic
let generateShops = () => {
    
    return (shop.innerHTML = shopData.map((e) => {
        let {id,name,cost,desc,img} = e
        return `
        <div id = prod-id-${id} class="item">
                <img width = 220 style="padding-right: 20px; height: 179px;" src=${img} alt="">
                <div class="desc">
                    <h3> ${name} </h3>
                    <p>${desc}</p>
                    <div class="cost-quantity">
                        <h2>₹ ${cost}</h2>
                        <div class="buttons">
                            <div onclick = "decrease(${id})" class="less"> - </div>
                            <div id="${id}" class = "quantity">0</div>
                            <div onclick = "increase(${id})" class="add"> + </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join(""))
}

generateShops()


// Let's code the cart functionality
let increase = (id) => {
    // Code for the number increase by clicking "+" button
    let addItem = id
    console.log(addItem.id);
    let addValue = parseInt(id.innerHTML)
    console.log(addValue);
    id.innerHTML = addValue + 1

    // Code for the numbers triggered in a cart
    let choosed_item = document.getElementById("cartData")
    let val = parseInt(choosed_item.innerHTML)
    choosed_item.innerHTML = val + 1

    // Now we can update the total number of item in cart
    calculateTotalItems()
    
}

let decrease = (id) => {
    // Code for the number decrease by clicking "-" button
    let lessItem = id
    console.log(lessItem.id);
    let lessValue = parseInt(id.innerHTML)
    console.log(lessValue);
    id.innerHTML = lessValue - 1

    // Code for the numbers triggered in a cart
    let choosed_item = document.getElementById("cartData")
    let val = parseInt(choosed_item.innerHTML)
    if(val > 0){
        choosed_item.innerHTML = val - 1
        calculateTotalItems() 
    }
}

// Function decleration
let calculateTotalItems = () => {
    let cartTotatData = 0
    let no_of_quantities = document.querySelectorAll('.cartData')
    no_of_quantities.forEach(no_of_quantities => {
        cartTotatData += parseInt(no_of_quantities.innerHTML)
    })

    // We can update the total numbers of items in a cart

    let cart = document.getElementById("cartData")
    cart.innerHTML = cartTotatData

}
calculateTotalItems()
