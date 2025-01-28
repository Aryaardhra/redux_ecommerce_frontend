import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";
import { useSelector } from "react-redux";

import UserStatus from "./UserStatus";
import { Bar } from "react-chartjs-2"
import { useGetUserStatusQuery } from "../../../../redux/features/status/StatusApi";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


const UserDMain = () => {

  const { user } = useSelector((state) => state.auth);
  const { data : status, error, isLoading} = useGetUserStatusQuery(user?.email)
 // console.log(data);

  if(isLoading) return <div className='text-center text-gray-500'>Loading...</div>
  if(!status) {
    return <div className='text-center text-gray-500'>No data available.</div>
}

const data = {
  labels : ["Total Payments", "Total Reviews", "Total Purchased Products"],
  datasets : [
    {
      label : "User Status",
      data: [status.totalPayments, status.totalReviews *100, status.totalPurchasedProducts *100],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor:'rgba(75, 192, 192, 1)',
                borderWidth: 1,
    }
  ]
}

const options= {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
     callbacks: {
      label: function (tooltipItem) {
         
          return `${tooltipItem.label}: ${tooltipItem.raw}`
      }
     }
    }
  }
}

  return (
    <div className='p-6'>
    <div>
        <h1 className='text-2xl font-semibold mb-4'>User Dashboard</h1>
        <p className='text-gray-500'>Hi, {user?.username}! Welcome to your user dashboard</p>
    </div>
    <UserStatus status={status}/>
    <div className='mb-6'>
        <Bar data={data} options={options}/>
    </div>
</div>
  )
}

export default UserDMain