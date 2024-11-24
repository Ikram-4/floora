const festivalEssenceData = {
    Spring: {
        description: "Spring symbolizes renewal and growth. During this season, jasmine and marigold are widely used in festivals like Ugadi, where they represent prosperity and new beginnings. Garlands made of jasmine flowers adorn doorways and idols, spreading a sense of positivity.",
        image: "https://example.com/spring-flowers.jpg" // Replace with an actual image URL
    },
    Summer: {
        description: "Summer brings vibrant flowers like sunflowers and marigolds, which are extensively used in weddings and pujas. These flowers symbolize energy and devotion, often seen in temple rituals and grand celebrations.",
        image: "https://example.com/summer-flowers.jpg" // Replace with an actual image URL
    },
    Fall: {
        description: "Fall is marked by festivals like Navratri and Diwali, where chrysanthemums and marigolds are essential. These flowers symbolize joy and festivity, often used for rangoli decorations and worship ceremonies.",
        image: "https://imgs.search.brave.com/I6vvw0CCj2Pb2sx3hbenXdvT-1yVIJlsCPc52KgiqPg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzViL1RpZ2VyX3Rh/aWxfbXVtXzAwMDQu/SlBH" // Replace with an actual image URL
    },
    Winter: {
        description: "Winter is the season of celebration, with flowers like poinsettias and holly adorning Christmas celebrations. They bring warmth and festivity to the chilly season and are integral to decor and gifting.",
        image: "https://example.com/winter-flowers.jpg" // Replace with an actual image URL
    }
};

// Function to update season and festival details
function updateSeason(season) {
    const seasonDescription = seasonData[season].description;
    document.getElementById("seasonDescription").innerHTML = `<p>${seasonDescription}</p>`;
    
    const festivalEssence = festivalEssenceData[season];
    const festivalDetails = document.getElementById("festivalDetails");
    festivalDetails.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
            <img src="${festivalEssence.image}" class="card-img-top" alt="${season} flowers">
            <div class="card-body">
                <p class="card-text">${festivalEssence.description}</p>
            </div>
        </div>
    `;
    
    const flowerOptions = flowerSeasons[season];
    const flowerSelector = document.getElementById("flowerSelector");
    flowerSelector.innerHTML = "";
    flowerOptions.forEach(flower => {
        const option = document.createElement("option");
        option.textContent = flower;
        flowerSelector.appendChild(option);
    });

    const seasonSelector = document.getElementById("seasonSelector");
    seasonSelector.value = season;
    seasonSelector.disabled = false;

    // Update the graphs
    updateGraphs(season);
}

