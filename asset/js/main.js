$(document).ready(function () {
  const drinkMenu = [
    {
      name: "Es Kopi Susu Aren",
      imageClass: "mid1",
      description:
        "Es kopi klasik dengan kombinasi espresso dan gula aren manis yang pas.",
      price: 25000,
    },
    {
      name: "Matcha Latte",
      imageClass: "mid2",
      description:
        "Teh hijau matcha pilihan dipadukan dengan susu creamy. Kaya rasa, lembut, dan menenangkan.",
      price: 28000, 
    },
    {
      name: "Kopi Vyyxz Bliss",
      imageClass: "mid3",
      description:
        "Signature drink kami yang unik, kombinasi espresso, sirup vanila, dan milk foam.",
      price: 35000,
    },
    {
      name: "Red Velvet Latte",
      imageClass: "mid4",
      description: "Latte dengan rasa red velvet yang manis dan creamy.",
      price: 30000,
    },
    {
      name: "Manual Brew Coffee",
      imageClass: "mid5",
      description:
        "Nikmati rasa asli biji kopi terbaik dengan teknik manual brew seperti V60 atau Kalita.",
      price: 32000,
    },
    {
      name: "Caramel Macchiato",
      imageClass: "mid6",
      description:
        "Espresso dan susu creamy berpadu dengan rasa manis dari sirup caramel.",
      price: 34000,
    },
    {
      name: "Iced Chocolate Bliss",
      imageClass: "mid7",
      description:
        "Cokelat Belgia premium dengan es batu, untuk rasa yang mewah dan menyegarkan.",
      price: 30000,
    },
    {
      name: "Honey Lemon Tea",
      imageClass: "mid8",
      description:
        "Campuran teh segar dengan madu dan lemon, cocok untuk suasana santai.",
      price: 20000,
    },
    {
      name: "Strawberry Frappe",
      imageClass: "mid9",
      description: "Minuman blended dengan stroberi segar, manis dan creamy.",
      price: 33000,
    },
    {
      name: "Taro Latte",
      imageClass: "mid10",
      description: "Latte taro manis dengan susu, rasa unik dan menenangkan.",
      price: 29000,
    },
    {
      name: "Earl Grey Tea Latte",
      imageClass: "mid11",
      description:
        "Teh Earl Grey wangi berpadu dengan susu untuk rasa yang lembut dan elegan.",
      price: 28000,
    },
    {
      name: "Mango Passion Smoothie",
      imageClass: "mid12",
      description:
        "Smoothie mangga segar dengan sentuhan rasa passion fruit. Segar maksimal!",
      price: 35000,
    },
  ];

  const foodMenu = [
    {
      name: "Butter Croissant",
      imageClass: "mif1",
      description:
        "Croissant klasik dengan rasa buttery yang meleleh di mulut.",
      price: 22000,
    },
    {
      name: "Almond Brownie",
      imageClass: "mif2",
      description:
        "Brownies cokelat dengan tekstur fudgy, manis, dan gurih dari almond.",
      price: 25000,
    },
    {
      name: "Artisan Sandwich",
      imageClass: "mif3",
      description:
        "Sandwich dengan isian fresh dan roti berkualitas, cocok untuk ngemil berat.",
      price: 35000,
    },
    {
      name: "Cheese Danish Pastry",
      imageClass: "mif4",
      description: "Pastry renyah dengan isian keju yang creamy dan lezat.",
      price: 25000,
    },
    {
      name: "Chocolate Lava Cake",
      imageClass: "mif5",
      description:
        "Cake cokelat dengan lelehan cokelat hangat di bagian tengahnya. Perfect!",
      price: 38000,
    },
    {
      name: "Spinach Quiche",
      imageClass: "mif6",
      description:
        "Pie gurih dengan isian bayam dan keju, cocok untuk snack yang elegan.",
      price: 28000,
    },
    {
      name: "Banana Bread",
      imageClass: "mif7",
      description:
        "Banana bread dengan rasa manis alami pisang dan tekstur yang lembut.",
      price: 20000,
    },
  ];

  drinkMenu.forEach((drink) => {
    $("#drink-menu").append(
      `<div class="menu-cardd">
            <h4 class="menu-card-title">${drink.name}</h4>
            <div class="menu-img ${drink.imageClass}"></div>
            <p class="menu-desc">${drink.description}</p>
            <div class="menu-price-buy">
                <h5 class="menu-price">${formatPrice(drink.price)}</h5>
                <a href="#" class="menu-buynow">Buy now</a>
            </div>
        </div>`
    );
  });

  foodMenu.forEach((food) => {
    $("#food-menu").append(
      `<div class="menu-cardd">
            <h4 class="menu-card-title">${food.name}</h4>
            <div class="menu-img ${food.imageClass}"></div>
            <p class="menu-desc">${food.description}</p>
            <div class="menu-price-buy">
                <h5 class="menu-price">${formatPrice(food.price)}</h5>
                <a href="#" class="menu-buynow">Buy now</a>
            </div>
        </div>`
    );
  });
});

function formatPrice(price) {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp ${formattedPrice},-`;
}
