// Our aim is to show real products
const products = [
    { name: "Classic White chair", headline: "Old people will love this", price: "1000/-" , image:"https://images.unsplash.com/photo-1506326426992-32b61983f2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
    { name: "Study chair", headline: "Opens your brain's receptives", price: "20000/-" , image:"https://images.unsplash.com/photo-1486946255434-2466348c2166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},
    { name: "Massage chair", headline: "Relaxes every part", price: "27999/-" , image:"https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];

function addpopular(){
    let clutter = "";
    popular.forEach(function(populars){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${populars.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${populars.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${populars.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${populars.price}</h4>
                    </div>
                </div>`
    })
    document.querySelector(".populars").innerHTML = clutter;
}

// Show real popular products

 const popular = [
    { name: "Comfort chair", headline: "Old people will love this", price: "1000/-" , image:"https://plus.unsplash.com/premium_photo-1668245539958-3e6e6259c00b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Study chair", headline: "Opens your brain's receptives", price: "20000/-" , image:"https://images.unsplash.com/photo-1486946255434-2466348c2166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},
    { name: "Massage chair", headline: "Relaxes every part", price: "27999/-" , image:"https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
 ];
function addproducts(){
    
 var clutter = "";
 products.forEach(function(product, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class = "w-full h-full object-cover" src = "${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                               <i data-index="${index}" class=" add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
        })
        document.querySelector(".products").innerHTML = clutter;
}

// As we click on the product add button it wll get added into the cart.
// Now the most imp functionality of by clicking we can add in carts.
function addtoCart(){
    document.querySelector('.products').addEventListener('click', function (details){
        if (details.target) {
            cart.push(products[details.target.dataset.index])
            console.log(cart);
        }
    })
}
// here we have two options to put listeners 1) we can either put event listener to every single product which will
// take a lot of memory.
// 2) by method of event bubbling = which is where put the event listener to  its product class of these products
// which saves space and more efficient way. but because of this if we click on the anything inside the products div.
// +++++++++++++++++++++++++++++++++++++ IMP +++++++++++++++++++++++++++++++++++++++++++++
// So to solve this we add an "add" as a class in the button's div and use a property called details 
// and fetch this "target" named method to know where we are clicking on the button, but then doing this will not
// tell us which specific product is getting added into the cart ,So we need to print product's index with help of 
// forEach( function( product, index)){}  and adding data-index= "${index}" in the button's div then we will get the 
// serial number of thee product which is added.
addtoCart();
addproducts();
addpopular();







