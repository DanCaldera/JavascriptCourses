import { getDataFromApi } from '../promise-async';
import { async } from 'regenerator-runtime';
require('regenerator-runtime/runtime');

describe('Obtaining data from an api Promise', () => {
  test('should get data', (done) => {
    const api = 'https://rickandmortyapi.com/api/character/';
    getDataFromApi(api).then((data) => {
      //   console.log(data.results.length);
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  test('should say Hello!', async () => {
    await expect(Promise.resolve('Hello!')).resolves.toBe('Hello!');
  });

  test('should send Error!', async () => {
    await expect(Promise.reject('Error!')).rejects.toBe('Error!');
  });
});

describe('Probando promesas Async', () => {
  const url = 'https://rickandmortyapi.com/api/character';
  test('not null request', async (done) => {
    const data = await getDataFromApi(url);
    expect(data.results.length).not.toBeNull();
    done();
  });

  test('Greater than 0 data Async', async (done) => {
    const data = await getDataFromApi(url);
    expect(data.results.length).toBeGreaterThan(0);
    done();
  });

  test('should Get a character', async (done) => {
    const { name } = await getDataFromApi('https://rickandmortyapi.com/api/character/1');
    expect(name).toEqual('Rick Sanchez');
    done();
  });

  test('should Get a request with an Error', async () => {
    const apiError = 'http://httpstat.us/404';
    const request = getDataFromApi(apiError);
    await expect(request).rejects.toEqual(Error('Request failed with status code 404'));
  });
});
