// THE UNION OF SKYLER AND JUSTICE

// Skyler Smith was walking down the street on a sunny day in Philadelphia. 

// ! Create a variable to store Skyler Smith as the main character.

const mainCharacter = 'Skyler Smith';


// ! Create a variable to store the sunny weather. We will not allow the weather to change. It's always sunny in Philadelphia.

const weather = 'sunny';


// Justice Jones was walking down the same street, but perpendicular to Skyler and towards Skyler's path. Justice was feeling lonely, but something magical was in the air.

// ! Create a variable to store Justice Jones as the secondary character. We'll assume Justice is not savvy to any name changes. The name just rolls off the tongue a little too well.

const secondaryCharacter = 'Justice Jones';


// ! Create a variable to store Justice's mood. Justice is quite moody, so we will expect mood to change.

let mood = 'lonely';


// Skyler and Justice, both wearing their airpods, were walking briskly and turned the same corner. They crashed into each other and fell to the ground.

// ! Create an object saved to a variable that includes the info for both characters, the weather, and Justice's mood. You can name the object storyDeets. Use the above variables as values.

let storyDeets = {
  mainCharacter: mainCharacter,
  secondaryCharacter: secondaryCharacter,
  weather: weather,
  mood: mood
}

// ! Console log the story details to see our scene as-is

// console.log(storyDeets)

// Skyler was up first and apologized profusely. Skyler extended their hand and helped Justice to their feet. Justice was feeling dazed at this point.

// ! Update storyDeets to reflect Justice's change in mood.

storyDeets.mood = 'dazed';


// ! Comment out the previous story details and console log the current story details here.

// console.log(storyDeets)


// Skyler and Justice stopped all talking once they fixated their eyes upon each other and instantly fell in love. They both simultaneously heard wedding bells. They were young and didn't realize how much they'd come to value the freedom that came with being single. They got married the next week, as would be expected from this duo.

// ! Skyler took Justice's last name in the marriage, and they were both temporarily in a happy mood. Update the story details to reflect both these changes.

storyDeets.mainCharacter = 'Skyler Jones';
storyDeets.mood = 'happy';

// They both got having children on their mind after watching an episode of Oprah.

// ! Update the story details to include a property called children and set it to false. Also, create another property called childrenNames and set it to to null.

storyDeets.children = false;
storyDeets.childrenNames = null;

// ! Comment out the previous story details and console log the current story details here.

// console.log(storyDeets)

// Skyler and Justice Jones decided it was time for a few children.

// ! Create a function (call it decisionMaker) that will take in a number for the amount of children they are thinking of having. The are undecided on the number, so we'll include an IF statement that will return the following: return the string 'make up your mind already' if num is falsey, 2 children should return the string 'perfect decision', and any other amount should return 'uh-oh'.

function decisionMaker(num) {
  if (!num) {
    return 'make up your mind already';
  } else if (num === 2) {
    return 'perfect decision';
  } else {
    return 'uh-oh';
  }
}


// ! Test out their decision-making process by invoking the function with different values.

// decisionMaker(34);


// By using the decisionMaker function, we've helped the Jones' decide that 2 is the number of children worth having. They've named the children Sam and Shilo.

// ! Update the story details to reflect this. Change the children value, also make childrenNames an array and add the children.

storyDeets.children = true;
storyDeets.childrenNames = ['Sam', 'Shilo'];

// ! Comment out the previous story details and console log the current story details here.

// console.log(storyDeets)


// Justice decided Shilo should actually be a Sammy.

// ! Update the childrenNames array to include the changed name.

storyDeets.childrenNames[1] = 'Sammy';


// ! Comment out the previous story details and console log the current story details here.

console.log(storyDeets)

// Let's make an ending for the Jones' story. When possible, use the storyDeets object and our decisionMaker function to provide the information so we can console log the happy ending to the story. It should read as:
// 'Skyler Jones and Justice Jones met on a sunny day and them getting married was the perfect decision.'

console.log(`${storyDeets.mainCharacter} and ${storyDeets.secondaryCharacter} met on a ${storyDeets.weather} day and them getting married was the ${decisionMaker(2)}.`)



