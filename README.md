# Code Challenge: JavaScript Fluency

## Instructions

1. Clone down this assignment to your local environment.
2. Code your solution using JavaScript in `index.js`.
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Problems

**Solve the following problems using higher order array methods**

For today's questions, we will perform all of our operations on the following array, `users`.

```
const users = [
  { name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]

```

1. Write a function names `logAllNames` that logs all the names of each user to the console.
    
    ```jsx
    logAllNames(users) 
    /* Will log each name to the console
    Reuben
    Laisha
    Anne
    Steph
    Carmen
    */ 
    ```
    
2. Write a function, `getAllTags`, that will log strings that contain the `name` and `username` property for each user to the console.
    
    ```jsx
    getAllTags(users)
    /* These strings will be printed to the console
      'Hi my name is Reuben, and my tag is @blood_pressure_killa!',
      'Hi my name is Laisha, and my tag is @passaic_papi!',
      'Hi my name is Anne, and my tag is @i_love_bambas!',
      'Hi my name is Steph, and my tag is @queen_of_the_kew!',
      'Hi my name is Carmen, and my tag is @omar_apollo_fanclub!'
    */
    ```
    
3. Write a function, `sumAllFollowers` that returns a sum of the number of followers each user has. 
    
    ```jsx
    sumAllFollowers(users) //returns 1201913
    ```
    
4. Write a function, `searchUsername`, that takes a string along with the array of objects and returns the user object whose `username` matches the string parameter.
    
    ```jsx
    searchUsername(users, "@passaic_papi")
    
    // returns this array:
    [
      { name: 'Laisha C',
        username: '@passaic_papi',
        followers: 700,
        verified: true,
        bio: "My commute is longer than yours."
      }
    ]
    ```
    
5. Who is most long-winded? Return the object with the longest bio.
    
    ```jsx
    longWinded(users)
    
    // returns this array:
    [
      { name: 'Carmen S',
        username: '@omar_apollo_fanclub',
        followers: 1200000,
        verified: true,
        bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
      }
    ]
    ```
    
6. Return an array sorted by `follower` count, least to greatest.
    
    ```jsx
    follower(users)
    // returns the follwoing array:
    [
      { name: 'Reuben O.',
        username: '@blood_pressure_killa',
        followers: 1,
        verified: false,
        bio: "It's an honor and a privilege."
      },
      { name: 'Anne H.',
        username: '@i_love_bambas',
        followers: 12,
        verified: false,
        bio: "@mayabee is my best friend"
      },
      { name: 'Laisha C',
        username: '@passaic_papi',
        followers: 700,
        verified: true,
        bio: "My commute is longer than yours."
      },
      { name: 'Steph S.',
        username: '@queen_of_the_kew',
        followers: 1200,
        verified: false,
        bio: "✌🏼"
      },
      { name: 'Carmen S',
        username: '@omar_apollo_fanclub',
        followers: 1200000,
        verified: true,
        bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
      }
    ]
    
    ```
