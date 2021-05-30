export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'Metro 2033',
        },
        {
          key: 1,
          title: 'Borkmanns Point',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'films',
      cards: [
        {
          key: 0,
          title: 'Miami Vice',
        },
        {
          key: 1,
          title: 'The Butterfly Effect',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'Arma 3',
        },
        {
          key: 1,
          title: 'Squad',
        },
      ],
    },
  ],
};
