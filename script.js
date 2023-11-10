console.log('Hello there');
const randomNumber = Math.floor(Math.random() * 5);

const quotes = [
    'Life is 10% what happens to you and 90% how you react to it.',
'Change your thoughts, and you change your world.',
'All our dreams can come true if we have the courage to pursue them.',
'Success is a journey not a destination.',
'What you get by achieving your goals is not as important as what you become by achieving your goals.'
]

const mixedMessages = () => {
    console.log(quotes[randomNumber]);
}