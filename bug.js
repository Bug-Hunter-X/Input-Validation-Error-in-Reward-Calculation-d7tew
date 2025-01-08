```javascript
function calculateReward(amount) {
  if (amount < 0) {
    throw new Error('Amount cannot be negative');
  }
  // ...rest of the reward calculation logic...
}

// Example usage with potential error:
let amount = -10;
let reward = calculateReward(amount); // Throws an error
```