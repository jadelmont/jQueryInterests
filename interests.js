$(document).ready(() => {
    // Array holding historical art information
    const artworks = [
        {
            name: "Venus de Milo",
            type: "Sculpture",
            description: "An ancient Greek statue admired for its timeless beauty and the mystery of its missing arms.",
            img: "assets/venusdemilo.jpg",
            artist: "Alexandros of Antioch",
            date: "150 BCE",
            origin: "Greece",
            funFact: "The Venus de Milo is thought to depict Aphrodite, the Greek goddess of love and beauty."
        },
        {
            name: "Nike of Samothrace",
            type: "Sculpture",
            description: "A dynamic statue of the winged goddess of victory, celebrated for its sense of movement and grace.",
            img: "assets/nikeofsamothrace.jpg",
            artist: "Unknown",
            date: "190 BCE",
            origin: "Greece",
            funFact: "This masterpiece once adorned the Sanctuary of the Great Gods on Samothrace Island."
        },
        {
            name: "The Terracotta Army",
            type: "Sculpture",
            description: "A collection of life-sized clay soldiers built to protect China's first emperor in the afterlife.",
            img: "assets/terracottaarmy.jpg",
            artist: "Commissioned by Emperor Qin Shi Huang",
            date: "210 BCE",
            origin: "China",
            funFact: "Each figure is unique, with distinct facial features and expressions."
        },
        {
            name: "The Great Wave off Kanagawa",
            type: "Woodblock Print",
            description: "A Japanese masterpiece by Hokusai, capturing the power of nature with bold composition.",
            img: "assets/greatwave.jpg",
            artist: "Katsushika Hokusai",
            date: "1831",
            origin: "Japan",
            funFact: "It’s part of a series called 'Thirty-Six Views of Mount Fuji' and influenced Western artists like Van Gogh."
        },
        {
            name: "Red Fuji",
            type: "Woodblock Print",
            description: "Another iconic Hokusai artwork capturing Mount Fuji with vivid red tones.",
            img: "assets/redfuji.jpg",
            artist: "Katsushika Hokusai",
            date: "1830",
            origin: "Japan",
            funFact: "One of the earliest works in the 'Thirty-Six Views of Mount Fuji' series."
        },
        {
            name: "The Plum Garden at Kameido",
            type: "Woodblock Print",
            description: "A vibrant depiction of plum blossoms by Utagawa Hiroshige.",
            img: "assets/plumgarden.jpg",
            artist: "Utagawa Hiroshige",
            date: "1857",
            origin: "Japan",
            funFact: "This print is part of the celebrated 'One Hundred Famous Views of Edo.'"
        },
        {
            name: "Fabergé Imperial Eggs",
            type: "Jewelry/Ornamental Art",
            description: "Lavishly jeweled eggs crafted for the Russian Imperial family, featuring exquisite details and surprises.",
            img: "assets/imperialeggs.jpg",
            artist: "Peter Carl Fabergé",
            date: "1885–1916",
            origin: "Russia",
            funFact: "Only 50 Imperial Eggs exist, each with unique mechanical features and intricate design."
        },
        {
            name: "Cartier Tutti Frutti Bracelet",
            type: "Jewelry/Ornamental Art",
            description: "A colorful bracelet featuring carved gemstones in an intricate design.",
            img: "assets/cartiertutti.jpg",
            artist: "Cartier",
            date: "1928",
            origin: "France",
            funFact: "This style was inspired by Mughal India and remains a symbol of luxury."
        },
        {
            name: "The Portland Vase",
            type: "Jewelry/Ornamental Art",
            description: "An ancient Roman cameo glass vase, known for its incredible craftsmanship.",
            img: "assets/portlandvase.jpg",
            artist: "Unknown",
            date: "1st Century CE",
            origin: "Rome",
            funFact: "Its design influenced Wedgwood pottery in the 18th century."
        },
        {
            name: "The Peacock Room",
            type: "Decorative Interior Design",
            description: "An opulent Victorian interior by Whistler, featuring intricate gold and blue peacock motifs.",
            img: "assets/peacockroom.jpg",
            artist: "James McNeill Whistler",
            date: "1876",
            origin: "United Kingdom",
            funFact: "This space was designed to complement a collection of Asian porcelain."
        },
        {
            name: "Amber Room",
            type: "Decorative Interior Design",
            description: "A room adorned with amber panels, gold leaf, and mirrors—a masterpiece of Prussian craftsmanship.",
            img: "assets/amberroom.jpg",
            artist: "German craftsmen",
            date: "1701",
            origin: "Prussia",
            funFact: "Dubbed the 'Eighth Wonder of the World,' the original Amber Room was lost during WWII."
        },
        {
            name: "Hall of Mirrors",
            type: "Decorative Interior Design",
            description: "The grand gallery of mirrors at the Palace of Versailles showcasing opulence and artistry.",
            img: "assets/hallofmirrors.jpg",
            artist: "Jules Hardouin-Mansart",
            date: "1684",
            origin: "France",
            funFact: "This hall served as the site of the Treaty of Versailles in 1919."
        }
    ];

    // Array to track states (true = fun fact, false = original type)
    const states = [];
    for (let i = 0; i < artworks.length; i++) {
        states.push(false); // Initialize all states to false
    }

    // Append cards dynamically to the #gallery div
    artworks.forEach((art) => {
        const card = `
            <div class="card">
                <img src="${art.img}" alt="${art.name}">
                <h3>${art.name}</h3>
                <p class="type">${art.type}</p>
                <p><strong>Created By:</strong> ${art.artist} (${art.date})</p>
                <p><strong>Origin:</strong> ${art.origin}</p>
            </div>
        `;
        $("#gallery").append(card); // Dynamically add cards to the #gallery div
    });

    // Event: Click on card to toggle fun fact and original state
    $(".card").on("click", function () {
        const index = $(".card").index(this); // Get index of clicked card
        const typeElement = $(this).find(".type"); // Find the .type element within the clicked card

        if (states[index]) {
            // If fun fact is currently displayed, revert to original type
            typeElement.text(artworks[index].type);
            $(this).css({
                "background-color": "#ffffff",
                "border-color": "#ddd"
            });
            states[index] = false; // Update state
        } else {
            // If original type is displayed, show the fun fact
            typeElement.text(`Fun Fact: ${artworks[index].funFact}`);
            $(this).css({
                "background-color": "#fef9e7",
                "border-color": "#ffab40"
            });
            states[index] = true; // Update state
        }
    });

    // Event: Hover over card to show description
    $(".card").on("mouseover", function () {
        const index = $(".card").index(this); // Get index of hovered card
        if (!states[index]) {
            $(this).find(".type").text(artworks[index].description); // Show description if not displaying fun fact
        }
    });

    // Event: Mouse out to reset to artwork type
    $(".card").on("mouseout", function () {
        const index = $(".card").index(this); // Get index of card
        if (!states[index]) {
            $(this).find(".type").text(artworks[index].type); // Reset to type of art
        }
    });

    // Filter dropdown to dynamically update title, description, and cards
    $("#filter").on("change", function () {
        const selectedType = $(this).val(); // Get selected type from dropdown

        const textSection = $("#text-section");
        const overviewSection = $("#overview-section");

        // Show or hide text sections based on filter
        if (selectedType === "all") {
            textSection.show(); // Show original admiration section
            overviewSection.hide(); // Hide dynamic overview section
        } else {
            textSection.hide(); // Hide admiration section
            overviewSection.show(); // Show dynamic overview section

            let title = "";
            let description = "";

            if (selectedType === "Sculpture") {
                title = "Sculptures";
                description = `
                    Sculptures are the pinnacle of three-dimensional artistry, showcasing the skill and imagination of creators through the ages.
                    <ul>
                        <li>Often created from stone, metal, or clay, sculptures reveal mastery in manipulating materials.</li>
                        <li>They capture movement, expression, and elegance frozen in time.</li>
                        <li>Sculptures have been used for religious, commemorative, and decorative purposes.</li>
                    </ul>
                    The timeless appeal of sculptures transcends eras, reflecting cultural nuances and personal creativity.
                `;
            } else if (selectedType === "Woodblock Print") {
                title = "Woodblock Prints";
                description = `
                    Woodblock prints are a window into cultural tradition, combining precision and artistic flair.
                    <ul>
                        <li>Originating in Asia, particularly in China and Japan, these prints feature bold lines and intricate details.</li>
                        <li>Artists use hand-carved wooden blocks to layer vibrant colors and patterns.</li>
                        <li>Often depict themes like nature, folklore, and daily life.</li>
                    </ul>
                    Their meticulous craftsmanship makes them treasured pieces of history.
                `;
            } else if (selectedType === "Decorative Interior Design") {
                title = "Decorative Interior Design";
                description = `
                    Decorative interior designs exemplify the fusion of aesthetics and functionality in living spaces.
                    <ul>
                        <li>Rich in opulent materials like gold, amber, and silk.</li>
                        <li>Showcase cultural values through intricate patterns and artistic furniture.</li>
                        <li>Often associated with royalty, mansions, and heritage buildings.</li>
                    </ul>
                    These designs elevate interiors, transforming them into works of art.
                `;
            } else if (selectedType === "Jewelry/Ornamental Art") {
                title = "Jewelry & Ornamental Art";
                description = `
                    Jewelry and ornamental art blend creativity and craftsmanship to create timeless treasures.
                    <ul>
                        <li>From Fabergé eggs to ancient cameo vases, each piece is a testament to ingenuity.</li>
                        <li>Commonly crafted from precious metals, gemstones, and intricate carvings.</li>
                        <li>Symbolize wealth, beauty, and cultural heritage.</li>
                    </ul>
                    These exquisite creations are a celebration of artistry and innovation.
                `;
            }

            // Update dynamic title and description
            $("#dynamic-title").text(title);
            $("#dynamic-description").html(description);
        }

        // Show or hide cards based on selected type
        $(".card").each(function () {
            const cardType = $(this).find(".type").text();
            if (selectedType === "all" || cardType === selectedType) {
                $(this).show(); // Show matching cards
            } else {
                $(this).hide(); // Hide non-matching cards
            }
        });
    });
});
