import request from 'request-promise';

export async function getDadJoke() {
  const options = {
    url: 'https://icanhazdadjoke.com/',
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await request(options);
  return JSON.parse(response).joke;
}
