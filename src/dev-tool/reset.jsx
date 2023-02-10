import React from 'react'
import { Button } from 'antd'

export const Reset = () => {
  function clear() {
    const confirmed = window.confirm(
      "Do you want to clear the database?？"
    );
    if (confirmed) {
      window.localStorage.clear();
      window.location.replace(window.location.origin);
    }
  }
  return <Button size={'small'} onClick={clear}>Clear database</Button>;
};
