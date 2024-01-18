const accessKey = "VNdfn3dba2l2hpaaEiYeXRTJOMG2f_2G8rsCHwMzpkY"

let searchForm = document.getElementById("search-form")
let searchBox = document.getElementById("search-box")
let searchResult = document.getElementById("search-result")
let searchMore = document.getElementById("show-more-btn")
let searchBtn = document.querySelector(".search-btn")



let keyword = '';
let page = 1;

async function  searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url)

    const data = await response.json()

    
    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    if(page === 1){
        searchResult.innerHTML = "";
    }

    results.map((result) =>{
        const image = document.createElement('img')
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })

    searchMore.style.display = "block";
}

searchForm.addEventListener('submit',(e) => {
    e.preventDefault()
    page = 1

    searchImages();
})

searchMore.addEventListener("click",() =>{
    page++;
    searchImages();
})

searchBtn.addEventListener("click",(result) =>{
    
    searchImages();
    result++
})