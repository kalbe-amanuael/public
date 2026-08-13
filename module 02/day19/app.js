let items = [];

// DOM References
const form = document.getElementById("shopping-form");
const input = document.getElementById("item-input");
const list = document.getElementById("list");
const counter = document.getElementById("counter");

// 2. Render function: Rebuilds UI entirely from state
function render() {
  list.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");

    // Use data-id attribute to link DOM to array element
    li.setAttribute("data-id", item.id);

    if (item.bought) {
      li.classList.add("done");
    }

    li.innerHTML = `<span class="item-text">${item.name}</span><button class="delete-btn">Remove</button>`;

    list.appendChild(li);
  });

  // Update live count of remaining (unbought) items
  const remainingCount = items.filter((item) => !item.bought).length;
  counter.textContent = `Items remaining: ${remainingCount}`;
}

// 3. Form handling: Validate, push data, then re-render
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const itemName = input.value.trim();
  if (!itemName) return; // Validation check

  const newItem = {
    id: Date.now().toString(), // Unique structural identifier
    name: itemName,
    bought: false,
  };

  items.push(newItem);
  input.value = "";

  render(); // State-then-render loop execution
});

// 4. Event Delegation: Clicks handled centrally at list element level
list.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  if (!li) return;

  const itemId = li.getAttribute("data-id");
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) return;

  if (e.target.classList.contains("delete-btn")) {
    // Remove item from state array
    items.splice(itemIndex, 1);
  } else {
    // Toggle bought true/false state
    items[itemIndex].bought = !items[itemIndex].bought;
  }

  render(); // State-then-render loop execution
});

// Initial invocation setup
render();
