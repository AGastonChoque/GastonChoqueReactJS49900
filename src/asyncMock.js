const products = [
    {
        id:'1',
        name:'Iphone 13 Pro Max',
        price: 1350000,
        category:'celular',
        pictureUrl:'https://www.lavanguardia.com/andro4all/hero/2022/01/iPhone-13-Pro-Max.jpg?width=768&aspect_ratio=16:9&format=nowebp',
        stock: 8,
        description: 'Celular Iphone 13 Pro Max, no necesitas mas...'
    },
    {   id:'2', name:'Samsung S22 Ultra', price: 900000, category:'celular', pictureUrl:'https://media.flixcar.com/webp/synd-asset/Samsung-105793410-ar-galaxy-s22-ultra-s908-411932-sm-s908edrvaro-532745731--Download-Source--zoom.png', stock: 2, description: 'Celular Samsung S22 Ultra Fabricado en Tierra del Fuego.'},
    {   id:'3', name:'Notebook Acer I7', price: 1650000, category:'notebook', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_712057-MLA69804907048_062023-O.webp', stock: 3, description: 'Notebook Acer con procesador Intel Core I7 de 10ma generacion, placa de video Nvidia Gforce 3070.'},
    {   id:'4', name:'Notebook Asus I9', price: 3580000, category:'notebook', pictureUrl:'https://www.cdmarket.com.ar/image/0/1000_1300-402324_001.jpg', stock: 5, description: 'Notebook Asus con procesador Intel Core I9 de 10ma generacion, placa de video Nvidia Gforce 3090.'},
    {   id:'5', name:'Tablet Samsung A8', price: 520000, category:'tablet', pictureUrl:'https://media.4rgos.it/i/Argos/1244999_R_Z001A?w=1500&h=880&qlt=70&fmt=webp', stock: 7, description: 'Visión más amplia con la pantalla inmersiva de 10.5. Diseño elegante, clásico y contemporáneo. Parlantes cuádruples con tecnología Dolby Atmos para sonidos más dinámicos.'},
    {   id:'6', name:'iPad Pro M11', price: 1999399, category:'tablet', pictureUrl:'https://www.macstation.com.ar/img/productos/2458-1.jpg', stock: 8, description: 'La experiencia iPad definitiva. Ahora con el rendimiento increíble del chip M1, una pantalla XDR espectacular y conexión 5G ultrarrápida. Abróchate el cinturón.'},
    {   id:'7', name:'Google Pixel 8 Pro', price: 799999, category:'celular', pictureUrl:'https://lh3.googleusercontent.com/KaLIFYVg9298b8jv33H3pagRaAz4lCQxrQz-goMEsiTuCmUf2Ood9ktkzgjpotkMuRcAMimOV2RfN7vBZVmnInf5wcwUNsRZpw=rw-e365-w3000', stock: 10, description: 'Mucha inteligencia artificial, nuevo procesador, cámaras mejoradas... El cóctel que compone este Pixel 8 Pro tiene buen aspecto.'}
]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
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