let products = [];
let filteredProducts = [];

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");
const result = document.getElementById("result");

async function getProducts() {

    try {

        const response = await fetch(
            "https://dummyjson.com/products?limit=20"
        );

        const data = await response.json();

        products = data.products;
        filteredProducts = products;

        createCategories();


        displayProducts(filteredProducts);

    } catch (error) {

        productContainer.innerHTML =
            "<p>Unable to load products.</p>";

    }
}



function createCategories() {

    const categories = [];
     products.forEach(product => {

        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }

    });

    categories.forEach(category => {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categorySelect.appendChild(option);

    });
}


function displayProducts(list) {

    productContainer.innerHTML = "";

    result.textContent =
        `${list.length} products found`;

    if (list.length === 0) {

        productContainer.innerHTML =
            "<p>No products found 😔</p>";

        return;
    }

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <img src="${product.thumbnail}"
                 alt="${product.title}">

            <h3>${product.title}</h3>

            <p class="price">
                $${product.price}
            </p>

            <p class="rating">
                ⭐ ${product.rating}
            </p>

            <p class="category">
                Category: ${product.category}
            </p>

            <p class="stock">
                Stock: ${product.stock}
            </p>

        `;

        productContainer.appendChild(card);

    });
}

searchInput.addEventListener("input", function () {

    const searchValue =
        searchInput.value.toLowerCase();

    filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    applyFilters();

});
categorySelect.addEventListener("change", function () {

    applyFilters();

});


// Sorting
sortSelect.addEventListener("change", function () {

    applyFilters();

});


function applyFilters() {

    const searchValue =
        searchInput.value.toLowerCase();

    const selectedCategory =
        categorySelect.value;

    filteredProducts = products.filter(product => {

        const matchesSearch =
            product.title
                .toLowerCase()
                .includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    if (sortSelect.value === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (sortSelect.value === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (sortSelect.value === "rating") {

        filteredProducts.sort(
            (a, b) => b.rating - a.rating
        );

    }


    displayProducts(filteredProducts);

}
getProducts();


