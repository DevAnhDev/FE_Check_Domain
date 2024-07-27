import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { UpdateDomainAction, addDomainAction } from '../redux/action/domainAction';
import { DOMAIN, updateDomain } from '../constans/endpoint';

const ModalEditForm = ({ openmodal, setOpenmodal, data, isAddDomain }) => {
  const [form] = Form.useForm();
    const dispatch = useDispatch();

  useEffect(() => {
    console.log("data updata: ", data, isAddDomain)
    form.setFieldsValue({
      domanName: data?.domanName || "",
      ipAddress: data?.ipAddress || "",
      vietelActive: data?.viettel?.active||null,
      mobileActive: data?.mobile?.active||null,
      vinaActive: data?.vina?.active||null,
      description: data?.description||"",
    });

  }, [data, isAddDomain]);

  const handleCancel = () => {
    setOpenmodal(false);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Perform update action with values
        const dataUpdate = {
            "domanName": values?.domanName,
            "ipAddress": values?.ipAddress||"",
            "active": null,
            "description": "",
            "viettel": {
                "active": values?.vietelActive||null,
                "description":"",
            },
            "mobile": {
                "active": values?.mobileActive||null,
                "description": "",
            },
            "vina": {
                "active":values?.vinaActive||null,
                "description": "",
            },
        }
        if(isAddDomain){
        console.log('Form values update:', dataUpdate);
            
            dispatch(addDomainAction(DOMAIN+updateDomain, dataUpdate ))
        }else{
            if(values?.domanName !== data?.domanName){
                dispatch(UpdateDomainAction(DOMAIN+updateDomain, data?.id, dataUpdate ))
            }
        }
        setOpenmodal(false);
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };



  return (
    <Modal
      title={isAddDomain == true? "Add new domain":"Edit Domain"}
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
          domanName: data?.domanName,
          ipAddress: data?.ipAddress,
          vietelActive: data?.viettel?.active,
          mobileActive: data?.mobile?.active,
          vinaActive: data?.vina?.active,
          description: data?.description,
        }}
      >
        <Form.Item
          name="domanName"
          label="Domain Name"
          rules={[{ required: true, message: 'Please enter domain name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ipAddress"
          label="IP Address"
        //   rules={[{ required: true, message: 'Please enter IP address' }]}
        >
        
          <Input disabled={true}/>
        </Form.Item>
        <Form.Item
          name="vietelActive"
          label="Viettel"
          valuePropName="checked"
        >
          <Switch disabled={true}/>
        </Form.Item>
        <Form.Item
          name="mobileActive"
          label="Mobile"
          valuePropName="checked"
        >
          <Switch disabled={true}/>
        </Form.Item>
        <Form.Item
          name="vinaActive"
          label="Vina"
          valuePropName="checked"
        >
          <Switch disabled={true} />
        </Form.Item>
        <Form.Item
          name="description"
          label="Check-in Time"
        >
          <Input disabled={true}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalEditForm;
