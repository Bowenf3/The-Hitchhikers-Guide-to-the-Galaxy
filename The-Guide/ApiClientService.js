function checkForReference(input, onDisplayText) {
  switch (input.value) {
    case 'Earth':
      onDisplayText('Mostly Harmless');
      return true;
    case 'Vogons':
      onDisplayText('If you want a drink from a Vogon... forget it.');
      return true;
    default:
      break;
  }
}

module.exports = {
  search(input, onDisplayText) {
    console.log('here', input);
    if (checkForReference(input, onDisplayText)) {
      return;
    } else {
      fetch(
        `http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${input}&format=json`,
      )
        .then((data) => data.json())
        .then((data) => {
          const id = data.query.search[0].pageid;
          const title = data.query.search[0].title;
          fetch(
            `http://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext&titles=${title}&format=json`,
          )
            .then((res) => res.json())
            .then((res) => {
              onDisplayText(res.query.pages[id].extract);
            });
        })
        .catch((error) => {
          onDisplayText(
            `Hi there! This is Eddie your shipboard computer! Just popping in to say how excited I am to be working with you guys! \n\nI see you were searching for ${input.value}... Unfortunately, our field researchers haven't added an entry for that yet! You have a great day now! \n\nShare and Enjoy!`,
          );
        });
    }
  },
};
