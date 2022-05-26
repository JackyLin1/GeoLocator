import React, {useState} from "react";
import './History.css'
import {Button, Table} from 'antd';

export default function HistoryList (props) {

  const columns = [
    {
      title: 'address',
      dataIndex: 'address'
    },
    {
      title: 'Latitude',
      dataIndex: 'lat'
    },
    {
      title: 'Longitude',
      dataIndex: 'lng'
    },
  ]

  const data = [];

  for (let entry of props.history) {
    data.push({
      key: props.history.indexOf(entry),
      address: entry.address,
      lat: entry.lat,
      lng: entry.lng,
    })
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const Delete = () => {
    console.log(selectedRowKeys)
  }
  const onSelectChange = (newSelectedRowKeys) => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" disabled={!hasSelected} onClick={Delete}>
          Delete Selected
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}