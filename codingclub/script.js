const restaurants = [
    { name: "iHeart Cafe", phone: "8762436640", cuisine: ["Bakery", "North Indian"], image: "https://iheartcafeindia.com/images/g3.png", menu: "https://media-cdn.tripadvisor.com/media/photo-s/13/88/be/e7/drinks-menu.jpg" },
    { name: "Belpatra Cafe and Kitchen", phone: "6398755062", cuisine: ["North Indian"], image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cc/de/bc/belpatra-cafe-and-kitchen.jpg?w=1400&h=800&s=1", menu: "https://belpatra.com/menu" },
    { name: "Rituraj Restaurant", phone: "941240301", cuisine: ["South Indian"], image: "https://files.yappe.in/place/small/rituraj-vegetarian-restaurant-93275.webp", menu: "https://riturajrestaurant.com/menu" },
    { name: "Brownies Bakery", phone: "8958400073", cuisine: ["Bakery"], image: "https://media-cdn.tripadvisor.com/media/photo-s/13/f4/4c/6a/the-bakery.jpg", menu: "https://browniesbakery.com/menu" },
    { name: "Singh's Restaurant", phone: "+91 88594 34472", cuisine: ["South Indian"], image: "https://content.jdmagicbox.com/comp/nainital/c1/9999p5942.5942.171113113132.r7c1/catalogue/singhs-restaurant-nainital-9hymu.jpg", menu: "https://singhsrestaurant.com/menu" },
    { name: "Anant Vilas Resort", phone: "+91 88594 34472", cuisine: ["South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pkfT8DCcdJrgXBWHD--MUSfdMtJsAGE8ng&s", menu: "https://anantvilas.com/menu" }
  ];
  
  const listElement = document.getElementById('restaurant-list');
  
  function renderRestaurants(data) {
    listElement.innerHTML = data.map((r, index) => `
      <div class="restaurant-card">
        <span class="favorite" onclick="toggleFavorite(${index})">♡</span>
        ${r.image ? `<img src="${r.image}" alt="${r.name}">` : ''}
        <h3>${r.name}</h3>
        <p>📞 ${r.phone}</p>
        <p>${r.cuisine.join(", ")}</p>
        <button onclick="window.open('${r.menu}', '_blank')">View Menu</button>
      </div>
    `).join('');
  }
  
  function filterResults() {
    const query = document.getElementById('search').value.toLowerCase();
    const filtered = restaurants.filter(r =>
      r.name.toLowerCase().includes(query) ||
      r.cuisine.some(c => c.toLowerCase().includes(query))
    );
    renderRestaurants(filtered);
  }
  
  function filterByCuisine(cuisine) {
    const filtered = restaurants.filter(r => r.cuisine.includes(cuisine));
    renderRestaurants(filtered);
  }
  
  function toggleFavorite(index) {
    const hearts = document.querySelectorAll('.favorite');
    hearts[index].classList.toggle('active');
    hearts[index].textContent = hearts[index].classList.contains('active') ? '❤️' : '♡';
  }
  
  renderRestaurants(restaurants);
  
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "Switch to Light" : "Switch to Dark";
  });
  