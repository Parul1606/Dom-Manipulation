// variables

let btn = document.querySelector('#new-quote');  // It is a  is a JavaScript DOM method to find the first element based on a CSS selector.
let quote = document.querySelector('.quote');
let person =  document.querySelector('.person');

const quotes =[{
    quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
    person: `Franklin D. Roosevelt`
}, {
    quote: `"Innovation distinguishes between a leader and a follower."`,
    person: `Steve Jobs`
}, {
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`
}, {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`
}, {
    quote: `"Do not wait for leaders; do it alone, person to person."`,
    person: `Mother Teresa`
}, {
    quote: `"The only way to do great work is to love what you do."`,
    person: `Steve Jobs`
}, {
    quote: `""Change is the law of life. And those who look only to the past or present are certain to miss the future."`,
    person: `John F. Kennedy`
}, {
    quote: `""I learned that courage was not the absence of fear, but the triumph over it."`,
    person: `Nelson Mandela`
}, {
    quote: `"The best way to predict the future is to create it."`,
    person: `Abraham Lincoln`
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length); // Generate a random number between 0 (inclusive) and the length of the quotes array

    quote.innerText = quotes[random].quote; // Update the content of the 'quote' element with the selected quote text
    person.innerText = quotes[random].person; // Update the content of the 'person' element with the name of the person who said the quote

})

/* Key Concept for this Project are:
1. document.querySelector()
2. addEventListener()
3. Math Object()
4. innerText */