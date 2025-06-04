const products = [
    {
        name: "Atomic Habits",
        category: "books",
        price: "$12",
        image: "https://m.media-amazon.com/images/I/81ANaVZk5LL._SL1500_.jpg"
    },
    {
        name: "Rich Dad Poor Dad",
        category: "books",
        price: "$10",
        image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg"
    },
    {
        name: "The Alchemist",
        category: "books",
        price: "$15",
        image: "https://i5.walmartimages.com/seo/Paulo-Coelho-The-Alchemist-Anniversary-25-Paperback-9780062315007_948b8f73-b87e-4922-b48c-100d10a7a31d.21fbc8437506383145e571a08bc4807c.jpeg"
    },
    {
        name: "Smart Watch",
        category: "gadgets",
        price: "$59",
        image: "https://images-cdn.ubuy.co.in/6593d3e0692bd14e1760d7b5-apple-watch-ultra-2-49-mm-titanium.jpg"
    },
    {
        name: "Bluetooth Earbuds",
        category: "gadgets",
        price: "$25",
        image: "https://images-cdn.ubuy.co.in/64f13f7ea16ada2bc6681c69-hoey-wireless-earbuds-bluetooth-5-1.jpg"
    },
    {
        name: "Wireless Charger",
        category: "gadgets",
        price: "$20",
        image: "https://m.media-amazon.com/images/I/71ZwtsDEtqL._AC_SL1500_.jpg"
    },
    {
        name: "Denim Jacket",
        category: "clothes",
        price: "$35",
        image: "https://media.boohoo.com/i/boohoo/fzz40659_vintage%20wash_xl/female-vintage%20wash-oversized-denim-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
    },
    {
        name: "Classic T-Shirt",
        category: "clothes",
        price: "$18",
        image: "https://www.trueclassictees.com/cdn/shop/products/COLOR_3PACK_585fb834-1307-47ee-b52a-20dbbbf08955.jpg?v=1657570179&width=710"
    },
    {
        name: "Running Sneakers",
        category: "clothes",
        price: "$50",
        image: "https://m.media-amazon.com/images/I/61Ox4GXFVUL._AC_SL1009_.jpg"
    }
];




let select = document.getElementById("category-select");
let cardContainer = document.getElementById("card-container");
let message = document.getElementById("message");

document.addEventListener("DOMContentLoaded", () => {

    function renderCards(arr) {
        cardContainer.innerHTML = "";
        arr.forEach(product => {
            const card = document.createElement("div");
            card.className = "card";

            const image = document.createElement("img");
            image.setAttribute("src", `${product.image}`);
            image.setAttribute("alt", `${product.name}`);

            const name = document.createElement("h2");
            name.textContent = `Product: ${product.name}`

            const category = document.createElement("p");
            category.textContent = `Category: ${product.category}`;

            const price = document.createElement("p");
            price.textContent = `Price: ${product.price}`;


            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(category);
            card.appendChild(price);
            cardContainer.appendChild(card);
        });
    }
    renderCards(products);

    select.addEventListener("change", () => {
        let selected = select.value;

        try {
            if (selected === "all") {
                renderCards(products)
            } else {
                const filtered = products.filter(product => product.category === selected)
                renderCards(filtered);
            }
        } catch (error) {
            message.textContent("Something went wrong!")
            console.error(error)
        }
    })
    let search = document.getElementById("search");

    search.addEventListener("input", () => {
        const searchTerm = search.value.toLowerCase();
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        renderCards(filtered);
    });
})


