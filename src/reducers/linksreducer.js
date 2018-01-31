// const defaultState = {
//   allMemes: [
//     {id: "1", title: 'Slender Man', url: `http://knowyourmeme.com/memes/slender-man`},
//     {id: "2", title: 'Doge', url: `http://knowyourmeme.com/memes/doge`},
//     {id: "3", title: 'Arrow in the Knee', url: `http://knowyourmeme.com/memes/i-took-an-arrow-in-the-knee`},
//     {id: "4", title: 'Tide Pods', url: `http://knowyourmeme.com/memes/tide-pod-challenge`},
//     {id: "5", title: 'Whomst', url: `http://knowyourmeme.com/memes/whomst`}
//   ],
//   oneMeme: []
// };

const defaultState = [
  {
    id: "1",
    title: "Slender Man",
    url: `http://knowyourmeme.com/memes/slender-man`
  },
  { id: "2", title: "Doge", url: `http://knowyourmeme.com/memes/doge` },
  {
    id: "3",
    title: "Arrow in the Knee",
    url: `http://knowyourmeme.com/memes/i-took-an-arrow-in-the-knee`
  },
  {
    id: "4",
    title: "Tide Pods",
    url: `http://knowyourmeme.com/memes/tide-pod-challenge`
  },
  { id: "5", title: "Whomst", url: `http://knowyourmeme.com/memes/whomst` }
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ONE":
      let theOne = state.allMemes.filter(meme => meme.id === action.id);

      if (theOne[0]) {
        return {
          allMemes: state.allMemes,
          oneMeme: theOne[0]
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
