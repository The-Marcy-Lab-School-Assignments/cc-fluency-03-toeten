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



//q 1

const logAllNames = (users) => {
  users.forEach(user => console.log(user.name))
}


logAllNames(users)


//q2

const getAllTags = (users) => {
  users.forEach(user => console.log(`Hi my name is ${user.name}, and my tag is ${user.username}!`))
}

getAllTags(users)

//q3

const sumAllFollowers = (users) => {
  return users.reduce((total, {followers}) => {
    return total + followers
  }, 0)
}



console.log(sumAllFollowers(users))


//q4

const searchUsername = (users, username) => {
  return users.find(user => user.username === username)
}


console.log(searchUsername(users,"@passaic_papi" ))




//q5

const longWinded = () => {
  return users.reduce((longest, user) => {
    return user.bio.length > longest.bio.length ? user : longest
  })
}

console.log(longWinded(users))

//q6

const follower = () => {
  return users.sort((a,b) =>{
    a.followers - b.followers
  })
}


console.log(follower(users))