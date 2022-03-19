import axios from 'axios';

type ResponseType = {
  data: {
    rwId: string;
    wordList: string[];
  };
};

export const postPickedWords = async (pickedWordList: string[]) => {
  const response: ResponseType = await axios.post('http://13.125.59.252/randomWord', {
    wordList: pickedWordList,
  });

  return response.data.rwId;
};
