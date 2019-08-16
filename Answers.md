1. What problem does the context API help solve?

State management

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions work with functions to pass a flag to reducers to initiate a change, reducers manipulate your state, and the store is the thing that contains it all.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is managed through something like redux or useContext and allows for global state whereas component state is local state management.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleman program that allows actions to pass more complex information, like functions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Pure hooks are still my favorite, but I can see now the benefit of using redux and thunk to keep all your state in one manageable place.
