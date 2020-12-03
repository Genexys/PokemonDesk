import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргументы "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Должна принимать два аргументы "getPokemons" и { name: "Pikachu" }, на выходе получить объект с полями pathname, protocol, host и query с полями равными Pikachu', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {
        name: 'Pikachu',
      },
    });
  });

  test('Должна принимать два аргументы "getPokemon" и { id: "25" }, на выходе получить объект с полями pathname, protocol, host и пустой query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
