import quotes from '../data/quotes.json';

interface Quote {
    quote: string;
    author: string;
}


const GetRandomQuote = function (): Quote {
    const index: number = Math.floor(Math.random() * quotes.length);

    return quotes[index];
}

export default GetRandomQuote;