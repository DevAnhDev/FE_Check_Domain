import React from 'react';
import { message } from 'antd';

const Message = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (content, type) => {
    messageApi.open({
      type,
      content,
      duration: 4,
    });
  };

  return { contextHolder, showMessage };
};

export default Message;
