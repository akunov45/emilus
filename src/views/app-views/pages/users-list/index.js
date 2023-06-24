import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Spin, Table, Tooltip, message } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from 'store/slices/usersSlice';

const UserList = () => {
  const { usersData, status, error } = useSelector(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUsers())

  }, [dispatch])

  const tableColumns = [
    {
      title: 'UserName',
      dataIndex: 'name',
      render: (_, record, i) => (
        <div className="d-flex">
          <AvatarStatus src={`/img/avatars/thumb-${i + 1}.jpg`} name={record.name} subTitle={record.email} />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (_, record) => (
        <div className="">
          <div>st: {record.address.street}</div>
          <div>city: {record.address.city}</div>
        </div>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      render: phone => (
        <span> {phone} </span>
      ),
    },
    {
      title: 'Website',
      dataIndex: 'website',
      render: status => (
        <a href='!#'> {status} </a>
      ),
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right d-flex justify-content-end">
          <Tooltip title="Edit">
            <Button type="primary" className="mr-2" icon={< EditOutlined />} onClick={() => {
              navigate(`/app/pages/edit-user/${elm.id}`)
            }} size="small" />
          </Tooltip>
        </div>
      )
    }
  ];
  if (error) {
    message.error({ content: `${error}!`, duration: 4 });
  }

  return (
    <Card bodyStyle={{ 'padding': '0px' }}>
      <div className="table-responsive">
        {status === 'loading' ? <Spin /> :
          <Table columns={tableColumns} dataSource={usersData} rowKey='id' />
        }
      </div>
    </Card>
  )
}

export default UserList