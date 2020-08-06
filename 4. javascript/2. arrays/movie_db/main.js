// Create an array of movie object. 
// Each movie should have a title, rating, and hasWatched properties. 
// Iterate through the array and print out something that looks like:

// You have watched "In Bruges" - 5 starts
// You have not seen "Frozen" - 4.5 starts
// You have seen "Mad max Fury Road" - 5 stars
// You have not seen "Los Miserables" - 3.5 stars.

let movies = [
  {
    title: "Frozen",
    rating: " - 5 stars",
    hasWatched: true,
  },
  {
    title: "Toy story",
    rating: " - 4.5 stars",
    hasWatched: false,
  },
  {
    title: "Fast & Furious",
    rating: " - 3.5 stars",
    hasWatched: true,
  },
  {
    title: "Voley",
    rating: " - 4",
    hasWatched: false,
  },
];

movies.forEach(function(movie){
  let result = "You have ";
  if (movie.hasWatched) {
    result += "seen ";
  } else {
    result += "not seen ";
  }
  result = result + movie.title + movie.rating
  console.log(result)
})

