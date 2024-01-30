// Importing the array
import { officeQuotes } from './ArrayQuotes.mjs';

// Function to display the quote
export function displayQuote(quote) {
    // Log the quote to the console
    console.log(quote);

    // Display quote in the div
    document.getElementById('quote-output-div').textContent = quote;
}

// This function returns a random quote from the array.
export function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * officeQuotes.length);
    return officeQuotes[randomIndex];
}
