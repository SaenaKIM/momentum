const quotes = [
    {
        quote: "The way ro get started is to quit talking and begin",
        author: "Walt Disney"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein"
    },
    {
        quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
        author: "Friedrich Nietzsche"
    },
    {    
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide, Autumn Leaves"
    },
    {
        quote: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
        author: "Eleanor Roosevelt"
    },
    {  
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {  
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    { 
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(quotes.length * Math.random())];// round, ceil

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


