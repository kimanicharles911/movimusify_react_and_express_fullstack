describe('Frontend Unit tests', () => {
  it('Modify typed Input test', () => {
    const modifyTypedInput = (typedInput) => {
      const arrFromInput = [];
      typedInput.split('').map(arrItem => {
        if(arrItem === ' ') arrItem = '+';
        arrFromInput.push(arrItem);
      })
      return arrFromInput.join('');
    };
    expect(modifyTypedInput('jack johnson')).toBe('jack+johnson');
  });

  it('Unlike function test', () => {
    const unlikeFunc = (dataIndex) => {
      let favouritesArr = [
        {
          id: 1,
          title: "delectus aut autem",
        },
        {
          id: 2,
          title: "quis ut nam facilis et officia qui",
        },
        {
          id: 3,
          title: "fugiat veniam minus",
        }
      ];
      return favouritesArr = favouritesArr.filter(favourite => favourite !== favouritesArr[dataIndex]);
    };
    expect(unlikeFunc(2)).toHaveLength(2);
  });
});
/* 
  * I nested the two tests in a describe block that described what both tests are about.
  * I wrote the first test that tests whether empty spaces from the search input are replaced with a plus character so that they can be fit for being fetched by the API.
  * I wrote the second test that tests whether the unlike function works as intended. I gave a dummy array favouritesArr upon which the favourite item whose index is given in the assertion should be removed.
*/