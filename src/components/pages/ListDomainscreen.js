import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteDomainAction, getAllDomainAction } from '../../redux/action/domainAction';
import { DOMAIN, deletelDomain, getAllDomain } from '../../constans/endpoint';
import { Table, Tag, Space, Empty, Input, Button } from 'antd';
import ModalDetail from '../../common/modal';
import ModalEditForm from '../../common/formEditDomain';
import Message from '../../common/notifi';
import Modalconfirm from '../../common/ModalConfim';

const ListDomain = () => {
  const {isScan, isScanLoading,isAddNew, data, isLoading, isUpdate, isDelete, isLoadingUpdate, isLoadingAddnew, isLoadingDelete } = useSelector((state) => state.domain);
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState("");
  const [newdata, setnewdata] = useState([]);
  const [openmodal, setOpenmodal] = useState(false);
  const [openmodalForm, setOpenmodalForm] = useState(false);
  const [dataItem, setDataItem] = useState({});
  const [dataItemForm, setDataItemForm] = useState({});
  const { contextHolder, showMessage } = Message();
  const {contextHolderConfirm, confirm} = Modalconfirm();
  const [isAddDomain, setisAddDomain] = useState(true)
  const [first, setfirst] = useState(false)
  const columns = [
    {
      title: 'Domain Name',
      dataIndex: 'domanName',
      key: 'domanName',
    },
    {
      title: 'IP Address',
      dataIndex: 'ipAddress',
      key: 'ipAddress',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      render: (active) => (
        <Tag color={active ? "green" : "red"}>
          {active === true ? "Active": active === false? "Blocked": "Pending"}
        </Tag>
      ),
    },
    {
      title: 'Check-in Time',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Viettel',
      key: 'viettel',
      render: (_, record) => (
        <Tag color={record?.viettel?.active ? "green" : "red"}>
          {record?.viettel?.active ? "Active" : "Blocked"}
        </Tag>
      ),
    },
    {
      title: 'Mobile',
      key: 'mobile',
      render: (_, record) => (
        <Tag color={record?.mobile?.active ? "green" : "red"}>
          {record?.mobile?.active ? "Active" : "Blocked"}
        </Tag>
      ),
    },
    {
      title: 'Vina',
      key: 'vina',
      render: (_, record) => (
        <Tag color={record?.vina?.active ? "green" : "red"}>
          {record?.vina?.active ? "Active" : "Blocked"}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" key={record.id}>
          <a onClick={() => 
          {
            setDataItem(record);
            setOpenmodal(true);
          }
          }>Detail</a>
          <a
           onClick={() => 
          {
            setisAddDomain(false)
            setDataItemForm(record);
            setOpenmodalForm(true);
          }
          }>Edit</a>
        
          <a 
          onClick={() =>{
            confirm(`Confirm delete!`, `Are you want delete domain: ${record?.domanName}?`,() => handleDelete(record?.id))
          }}
          >Delete</a>
        </Space>
      ),
    },
  ];

  const locale = {
    emptyText: (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="No Record!!!"
      />
    ),
  };

  const handleDelete = (id)=>{
    dispatch(DeleteDomainAction(DOMAIN+deletelDomain, id))
  }

  useEffect(() => {
    console.log("loading data.....");
    dispatch(getAllDomainAction(DOMAIN+getAllDomain));
    setfirst(true)
    
  }, []);

  useEffect(() => {
    if (searchText.trim() !== "") {
      const dataFilter = data.filter((item) =>
        item?.domanName?.toLowerCase()?.includes(searchText.toLowerCase())
      );
      setnewdata(dataFilter);
    } else {
      setnewdata(data);
    }
  }, [searchText, isLoading, data]);

  useEffect(() => {
    if(isLoading === true && first){
      if(isUpdate === true && !isLoadingUpdate){
        showMessage('Update successful!', 'success');
        dispatch(getAllDomainAction(DOMAIN+getAllDomain));
      }
      if(isUpdate === false && !isLoadingUpdate){
        showMessage('Update Failed!', 'error');
      }
      }
  }, [isUpdate])
  
  useEffect(() => {
    if(isLoading === true  && first){
      if(isDelete && !isLoadingDelete){
        showMessage('Delete successful!', 'success');
        dispatch(getAllDomainAction(DOMAIN+getAllDomain));
      }
      if(!isDelete && !isLoadingDelete){
        showMessage('Delete Failed!', 'error');
      }
    }


  }, [isDelete])
  
  useEffect(() => {
    if(isLoading === true && first){
      if(isAddNew && !isLoadingAddnew){
        showMessage('Create successful!', 'success');
        dispatch(getAllDomainAction(DOMAIN+getAllDomain));
      }
      if(!isAddNew && !isLoadingAddnew){
        showMessage('Create Failed!', 'error');
      }
    }
  }, [isAddNew])

  useEffect(() => {
      // console.log("status domain: ",isScan, isScanLoading, isLoading )
      if(isScan === true && !isScanLoading && isLoading === null){
        showMessage("Scan domain Success!!", "success")
      }
  }, [])

  const handleChange = (e) => {
    setsearchText(e.target.value);
  };

  const handleAdd = ()=>{
    setisAddDomain(true)
    setDataItemForm({});
    setOpenmodalForm(true);

  }



  return (
    <div>
      <h2>List Domain</h2>
      <div className='searchButtonCusttom'>
      <Button onClick={handleAdd}>Add Domain</Button>
        <Input
          style={{ width: 200, marginBottom: 16 }}
          placeholder="Search by Domain Name"
          value={searchText}
          onChange={handleChange}
        />
      </div>
      <Table
        locale={locale}
        columns={columns}
        dataSource={newdata.map(item => ({ ...item, key: item.id }))}
      />

      {contextHolder}
      {contextHolderConfirm}
      <ModalDetail openmodal={openmodal} setOpenmodal={setOpenmodal} data={dataItem} />
      <ModalEditForm openmodal={openmodalForm} setOpenmodal={setOpenmodalForm} data={dataItemForm} isAddDomain={isAddDomain}/>
    </div>
  );
};
export default ListDomain;
