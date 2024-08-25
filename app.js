const apiKey = "bf3u-mdUS0YFDkxD6smNOablrER4PQ7MW8QpHlSVhC8"
let page = 1;
const inputArea = document.querySelector("input");
const serachBtn = document.querySelector(".search");
const parentContainer = document.querySelector(".image-section")
const showMore = document.querySelector(".addMorebtn")

inputArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        parentContainer.innerHTML = ""
        showImages(e.target.value);
    }
    inputData = e.target.value;
})


serachBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showImages(inputArea.value);
})

showMore.addEventListener("click", () => {
    page++
    showImages(inputArea.value);
})

async function showImages(value) {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${apiKey}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();
    let results = data.results;
    results.map(item => {
        let imageContainer = document.createElement("a");
        imageContainer.classList.add("image");
        imageContainer.href = item.links.html;
        imageContainer.target = "_blank"
        let image = document.createElement("img");
        image.src = item.urls.small;
        imageContainer.appendChild(image);
        parentContainer.appendChild(imageContainer);
    })
    showMore.style.display = "block"
}