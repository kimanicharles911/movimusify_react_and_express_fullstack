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