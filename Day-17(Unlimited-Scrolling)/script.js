const scrollContent = document.getElementById("scrollContent");
const loadingText = document.getElementById("loading");
let isLoading = false;
let page = 1;

async function fetchImages() {
  if (isLoading) return;
  isLoading = true;
  loadingText.style.display = "block";

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=49050555-2810989b0194ec56470b181e3&q=&image_type=photo&page=${page}&per_page=15`
    );
    const data = await response.json();

    if (data.hits.length > 0) {
      data.hits.forEach((image) => {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("image-card");
        const img = document.createElement("img");
        img.src = image.webformatURL;
        img.alt = image.tags;
        imgContainer.appendChild(img);
        scrollContent.appendChild(imgContainer);
      });

      page++; // Increment page for next fetch
    }
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    isLoading = false;
    loadingText.style.display = "none";

    // Observe the last image
    const lastImage = document.querySelector(".image-card:last-child");
    if (lastImage) {
      observer.observe(lastImage);
    }
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoading) {
        fetchImages();
      }
    });
  },
  { root: document.getElementById("scrollContainer"), threshold: 1 }
);

// Initial fetch
fetchImages();
