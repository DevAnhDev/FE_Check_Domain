import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteDomainAction } from '../../redux/action/domainAction';
import { DOMAIN, deletelDomain, deletelTelegram, getAllTelegram } from '../../constans/endpoint';
import { Table, Tag, Space, Empty, Input, Button } from 'antd';
import Message from '../../common/notifi';
import Modalconfirm from '../../common/ModalConfim';
import { DeleteTelegramAction, getAllTelegramAction } from '../../redux/action/telegramAction';
import ModalEditFormTelegram from '../../common/formEditTelegram';

const ListTelegram = () => {
  const {data, isLoading, isLoadingAdd, isAdd, isUpdate, isDelete, isUpdateLoading , isDeleteLoading} = useSelector((state) => state.telegram);
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState("");
  const [newdata, setnewdata] = useState([]);
  const [openmodalForm, setOpenmodalForm] = useState(false);
  const [dataItemForm, setDataItemForm] = useState({});
  const { contextHolder, showMessage } = Message();
  const {contextHolderConfirm, confirm} = Modalconfirm();
  const [isAddTele, setisAddTele] = useState(true)
  const [first, setfirst] = useState(false)
  const columns = [
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Telegram ID',
      dataIndex: 'chatId',
      key: 'chatId',
    },

    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      render: (active) => (
        <Tag color={active ? "green" : "red"}>
          {active? "Active":"Blocked"}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" key={record.id}>
          <a
           onClick={() => 
          {
            setisAddTele(false)
            setDataItemForm(record);
            setOpenmodalForm(true);
          }
          }>Edit</a>
        
          <a 
          onClick={() =>{
            confirm(`Confirm delete!`, `Are you want delete telegram: ${record?.userName}?`,() => handleDelete(record?.id))
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
    dispatch(DeleteTelegramAction(DOMAIN+deletelTelegram, id))
  }
  useEffect(() => {
    console.log("loading data.....");
    dispatch(getAllTelegramAction(DOMAIN+getAllTelegram));
    setfirst(true)
  }, []);

  useEffect(() => {
    if (searchText.trim() !== "") {
      const dataFilter = data.filter((item) =>
        item?.userName?.toLowerCase()?.includes(searchText.toLowerCase())
      );
      setnewdata(dataFilter);
    } else {
      setnewdata(data);
    }
  }, [searchText, isLoading, data]);

  useEffect(() => {
    if(first && isLoading){
      if(isAdd === true && !isLoadingAdd){
        showMessage('Create successful!', 'success');
        dispatch(getAllTelegramAction(DOMAIN+getAllTelegram));
      }
      if(isAdd === false && !isLoadingAdd){
        showMessage('Create Failed!', 'error');
      } 
    }
  }, [isAdd])

  useEffect(() => {
    if(isLoading &&first){
      if(isUpdate === true && !isUpdateLoading){
        showMessage('Update successful!', 'success');
        dispatch(getAllTelegramAction(DOMAIN+getAllTelegram));
      }
      if(isUpdate === false && !isUpdateLoading){
        showMessage('Update Failed!', 'error');
      }
      }
  }, [isUpdate])


  useEffect(() => {
    if(isLoading && first){
      if(isDelete && !isDeleteLoading){
        showMessage('Delete successful!', 'success');
        console.log(isLoading, "cscks1233", isDelete ,isDeleteLoading)

        dispatch(getAllTelegramAction(DOMAIN+getAllTelegram));
      }
      if(!isDelete && !isDeleteLoading){
        showMessage('Delete Failed!', 'error');
      }
    }
    console.log(isLoading, "cscks", isDelete ,isDeleteLoading)
  }, [isDelete])



  const handleChange = (e) => {
    setsearchText(e.target.value);
  };

  const handleAdd = ()=>{
    setisAddTele(true)
    setDataItemForm({});
    setOpenmodalForm(true);
  }



  return (
    <div>
      <h2>List Telegram</h2>
      <div className='searchButtonCusttom'>
      <Button onClick={handleAdd}>Add Telegram</Button>
        <Input
          style={{ width: 200, marginBottom: 16 }}
          placeholder="Search by user name"
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
      <ModalEditFormTelegram openmodal={openmodalForm} setOpenmodal={setOpenmodalForm} data={dataItemForm} isAddDomain={isAddTele}/>
    </div>
  );
};
export default ListTelegram;
