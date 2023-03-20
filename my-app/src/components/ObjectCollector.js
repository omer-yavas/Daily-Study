import InputField from './InputField';
import { useState, forwardRef, useImperativeHandle } from 'react';

const ObjectCollector = (props, ref) => {
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

  const deleteHandler = (id) => {
    const deleteThis = (item) => {
      if (item.id !== id) return item;
    };
    //const index = data.map((e) => e.id).indexOf(key);
    //const index = data.indexOf({ text: '', value: '', id: key });
    const copyData = [...data];
    const copyData1 = copyData.filter(deleteThis);
    setData(copyData1);
  };

  const writeAll = () => {
    const format = [];
    data.map((item) => format.push({ text: item.text, value: item.value }));
    console.log(format);
  };

  useImperativeHandle(ref, () => ({ writeAll }));

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

export default forwardRef(ObjectCollector);
