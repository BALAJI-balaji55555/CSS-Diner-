function checkSelector() {
  const userSelector = document.getElementById("selector").value;
  const target = document.getElementById("target");
  const items = document.querySelectorAll(".plate .item");

  // Reset styles
  items.forEach(item => item.classList.remove("selected"));

  try {
    const selectedItems = document.querySelectorAll(userSelector);

    if (selectedItems.length === 0) {
      document.getElementById("feedback").textContent = "No elements matched!";
      return;
    }

    selectedItems.forEach(el => el.classList.add("selected"));

    if (selectedItems.length === 1 && selectedItems[0] === target) {
      document.getElementById("feedback").textContent = "✅ Correct!";
    } else {
      document.getElementById("feedback").textContent = "❌ Try again. You selected the wrong item(s).";
    }
  } catch (e) {
    document.getElementById("feedback").textContent = "⚠️ Invalid selector.";
  }
}
