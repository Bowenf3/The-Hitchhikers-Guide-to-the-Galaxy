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
    if (checkForReference(input, onDisplayText)) {
      return;
    } else {
      fetch(
        `http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${input.value}&format=json`,
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
            `Hi there! This is Eddie your shipboard computer just popping in to say have a great day guys! \n I see you were searching for ${input.value}... unfortunately our field researchers haven't added an entry yet! \n Share and Enjoy!`,
          );
        });
    }
  },
};
