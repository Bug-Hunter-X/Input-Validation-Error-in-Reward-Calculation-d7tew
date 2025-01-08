```javascript
function calculateReward(amount) {
  if (amount < 0) {
    console.error('Invalid input: Amount cannot be negative. Returning 0.');
    return 0; // Or handle the error as appropriate for the application
  }
  // ...rest of the reward calculation logic...
}

// Example usage with error handling:
let amount = -10;
let reward = calculateReward(amount); // Returns 0 instead of throwing an error
console.log(reward); // Output: 0
```