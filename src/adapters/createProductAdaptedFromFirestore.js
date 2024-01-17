

export const createProductAdaptedFromFirestore = (doc) => {
    const fields = doc.data()
    return {
        id: doc.id,
        name: fields.name,
        price: fields.price,
        category: fields.category,
        pictureUrl: fields.pictureUrl,
        stock: fields.stock,
        description: fields.description
    }
}