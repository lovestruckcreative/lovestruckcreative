const questions = [
    "What inspired you to work in the wedding world?",
    "What is your most memorable moment from a wedding that you've helped bring to life?",
    "How would you describe your style? Give us 5 words.",
    "How do you personalize a wedding experience for each couple?",
    "Can you share any hidden talents that come in handy at weddings?",
    "What's your favorite part of the wedding day?",
    "What's your process for understanding a couple's vision for their day?",
    "How do you ensure that a wedding runs smoothly?",
    "How do you balance your creative vision with the couple's wishes?",
    "What's a common misconception about your role in the wedding industry?",
    "Where would we find you and what would you be doing after a wedding weekend?",
    "What's your order at the bar?",
    "How can lovers make their wedding day special?",
    "What's your go-to gear or tool at a wedding?",
    "What's your advice for dealing with wedding day jitters?",
    "How do you capture the unique personalities of the people you work with?",
    "What's your favorite season for weddings and why?",
    "How do you make a wedding feel timeless?",
    "How do you approach sustainability in weddings?",
    "What's the most challenging aspect of your job?",
    "How do you keep it together when things are getting emotional on the day?",
    "What's a piece of advice you find yourself giving to all your couples?",
    "How do you ensure that your work reflects the lovers' unique love story?",
    "What’s the most important thing to remember when planning a wedding?",
    "How do you handle the dynamics of family traditions and expectations?",
    "What’s your favorite wedding moment to capture?",
    "How do you keep up the energy during long wedding days?",
    "How do you help calm down nervous lovers?",
    "What’s your best advice for creating a seamless day-of timeline?",
    "What’s a wedding trend that you think is overrated?",
    "What’s your favorite thing about being a wedding pro?",
    "What’s the most rewarding thing about being a wedding pro?",
    "What’s your dream wedding theme? Bucket list type've theme.",
    "Do you have a wedding moment that you’ll never forget?",
    "How do you go above and beyond for your clients?",
    "Can you share a creative solution you’ve had to come up with for a wedding challenge?",
    "What do you enjoy most about working with couples during their wedding journey?",
    "How can couples incorporate their unique love story into their wedding day?",
    "Team elopement or wedding? Why?",
    "What’s the most unexpected source of inspiration you’ve had?",
    "What’s the most meaningful way you’ve seen a couple honor a loved one at their wedding?",
    "What’s your favorite guilty pleasure TV show or movie?",
    "If you could travel anywhere in the world where would you go?",
    "If you weren’t in the wedding space what would you be doing?",
    "Do you have a hobby that surprises people?",
    "What’s your favorite comfort food?",
    "What’s one song that always gets you on the dance floor?",
    "Have you got any pets? Tell us about them.",
    "What’s one skill or hobby you’ve always wanted to learn? Why?",
    "What’s your favorite local spot you’d recommend to out-of-towners?",
    "If you could have dinner with anyone living or dead who would it be?",
    "What’s the best piece of advice you’ve ever received?",
    "If you could instantly master any instrument what would it be and why?",
    "What’s your go-to karaoke song?",
    "How do you prefer to get your caffeine fix?",
    "What’s one wedding trend you wish would come back?",
    "What’s the most adventurous thing you’ve ever done?",
    "If you had a superpower what would it be?",
    "What’s the most unusual thing you’ve eaten?",
    "If you could switch lives with one person for a whole day who would it be?",
    "Do you collect anything?",
    "What’s your favorite way to give back to the community?",
    "What’s something people would be surprised to find out about you?",
    "Do you have a favorite quote or mantra to live by?",
    "How do you like your eggs in the morning?",
    "What’s something you’ve done that you’re really proud of?",
    "What would your best birthday ever look like?"
];

let remainingQuestions = [...questions];

function getRandomQuestion() {
    if (remainingQuestions.length === 0) {
        remainingQuestions = [...questions]; // Reset the questions list once all have been shown
    }
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const question = remainingQuestions[randomIndex];
    remainingQuestions.splice(randomIndex, 1); // Remove the chosen question from the array
    return question;
}

document.getElementById('show-question-btn').addEventListener('click', function() {
    const question = getRandomQuestion();
    document.getElementById('question').textContent = question;
});

document.getElementById('copy-question-btn').addEventListener('click', function() {
    const question = document.getElementById('question').textContent;
    navigator.clipboard.writeText(question).then(() => {
        alert('Question copied to clipboard!');
    });
});
