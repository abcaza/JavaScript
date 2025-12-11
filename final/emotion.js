//Amsi Cazares, 12/8/25
let clickCount = 0;
//this is going to be the emotion element 
const emotionDisplay = document.querySelector('#emotionDisplay');

//this is going to bring up the qoute for each emotion chosen with the color I think goes best with the emotion
const emotions = {
        happy: { bg: 'rgba(233, 235, 162, 1)', text: '#4c755eff', message: 'the most wasted of all days is one without laughter- E.E. Cummings'},
        bored: { bg: '#505751ff', text: 'rgba(117, 189, 248, 1)', message: 'you need to let the little things that would ordinarily bored you suddenly thrill you- Andy Warhol'},
        angry: { bg: '#d33c17ff', text: '#ebc784ff', message: 'speak when you are angry and you will make the best speech you will ever regret- Ambrose Bierce'},
        excited: { bg: '#ee77eeff', text: '#174468ff', message: 'the future belongs to those who believe in the beauty of their dreams- Elanor Roosevelt'},
        embarrassed: { bg: '#483753ff', text: '#462445ff', message: 'a person who never made a mistake, never tried anything new- Albert Einstein'},
        love: { bg: '#fd6a6aff', text: '#4b0606ff', message: 'to love someone is nothinng, to be loved by someone is something, to love someone who loves you is everything- Unknown'},
        sad: { bg: '#120c58ff', text: '#4a96e2ff', message: 'WE must let go of the life we have planned, so as to accept the one that is waiting for us- Joseph Campbell'},
        anxious: { bg: '#534f63ff', text: '#cdcfd1ff', message: 'do not anticipate trouble or worry about what may never happen- Benjamin Franklin'},
        reset: { bg: '#ffffffff', text: '#000000ff', message: 'Choose your emotion...'},
};

//code is able to identify when the user 'clicks' on one of the emotions, i also added a function so it updates all what is below 
function updateEmotion(emotionSettings){
//changes the color of the background depending on the emotion clicked
        document.body.style.backgroundColor = emotionSettings.bg;
//chnages the color of the text "phone of emotions"
        document.body.style.color = emotionSettings.text;
//changes the different qoutes that appears on the phone 
         emotionDisplay.textContent = emotionSettings.message;
}

document.addEventListener('click', function(emotionChoice){
// thi swill check if one of the emotions is clicked or not 
     if (emotionChoice.target.classList.contains('emotion-btn')){
//looks of that emotion 'data-emotion' button
        const emotion = emotionChoice.target.getAttribute('data-emotion');
//gets the settings for the emotion button
        const emotionSettings = emotions[emotion];
// I found this one super cool, it would be written after clicking F12 and it will tell you the currect time you clicked. I really like it.

        const timeNow = new Date();
        console.log("Current time:", timeNow);
// times when the word happy and love clicks, but also inlcudes eveything else.
        if (emotion === "happy" || emotion === "love") {
            console.log("user has a positive emoition :) !");
        }

// how many clicks there would be 
                clickCount = clickCount + 1; 

//counting the clicks there is on the screen
document.querySelector('#clickCounter').textContent = "Clicks: " + clickCount;

//will make the function work that I had created above
        updateEmotion(emotionSettings);


 
   }});




