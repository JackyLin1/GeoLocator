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

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const Delete = () => {
    for (let key of selectedRowKeys) {
      props.history.splice(key,1)
      console.log(props.history)
      // props.setMarker()
    }
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
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
        <Button type="submit" disabled={!hasSelected} onClick={()=>Delete()} loading={loading}>
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
      <Table rowSelection={rowSelection} columns={columns} dataSource={[...props.history]} />
    </div>
  )
}