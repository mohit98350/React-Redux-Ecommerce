const initState={
    products:[
        {
            id:1,name:'Men collar Shirt',image:'img 1.jpg',Price:20,discount:'2',
            discountPrice:20 - 2/100 * 20, quantity:10,
             des:" Assured Quality Product "
              
     
             

        },
        {
            id:2,name:'Full Sleeve Solid Men Bomber Jacket ',image:'img 2.jpg',Price:30,discount:'5',
            discountPrice:30 - 5/100 * 30, quantity:5, des:"Assured Quality Product"
        },
        {
            id:3,name:'Solid Round Neck Casual Women  Sweater ',image:'img 3.jpg',Price:40,discount:'5',
            discountPrice:40 - 5/100 * 40, quantity:8, des:"Assured Quality Product"
        },
        {
            id:4,name:'Self Design Men Track Pants ',image:'img 4.jpg',Price:45,discount:'3',
            discountPrice:45 - 3/100 * 45, quantity:4, des:"Assured Quality Product"
        },
        {
            id:5,name:'Casual Sneakers Shoes For Men (White) ',image:'img 5.jpg',Price:55,discount:'3',
            discountPrice:55 - 3/100 * 55, quantity:6, des:"Assured Quality Product"
        },
        {
            id:6,name:'Women Skirt ',image:'img 6.jpg',Price:60,discount:'2',
            discountPrice:60 - 2/100 * 60, quantity:9, des:"Assured Quality Product"
        },
        {
            id:7,name:'Women Jeans ',image:'img 7.jpg',Price:30,discount:'2',
            discountPrice:30 - 2/100 * 30, quantity:11, des:"Assured Quality Product"
        },
        {
            id:8,name:'Self Design Men Track Pants ',image:'img 8.jpg',Price:25,discount:'2',
            discountPrice:25 - 2/100 * 25, quantity:3, des:"Assured Quality Product"
        },
        {
            id:9,name:'Cotton Solid Coat ',image:'img 9.jpg',Price:40,discount:'3',
            discountPrice:40 - 3/100 * 40, quantity:10, des:"Assured Quality Product"
        },
        {
            id:10,name:'Women Regular Fit  Shirt',image:'img 10.jpg',Price:35,discount:'3',
            discountPrice:35 - 3/100 * 35, quantity:13, des:"Assured Quality Product"
        }
    ],
    product:{}
}
const ProductsReducer = (state = initState, action)=>{
switch(action.type){
    case "PRODUCT":
        return{...state,product:state.products.find(product => product.id === parseInt( action.id))}
    default:
        return state;
}
}
export default ProductsReducer;