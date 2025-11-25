// Q6 — Fetch product data from Fake Store API (browser)
// Note: run in browser console. In Node, install node-fetch and use it.

async function fetchProductsAndLog() {
  const url = "https://fakestoreapi.com/products";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");
    const products = await res.json();
    products.forEach((p) => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("-----");
    });

    // Bonus: create simple cards (uncomment in browser page context)
    /*
    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    container.style.gap = "12px";
    products.forEach(p => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "8px";
      card.style.borderRadius = "6px";
      const img = document.createElement("img"); img.src = p.image; img.style.width = "100%";
      const title = document.createElement("h4"); title.textContent = p.title;
      const price = document.createElement("p"); price.textContent = "$" + p.price;
      card.appendChild(img); card.appendChild(title); card.appendChild(price);
      container.appendChild(card);
    });
    document.body.appendChild(container);
    */
  } catch (err) {
    console.error("Failed to load products. Please try again.", err);
  }
}

// Run:
fetchProductsAndLog();
