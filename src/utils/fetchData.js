export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e8cf10f2cdmsha344e62595b9c9ap1bf6aejsnb03b0525600c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e8cf10f2cdmsha344e62595b9c9ap1bf6aejsnb03b0525600c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
