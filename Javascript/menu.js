// Define the API endpoints
const appetizersURL = "https://my.api.mockaroo.com/appetizersDetails.json?key=78f71140";
const mainCourseURL = "https://my.api.mockaroo.com/maincourse.json?key=78f71140";
const dessertURL = "https://my.api.mockaroo.com/dessert.json?key=78f71140";

// Function to fetch menu items and display them
async function fetchAndDisplayMenu(apiURL, category) {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const menuItems = data;

        // Get the menu-items container by category
        const menuItemsContainer = document.querySelector(`#${category}`);
        menuItemsContainer.innerHTML = ""; // Clear the container first

        // Iterate through menu items and append them to the container
        menuItems.forEach((item) => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item";

            // Create an image element and set the image source
            const itemImage = document.createElement("img");
            itemImage.src = item["Image"];
            menuItem.appendChild(itemImage);

            const itemName = document.createElement("h3");
            itemName.textContent = item["Item Name"];
            menuItem.appendChild(itemName);

            const itemDescription = document.createElement("p");
            itemDescription.textContent = item["Description"];
            menuItem.appendChild(itemDescription);

            const itemPrice = document.createElement("span");
            itemPrice.textContent = `₹${item["Price"].toFixed(2)}`; // Format as rupees
            menuItem.appendChild(itemPrice);

            const itemCategory = document.createElement("p");
            itemCategory.textContent = `Category: ${item["Category"]}`;
            menuItem.appendChild(itemCategory);

            const itemVegetarian = document.createElement("p");
            itemVegetarian.textContent = `Vegetarian: ${item["Vegetarian"] ? "Yes" : "No"}`;
            menuItem.appendChild(itemVegetarian);

            const itemSpicyLevel = document.createElement("p");
            itemSpicyLevel.textContent = `Spicy Level: ${item["Spicy Level"]}`;
            menuItem.appendChild(itemSpicyLevel);

            menuItemsContainer.appendChild(menuItem);
        });
    } catch (error) {
        console.error("Error fetching and displaying menu:", error);
    }
}

// Fetch and display appetizers
fetchAndDisplayMenu(appetizersURL, "appetizers");

// Fetch and display main courses
fetchAndDisplayMenu(mainCourseURL, "main-course");

// Fetch and display desserts
fetchAndDisplayMenu(dessertURL, "desserts");

// accordion

// Get all accordion titles (h2 elements)
const accordionTitles = document.querySelectorAll(".accordion-title");

// Add click event listeners to each accordion title
accordionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const menuSection = title.parentElement; // Get the parent section
    const menuItems = menuSection.querySelector(".menu-items"); // Get the menu items container
    const arrow = title.querySelector(".arrow"); // Get the arrow element

    // Toggle the 'active' class to expand/collapse the section
    if (menuSection.classList.contains("active")) {
      menuSection.classList.remove("active");
      menuItems.style.display = "none";
      arrow.classList.remove("rotate"); // Remove the 'rotate' class to reset arrow rotation
    } else {
      // Close other open sections
      accordionTitles.forEach((otherTitle) => {
        const otherMenuSection = otherTitle.parentElement;
        if (otherMenuSection !== menuSection && otherMenuSection.classList.contains("active")) {
          otherMenuSection.classList.remove("active");
          otherMenuSection.querySelector(".menu-items").style.display = "none";
          otherTitle.querySelector(".arrow").classList.remove("rotate"); // Reset arrow rotation for other sections
        }
      });

      menuSection.classList.add("active");
      menuItems.style.display = "flex";
      arrow.classList.add("rotate"); // Add the 'rotate' class to rotate the arrow
    }
  });

  // Initially close each section on page load
  const menuSection = title.parentElement;
  const menuItems = menuSection.querySelector(".menu-items");
  menuSection.classList.remove("active");
  menuItems.style.display = "none";
});
