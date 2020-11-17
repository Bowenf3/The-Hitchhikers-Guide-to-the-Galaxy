function checkForReference(input, setDisplayText) {
  switch (input) {
    case 'Earth':
      setDisplayText('Mostly Harmless');
      return true;
    case 'Vogons':
      setDisplayText('If you want a drink from a Vogon... forget it.');
      return true;
    default:
      break;
  }
}

module.exports = {
  search(input, setDisplayText) {
    if (checkForReference(input, setDisplayText)) {
      return;
    } else {
      fetch(
        `http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${input}&format=json`,
      )
        .then((data) => {
          if (data.status > 400) {
            throw new Error('Not found');
          } else {
            return data.json();
          }
        })
        .then((data) => {
          const id = data.query.search[0].pageid;
          const title = data.query.search[0].title;
          fetch(
            `http://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext&titles=${title}&format=json`,
          )
            .then((res) => res.json())
            .then((res) => {
              setDisplayText(res.query.pages[id].extract);
            });
        })
        .catch((error) => {
          if (error.message === 'Not found') {
            setDisplayText(
              `Hi there! This is Eddie your shipboard computer! Just popping in to say how excited I am to be working with you guys! \n\nI see you were searching for ${input}... Unfortunately, it looks like your Guide is having trouble connecting to the Sub-Etha net! Please check your digital watch or similar device and check it is connected to your planet's ethernet, internet, swanglefield, gggrrhhhdwqosndcX. You have a great day now! \n\nShare and Enjoy!`,
            );
          } else {
            setDisplayText(
              `Hi there! This is Eddie your shipboard computer! Just popping in to say how excited I am to be working with you guys! \n\nI see you were searching for ${input}... Unfortunately, our field researchers haven't added an entry for that yet! You have a great day now! \n\nShare and Enjoy!`,
            );
          }
        });
    }
  },

  random(setDisplayText) {
    fetch(
      `http://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=1`,
    )
      .then((data) => {
        if (data.status > 400) {
          throw new Error('Not found');
        } else {
          return data.json();
        }
      })
      .then((data) => {
        const id = data.query.random[0].id;
        const title = data.query.random[0].title;
        fetch(
          `http://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext&titles=${title}&format=json`,
        )
          .then((res) => res.json())
          .then((res) => {
            setDisplayText(res.query.pages[id].extract);
          });
      })
      .catch((error) => {
        if (error.message === 'Not found') {
          setDisplayText(
            `Hi there! This is Eddie your shipboard computer! Just popping in to say how excited I am to be working with you guys! \n\nI see you were searching for ${input}... Unfortunately, it looks like your Guide is having trouble connecting to the Sub-Etha net! Please check your digital watch or similar device and check it is connected to your planet's ethernet, internet, swanglefield, gggrrhhhdwqosndcX. You have a great day now! \n\nShare and Enjoy!`,
          );
        } else {
          setDisplayText(
            `Hi there! This is Eddie your shipboard computer! Just popping in to say how excited I am to be working with you guys! \n\nI see you were searching for ${input}... Unfortunately, our field researchers haven't added an entry for that yet! You have a great day now! \n\nShare and Enjoy!`,
          );
        }
      });
  },
};
