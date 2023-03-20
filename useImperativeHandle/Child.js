import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Child = (props, ref) => {
  const [count, setCount] = useState(10);

  const componenttenArttir = () => {
    setCount(count + 1);
  };
  const componenttenAzalt = () => {
    setCount(count - 1);
  };

  useImperativeHandle(ref, () => ({ componenttenArttir, componenttenAzalt }));
  return (
    <>
      <p>This is child component</p>
      <p>Count:{count}</p>
    </>
  );
};

export default forwardRef(Child);
