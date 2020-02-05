# Dynamic Programming

- A method for solving a complex problem by breaking it down into a collection of simpler sub problems,
  solving each of those sub-problems just once, and storing their solutions

## we use Dynamic programming only when we have

- Overlapping sub problems
- optimal sub structure {
  A problem is said to have optimal substructure if an optimal solution can be constructed
  from optimal solutions of its sub problems
  }

### NB

- Memoization (Top down) is storing results of a computation so that we reuse it when it crops up again

- Tabulation (Bottom up) { - storing the result of a previous computation in a table( usually an array) - usually done using iteration - Better space complexity can be achieved using tabulation
- we start at the bottom
  }
