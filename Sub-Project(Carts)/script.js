// Our aim is to show real products
const products = [
    { name: "Classic White chair", healine: "", price: "1000" , image:"https://images.unsplash.com/photo-1506326426992-32b61983f2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
    { name: "Study chair", healine: "", price: "20000" , image:"https://images.unsplash.com/photo-1486946255434-2466348c2166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},
    { name: "Massage chai", healine: "", price: "27999" , image:"https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];
 const popular = [];
function addproducts(){
    
 let clutter = "";
 products.forEach(function(product){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow hidden">
                    <img class = "w-full h-full object-cover" src = "${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">EJ 100 Ox Chair.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">Hangup data.</h3>
                            <h4 class="font-semibold mt-2">$3,456</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
        })
        document.querySelector(".products").innerHTML = clutter;
}
addproducts();
// Show real popular producs
// As we click on the product add button it wll get added into the cart.










