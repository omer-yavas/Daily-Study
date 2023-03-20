import { useState } from 'react';

const InputField = (props) => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('');

  const textHandler = (event) => {
    setText(event.target.value);
    updateMe();
  };

  const valueHandler = (event) => {
    setValue(event.target.value);
    updateMe();
  };

  const updateMe = () => {
    props.setInput({ text: text, value: value, id: props.id });
  };

  return (
    <div className="input">
      <p>Text:</p>
      <input type="text" onChange={textHandler}></input>
      <p>Value:</p>
      <input type="text" onChange={valueHandler}></input>
      <button onClick={() => props.delete(text, value, props.id)}>
        Delete
      </button>
    </div>
  );
};

export default InputField;
