// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const quote = document.createElement('h2');
        quote.textContent = item.quote;

        const author = document.createElement('p');
        author.textContent = item.author;

        card.appendChild(quote);
        card.appendChild(author);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();