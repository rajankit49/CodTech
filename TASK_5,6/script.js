document.getElementById("loadData").addEventListener("click", fetchData);

function fetchData() {
  // Fetch sample posts from JSONPlaceholder
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("dataContainer");
      container.innerHTML = ""; // Clear previous data
      
      // Loop through posts and display them
      data.forEach(post => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.margin = "10px";
        div.style.padding = "10px";
        div.style.borderRadius = "5px";
        div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}
