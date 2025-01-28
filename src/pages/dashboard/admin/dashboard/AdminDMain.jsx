import { useSelector } from "react-redux";
import { useGetAdminStatusQuery } from "../../../../redux/features/status/StatusApi";
import AdminStatus from "./AdminStatus";
import AdminStausChart from "./AdminStausChart";

const AdminDMain = () => {

  const { user } = useSelector((state) => state.auth);
  const {data : status, error, isLoading } = useGetAdminStatusQuery();

  if (isLoading) return <div>Loading...</div>
  if (!status) return <div>No Status Found!</div>
  if (error) return <div>Failed to load status...</div>
  return (
    <div className='p-6'>
    <div>
        <h1 className='text-2xl font-semibold mb-4'>Admin Dashboard</h1>
        <p className='text-gray-500'>Hi, {user?.username}! Welcome to the admin dashboard.</p>
        
        <AdminStatus status={status}/>
        <AdminStausChart status={status}/>
    </div>
</div>
  )
}

export default AdminDMain