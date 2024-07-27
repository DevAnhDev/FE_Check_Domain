import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

//   const data = [
//     {
//       id: 5,
//       domainName: "facebook.com",
//       ipAddress: "157.240.199.35",
//       active: true,
//       description: "08:34:35 29/06/2024",
//       viettel: {
//         id: 4,
//         active: false,
//         description: "day la detail",
//         domainName: null,
//         ipAddress: null,
//         netWork: null
//       },
//       mobile: {
//         id: 1,
//         active: true,
//         description: "trung day ne",
//         domainName: null,
//         ipAddress: null,
//         netWork: null
//       },
//       vina: {
//         id: 1,
//         active: false,
//         description: "10:43:01 27/06/2024",
//         domainName: null,
//         ipAddress: null,
//         netWork: null
//       }
//     }
//   ];

const App = () => <Table columns={columns} dataSource={data} />;


