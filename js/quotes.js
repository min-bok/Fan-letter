const quotes = [
    {
        quote: 'Chains of habit are too light to be felt until they are too heavy to be broken.',
        author: 'Warren Buffett'
    },
    {
        quote: 'You create your opportunities by asking for them.',
        author: 'Patty Hansen'
    },
    {
        quote: 'Talent wins games, but teamwork wins championships.',
        author: 'Michael Jordan'
    },
    {
        quote: 'In this life he laughs longest who laughs last.',
        author: 'John Masefield'
    },
    {
        quote: 'The worst is not So long as we can say, "This is the worst."',
        author: 'William Shakespeare'
    },
    {
        quote: 'History is moving, and it will tend toward hope, or tend toward tragedy.',
        author: 'George W. Bush'
    },
    {
        quote: 'Life is a risk.',
        author: 'Diane Frolov'
    },
    {
        quote: 'Blaze with the fire that is never extinguished.',
        author: 'Luisa Sigea'
    },
    {
        quote: 'Genius is nothing but a great capacity for patience.',
        author: 'Buffon'
    },
    {
        quote: 'The best thing about the future is that it comes one day at a time.',
        author: 'Abraham Lincoln'
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;