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
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);

    const index = props.history.map(obj => obj.key).indexOf(selectedRowKeys)
    for (let i = 0; i < props.history.length; i++) {

      console.log('index',index)

      if (props.history[i].key === selectedRowKeys[i]) {
        props.history.splice(props.history.map(obj => obj.key).indexOf(selectedRowKeys), 1)
        }
      
      // props.marker[key].visible = false;
      console.log('history', props.history)
      console.log(selectedRowKeys)
    }  
  }

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
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
        <Button type="submit" disabled={!hasSelected} onClick={Delete} loading={loading}>
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