// utils/functions.ts

/**
 * Generates a unique 10-digit ID in the format XX-YYYYY-XXX.
 * @returns {string} The generated unique ID.
 */

export function generateUniqueDiasporanId(): string {
  // const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10; // Generates a random number between 10 and 99
  // const randomFiveDigitNumber = Math.floor(Math.random() * 90000) + 10000; // Generates a random number between 10000 and 99999
  const randomAlphabet = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Generates a random uppercase letter
  const randomSevenDigitNumber = Math.floor(Math.random() * 9000000) + 1000000; // Generates a random number between 1000000 and 9999999
  const suffix = "GD";

  return `${randomAlphabet}${randomSevenDigitNumber}${suffix}`;
}

// Add other utility functions here as needed

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

export const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "AGE", uid: "age", sortable: true},
  {name: "ROLE", uid: "role", sortable: true},
  {name: "TEAM", uid: "team"},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];