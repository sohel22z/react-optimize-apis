import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {

    const products = [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/4/1.jpg",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/5/1.jpg",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
        },
        {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
                "https://i.dummyjson.com/data/products/6/1.png",
                "https://i.dummyjson.com/data/products/6/2.jpg",
                "https://i.dummyjson.com/data/products/6/3.png",
                "https://i.dummyjson.com/data/products/6/4.jpg"
            ]
        },
        {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/7/1.jpg",
                "https://i.dummyjson.com/data/products/7/2.jpg",
                "https://i.dummyjson.com/data/products/7/3.jpg",
                "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
            ]
        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/8/1.jpg",
                "https://i.dummyjson.com/data/products/8/2.jpg",
                "https://i.dummyjson.com/data/products/8/3.jpg",
                "https://i.dummyjson.com/data/products/8/4.jpg",
                "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
            ]
        },
        {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/9/1.jpg",
                "https://i.dummyjson.com/data/products/9/2.png",
                "https://i.dummyjson.com/data/products/9/3.png",
                "https://i.dummyjson.com/data/products/9/4.jpg",
                "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
            ]
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
            "images": [
                "https://i.dummyjson.com/data/products/10/1.jpg",
                "https://i.dummyjson.com/data/products/10/2.jpg",
                "https://i.dummyjson.com/data/products/10/3.jpg",
                "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
            ]
        },
        {
            "id": 11,
            "title": "perfume Oil",
            "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            "brand": "Impression of Acqua Di Gio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/11/1.jpg",
                "https://i.dummyjson.com/data/products/11/2.jpg",
                "https://i.dummyjson.com/data/products/11/3.jpg",
                "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
            ]
        },
        {
            "id": 12,
            "title": "Brown Perfume",
            "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/12/1.jpg",
                "https://i.dummyjson.com/data/products/12/2.jpg",
                "https://i.dummyjson.com/data/products/12/3.png",
                "https://i.dummyjson.com/data/products/12/4.jpg",
                "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
            ]
        },
        {
            "id": 13,
            "title": "Fog Scent Xpressio Perfume",
            "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            "brand": "Fog Scent Xpressio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
            "images": [
                "https://i.dummyjson.com/data/products/13/1.jpg",
                "https://i.dummyjson.com/data/products/13/2.png",
                "https://i.dummyjson.com/data/products/13/3.jpg",
                "https://i.dummyjson.com/data/products/13/4.jpg",
                "https://i.dummyjson.com/data/products/13/thumbnail.webp"
            ]
        },
        {
            "id": 14,
            "title": "Non-Alcoholic Concentrated Perfume Oil",
            "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
            "brand": "Al Munakh",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/14/1.jpg",
                "https://i.dummyjson.com/data/products/14/2.jpg",
                "https://i.dummyjson.com/data/products/14/3.jpg",
                "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
            ]
        },
        {
            "id": 15,
            "title": "Eau De Perfume Spray",
            "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
            "brand": "Lord - Al-Rehab",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/15/1.jpg",
                "https://i.dummyjson.com/data/products/15/2.jpg",
                "https://i.dummyjson.com/data/products/15/3.jpg",
                "https://i.dummyjson.com/data/products/15/4.jpg",
                "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
            ]
        }
    ]

    if (req.query.search) {
        const filterProducts = products.filter(
            product => product.title.includes(req.query.search)
        );
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000)

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});