# Code Reviewing 101

## For the Developer

- YOU ARE NOT YOUR CODE! The point of a code review is to find problems, and problems will ALWAYS be found. Try not to take this personally.
- BENEFITS: spot bugs early, learn by example (see how a senior does it), mentoring

## For the Reviewer

- REVIEWS SHOULD BE ACTIONABLE, SPECIFIC, AND KIND: Make sure the developer understands the issue and that it's worded in a way that leads to direct action - e.g., the developer can immediately go back and refactor.

### Feedback Examples

1. If you were going to implement the pseudocode, would it be easy to follow?
1. Is the code commented?
1. Proper Variable Naming - make the variable name descriptive and concise
  - Avoid naming variables after the data structure (array, string, arr, object, obj, etc)
  - Avoid numbered variables (var1, var2, var3)
  - Avoid single character names (i, x, n)
1. Proper Function Naming *The name should reflect the functions's single responsibility*
1. Keep it DRY
  - Condense repetitive code
  - Create new functions/methods to encapsulate common pieces of functionality
1. Did you like the logic?
1. Was every variable necessary?
1. What did the developer do well? What could they have done better?
1. Did you learn anything from this solution?

## External Resources

- [What to look for in a Code Review](http://blog.jetbrains.com/upsource/2015/07/23/what-to-look-for-in-a-code-review/)
