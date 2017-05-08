# 10 Interview Questions Every JavaScript Developer Should Know

- "Don’t disqualify candidates based on stuff that’s easy to learn"
- [Source](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)

## The Questions

1. Can you name two programming paradigms important for JavaScript app developers?
  - Declarative programming is when you say what you want (what you want done), and imperative language is when you say how to get what you want (how you want it done).
  - Paradigms:
    - Procedural (imperative) - like list of instructions
    - OOP (imperative)
    - Functional (declarative)
1. What is functional programming?
  - Functions, rather than objects or procedures/statements, are the main building blocks of the program. In functional programming, functions are treated as values - they are first-class citizens! Functions should be pure, so they avoid side effects. Can't share state. Scope is enclosed in the functions.
1. What is the difference between classical inheritance and prototypal inheritance?
  - Why is this a trick question? Because you do not have classes in JavaScript. Instead, everything is a form of prototypical inheritence.
  - [JavaScript constructors, prototypes, and the `new` keyword](https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword)
  - [Benefits of prototypal inheritance over classical?](http://stackoverflow.com/a/16872315/1799408)
1. What are the pros and cons of functional programming vs object-oriented programming?
  - OOP:
    - Pros: easier to understand; modeled after the "real world"; combines state and behavior; code re-use
    - Cons: can become highly coupled
  - Functional:
    - Pros: avoids side effects and state -> when a function is ran, you know what the output should be, so you know what should happen, avoids race conditions
    - Cons: difficult to understand and conceptualize; abstract
1. When is classical inheritance an appropriate choice?
  - [Benefits of prototypal inheritance over classical?](http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical)
1. When is prototypal inheritance an appropriate choice?
  - See previous question
1. What does "favor object composition over class inheritance" mean?
  - [Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA#action=share)
  - [Object Composition and Prototypical Inheritance in JavaScript](https://www.barkweb.co.uk/blog/object-composition-and-prototypical-inheritance-in-javascript)
1. What are two-way data binding and one-way data flow, and how are they different?
  - Two-way: when the UI is bound to the model and vice-versa (angular)
  - One-way: model is source of truth, user interaction triggers changes (react)
1. What are the pros and cons of monolithic vs microservice architectures?
  - Monolithic: highly-coupled, commited to a stack/language, longer dev cycles
  - Microservice: loosely-coupled, can add complexity ([Asynchronous Microservices](http://www.slideshare.net/bpedro/asynchronous-microservices-in-nodejs))
1. What is asynchronous programming, and why is it important in JavaScript?
  - Does not wait for operations to complete - instead, operations are added to an event queue.
