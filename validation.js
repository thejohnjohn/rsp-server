const validateHand = (hand) => {
    if (hand === 'rock' | hand === 'paper' | hand === 'scissors') {
        return `You choose ${hand}`;
    }

    return null;
}