// utils/functions.ts

/**
 * Generates a unique 10-digit ID in the format XX-YYYYY-XXX.
 * @returns {string} The generated unique ID.
 */
export function generateUniqueDiasporanId(): string {
  const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10; // Generates a random number between 10 and 99
  const randomFiveDigitNumber = Math.floor(Math.random() * 90000) + 10000; // Generates a random number between 10000 and 99999
  const suffix = "GHA";

  return `${randomTwoDigitNumber}-${randomFiveDigitNumber}-${suffix}`;
}

// Add other utility functions here as needed

/**
 * Example utility function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}
