product ={}
allProducts = []
let show;
document.getElementById("price").disabled = true
document.getElementById("discount").disabled = true
document.getElementById("result").disabled = true
const productName = () => {
   let username = prompt("Enter name of product")
    if(username !=="" && username !== null){
        document.getElementById("price").disabled = false
        document.getElementById("name").disabled = true
    }
    product.name = username;
}
const productPrice = () => {
   let price = prompt("Enter price of product")
    if(price !=="" && price !== null){
        document.getElementById("discount").disabled = false
        document.getElementById("price").disabled = true
    }
    product.price = price
}
const productDiscount = () => {
   let discount = prompt("Enter discount rate")
    if(discount !=="" && discount !== null){
        document.getElementById("discount").disabled = true
        document.getElementById("result").disabled = false
    }
    product.discount = discount
}

const nextProduct = () => {
    product = {}
    name = null;
    price = null;
    discount = null;
    document.getElementById("name").disabled = false
}

const tableData = (productDetails, index) => {
    show +="<tr>"
    show +="<td>"+(index+1)+"</td>"
    show +="<td>"+(productDetails.name)+"</td>"
    show +="<td>"+(productDetails.price)+"</td>"
    show +="<td>"+(productDetails.discount)+"</td>"
    show +="<td>"+((productDetails.discount/100) * productDetails.price)+"</td>"
    show +="<td>"+(productDetails.price - (productDetails.discount/100 * productDetails.price))+"</td>"
    show +="</tr>"
}

const display = () => {
    allProducts.push(product)
    nextProduct()
    show = "";
    allProducts.forEach(tableData)
   document.getElementById("displayTable").innerHTML = show
   document.getElementById("result").disabled = true

}