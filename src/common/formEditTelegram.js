import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { DOMAIN, createTelegram, updateTelegram } from '../constans/endpoint';
import { UpdateTelegramAction, addTelegramAction } from '../redux/action/telegramAction';

const ModalEditFormTelegram = ({ openmodal, setOpenmodal, data, isAddDomain }) => {
  const [form] = Form.useForm();
    const dispatch = useDispatch();

  useEffect(() => {
    console.log("data updata: ", data)
    form.setFieldsValue({
      userName: data?.userName || "",
      chatId: data?.chatId || "",
      active: data?.active || false,
    });

  }, [data]);

  const handleCancel = () => {
    setOpenmodal(false);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Perform update action with values
        const dataUpdate = {
            "userName": values?.userName,
            "chatId": values?.chatId,
            "active": values?.active,
        }
        if(isAddDomain){
        console.log('Form values update:', dataUpdate);
            
            dispatch(addTelegramAction(DOMAIN+createTelegram, dataUpdate ))
        }else{
            dispatch(UpdateTelegramAction(DOMAIN+updateTelegram, data?.id, dataUpdate ))
        }
        setOpenmodal(false);
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };



  return (
    <Modal
      title={isAddDomain == true? "Add new telegram":"Edit telegram"}
      centered
      visible={openmodal}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={isAddDomain === true? "Add New":"Update"}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          userName: data?.userName,
          chatId: data?.chatId,
          active: data?.active,
        }}
      >
        <Form.Item
          name="userName"
          label="User Name"
          rules={[{ required: true, message: 'Please enter domain name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="chatId"
          label="Telegram ID"
          rules={[{ required: true, message: 'Please enter chat id user' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="active"
          label="active"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <span style={{color: "red"}}>
        How to get Telegram ID?
        </span>
        <br></br>
        <span style={{color: "green"}}>
          Go to telegram app - search "@userinfobot" then submit "/start" show id telegram for you.
        </span>
      </Form>
     
    </Modal>
  );
};

export default ModalEditFormTelegram;
