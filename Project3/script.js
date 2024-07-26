const arr = [
    {name: "Petals of rose", img: "https://images.unsplash.com/photo-1579532630641-a4ff6d68622c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", img: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "The crowd of city", img: "https://plus.unsplash.com/premium_photo-1664302656889-e0ff44331843?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Fruits of planets", img: "https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Orange peeled", img: "https://images.unsplash.com/photo-1482012792084-a0c3725f289f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Web design", img: "https://images.unsplash.com/photo-1542837336-d14bdf342f9b?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
// We have basically made a function that takes the arr in a parameter called clutter and keeps adding the images
// and use a queryselector to select container and store this images as innerhtml.   
function showTheCards (){
     var clutter = "";
     arr.forEach(function(obj) {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.img}" alt="image">
        <div class="caption">Lorem ipsum </div>
         </div>`;
     }),

     document.querySelector('.container').innerHTML = clutter;
}
// Now we are making a situation where you click on the serach bar and everything below it should be dark in color
function handlesearchFunctionality(){
    const Input = document.querySelector('#searchinput');
    // this will make you only focus on the search bar and everything becomes dark.
      Input.addEventListener("focus", function(){
              document.querySelector(".overlay").style.display = "block";
      }),
    // this will remove the focus on the search bar and bring light.  
    Input.addEventListener("blur", function(){
            document.querySelector(".overlay").style.display = "none";
    })

    // 
    Input.addEventListener("input", function(){
           const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(Input.value));
           var clutter = "";
           filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
             </div>`
           });

           document.querySelector(".searchdata").style.display = 'block';
           document.querySelector(".searchdata").innerHTML = clutter;
    })
    
}
handlesearchFunctionality();
showTheCards();