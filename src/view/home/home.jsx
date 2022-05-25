import { useNavigate } from 'react-router-dom'
import { Table } from 'antd'
export default function Home() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
  ]
  const data = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]
  return (
    <div>
      <h1>home</h1>
      <button onClick={goBack}>后退</button>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  )
}
