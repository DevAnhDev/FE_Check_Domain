import React, { useEffect } from 'react';
import { Modal } from 'antd';

const ModalDetail = ({ openmodal, setOpenmodal, data }) => {
  // useEffect(() => {
  //   console.log("Data in Modal:", data);
  // }, [data]);

  return (
    <Modal
      title="Domain Detail"
      centered
      visible={openmodal}
      onOk={() => setOpenmodal(false)}
      onCancel={() => setOpenmodal(false)}
    >
      <p><strong>Domain Name:</strong> {data?.domanName}</p>
      <p><strong>IP Address:</strong> {data?.ipAddress}</p>
      <p><strong>Viettel:</strong> {data?.viettel?.active ? "Active" : "Blocked"}</p>
      <p><strong>Mobile:</strong> {data?.mobile?.active ? "Active" : "Blocked"}</p>
      <p><strong>Vina:</strong> {data?.vina?.active ? "Active" : "Blocked"}</p>
      <p><strong>Check-in Time:</strong> {data?.description}</p>
    </Modal>
  );
};

export default ModalDetail;
