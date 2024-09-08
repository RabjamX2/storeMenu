menu = [
	{ name: "Momo (Dumpling)", price: 8, image: "Momo.png", description: "Beef dumplings (1 order includes 7 Momos)" },
	{ name: "Shapaley", price: 7, image: "Shapaley.png", description: "Bread stuffed with seasoned meat" },
	{
		name: "Yellow Laphing",
		price: 7,
		image: "yLaphing.png",
		description: "Spicy Wheat Flour Cold Noodle (contains peanuts)",
	},
	{
		name: "Tibetan Bread",
		price: 2,
		image: "TibetanBread.png",
		description: "Homemade tibetan bread",
	},
	// { name: "Muffin", price: 2, image: "Muffin.jpg", description: "Cranberry & Blueberry muffins" },
	// { name: "Croissant", price: 1, image: "Croissants.jpg", description: "" },
	{ name: "Tibetan Tea", price: 1, image: "MilkTea.png", description: "Homemade Tibetan Tea & Sweet Milk Tea" },
	// { name: "Coffee", price: 1, image: "Coffee.jpg", description: "" },
];

function loadMenu() {
	let menuContainer = document.getElementById("menu-container");
	menuContainer.innerHTML = "";
	let normal_direction = true;
	menu.forEach((item) => {
		let menuItem = document.createElement("div");
		menuItem.className = "menu-item";
		if (normal_direction) {
			menuItem.innerHTML = `
            <div class="img-container">
                <img src="assets/images/${item.image}" alt="${item.name}" />
            </div>
            <h4 class="price">$${item.price}</h4>
            <div class="menu-info">
                <h3 class="name english">${item.name}</h3>
                <p class="description">${item.description}</p>
            </div>
        `;
			normal_direction = false;
		} else {
			menuItem.innerHTML = `
            <div class="menu-info">
                <h3 class="name english">${item.name}</h3>
                <p class="description">${item.description}</p>
            </div>
            <h4 class="price">$${item.price}</h4>
            <div class="img-container">
                <img src="assets/images/${item.image}" alt="${item.name}" />
            </div>
        `;
			normal_direction = true;
		}
		menuContainer.appendChild(menuItem);
	});
}

loadMenu();
