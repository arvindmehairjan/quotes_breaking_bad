const fetchData = async () => {
    try {
        const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const renderData = async () => {
    const container = document.querySelector('.container');
    const data = await fetchData();

    // Clear existing content in the container
    container.innerHTML = '';

    if (!data) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const quote = document.createElement('h2');
        quote.textContent = `"${item.quote}"`;

        const author = document.createElement('p');
        author.textContent = `- ${item.author}`;

        card.appendChild(quote);
        card.appendChild(author);
        container.appendChild(card);
    });
};

// Add event listener to the button, gets id of button 
const newQuoteButton = document.getElementById('newQuoteButton');
newQuoteButton.addEventListener('click', renderData);

// Initial rendering of data
renderData();