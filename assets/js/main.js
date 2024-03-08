var quoteContentDetails = document.getElementById("quoteContentDetails");
var quoteText = document.getElementById("quoteText");
var quoteAuthor = document.getElementById("quoteAuthor");
var quoteContentContainer = ``;

var arrQuotes = [
    {
        quote : "Be yourself; everyone else is already taken." ,
        author : "Oscar Wilde"
    } ,
    {
        quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." ,
        author : "Marilyn Monroe"
    } ,
    {
        quote : "So many books, so little time." ,
        author : "Frank Zappa"
    } ,
    {
        quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,
        author : "Albert Einstein"
    } ,
    {
        quote : "A room without books is like a body without a soul." ,
        author : "Marcus Tullius Cicero"
    } ,
    {
        quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." ,
        author : "Bernard M. Baruch"
    } ,
    {
        quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams." ,
        author : "Dr. Seuss"
    } ,
    {
        quote : "Be the change that you wish to see in the world." ,
        author : "Mahatma Gandhi"
    }
];

function getNewQuote() {
    var quoteIndex = generateRandomIndex();
    var quoteContentText = `<p class="quote-text mb" id="quoteText">"${arrQuotes[quoteIndex].quote}"</p>`;
    var quoteContentAuthor = `<p class="quote-author" id="quoteAuthor">--${arrQuotes[quoteIndex].author}</p>`;
    quoteContentContainer = quoteContentText + quoteContentAuthor;
    quoteContentDetails.innerHTML = quoteContentContainer;
}

function generateRandomIndex() {
    var index= Math.floor(Math.random()*(arrQuotes.length - 1));
    return index;
}