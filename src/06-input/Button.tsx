import React from 'react';

type Button2Props = {
  name: string;
  callBack: () => void;
}

export const Button2 = (props: Button2Props) => {
  const onClickButtonHandler = () => {
    props.callBack();
  }

  return (
    <button onClick={onClickButtonHandler}>+</button>
  );
};
