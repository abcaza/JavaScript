// Amsi Cazares, 12/3/25 

// Step 1: Select the mood display element from the DOM const moodDisplay =
    const moodDisplay = document.querySelector('#moodDisplay');

//Step 2: Define an object with configurations for each mood 
// Thisobject holds the background color, text color, and the message for each mood
    const moods = {
        happy: { bg: '#e098ddff', text: '#617e96ff', message: 'warm smiles and the suns kisses!'},
        calm: { bg: '#6db877ff', text: '#42664aff', message: 'take a deep breath and let the world slow down'},
        excited: { bg: '#ec7557ff', text: '#dfc42eff', message: 'adventure is in the air, ya ya'},
        chill: { bg: '#7dc3e4ff', text: '#0f5186ff', message: 'kick back, relax and let the world drift by'},
        mysterious: { bg: '#4d4a4aff', text: '#0d0e0fff', message: 'the unknown calls, wrapped in the shadows and whispers'},
        reset: { bg: '#ffffffff', text: '#000000ff', message: 'Choose a mood...'},
};

// Step 3: Add a single 'click' event listner to the document (event delegation)
// When anything on the page is clicked
        document.addEventListener('click', function(moodChoice){

//Step 4: MoodChoice = the parameter that holds info about the user's Click function
//Check if the thing clicked is a mood button 
        if (moodChoice.target.classList.contains('mood-btn')){

//Get the mood name from the button's data-mood attribute
        const mood = moodChoice.target.getAttribute('data-mood');

//Get the settings for that mood from the moods object 
        const moodSettings = moods[mood];

//Update the background color of the body
        document.body.style.backgroundColor = moodSettings.bg;

//Update the text color of the body
        document.body.style.color = moodSettings.text;

//Update the display message 
        moodDisplay.textContent = moodSettings.message;

        }});