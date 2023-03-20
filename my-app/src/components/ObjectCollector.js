import InputField from './InputField';
import { useState } from 'react';

const ObjectCollector = () => {
  const [data, setData] = useState([]);

  const inputAdder = () => {
    let random = Math.random();
    setData([...data, { text: '', value: '', id: random }]);
  };

  const setInputHandler = ({ text, value, id }) => {
    const index = data.map((e) => e.id).indexOf(id);
    const copyArr = [...data];
    copyArr[index] = { text: text, value: value, id: id };
    setData(copyArr);
  };

  const deleteHandler = (text, value, key) => {
    //const index = data.map((e) => e.id).indexOf(key);
    //const index = data.indexOf({ text: '', value: '', id: key });
    const copyData = data.map((item) => 
      if (item.id !== key) {
        return item;
      
    });
    setData(copyData);
  };

  return (
    <>
      <button onClick={inputAdder}>Add</button>
      {data.map((item) => (
        <InputField
          key={item.id}
          id={item.id}
          delete={deleteHandler}
          setInput={setInputHandler}
        ></InputField>
      ))}
    </>
  );
};

export default ObjectCollector;
