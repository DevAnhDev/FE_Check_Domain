import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const ModalConfirm = () => {
  const [modal, contextHolderConfirm] = Modal.useModal();

  const confirm = (title, content, onOk) => {
    modal.confirm({
      title: title,
      icon: <ExclamationCircleOutlined />,
      content: content,
      okText: 'OK',
      cancelText: 'Cancel',
      onOk: onOk,
    });
  };

  return { contextHolderConfirm, confirm };
};

export default ModalConfirm;
