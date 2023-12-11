const products = [
    {
        id:'1',
        name:'Iphone 13 Pro Max',
        price: 1350000,
        category:'celular',
        pictureUrl:'https://www.lavanguardia.com/andro4all/hero/2022/01/iPhone-13-Pro-Max.jpg?width=768&aspect_ratio=16:9&format=nowebp',
        stock: 10,
        description: 'Celular Iphone 13 Pro Max, no necesitas mas...'
    },
    {   id:'2', name:'Samsung S22 Ultra', price: 900000, category:'celular', pictureUrl:'https://media.flixcar.com/webp/synd-asset/Samsung-105793410-ar-galaxy-s22-ultra-s908-411932-sm-s908edrvaro-532745731--Download-Source--zoom.png', stock: 20, description: 'Celular Samsung S22 Ultra Fabricado en Tierra del Fuego'},
    {   id:'3', name:'Notebook Acer I7', price: 1650000, category:'notebook', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_712057-MLA69804907048_062023-O.webp', stock: 5, description: 'Notebook Acer con procesador Intel Core I7 de 10ma generacion, placa de video Nvidia Gforce 3070'}
]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 2000)
    })
}