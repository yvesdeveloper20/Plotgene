import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { name: 'Total Sales', value: '$24,567.89', change: '+12%', changeType: 'increase' },
    { name: 'Orders', value: '1,234', change: '+5.4%', changeType: 'increase' },
    { name: 'Products', value: '156', change: '+3.2%', changeType: 'increase' },
    { name: 'Customers', value: '2,345', change: '-2.1%', changeType: 'decrease' },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', date: '2023-04-15', amount: '$149.99', status: 'Completed' },
    { id: 'ORD-002', customer: 'Jane Smith', date: '2023-04-14', amount: '$89.99', status: 'Processing' },
    { id: 'ORD-003', customer: 'Robert Johnson', date: '2023-04-14', amount: '$199.99', status: 'Shipped' },
    { id: 'ORD-004', customer: 'Emily Davis', date: '2023-04-13', amount: '$249.99', status: 'Completed' },
    { id: 'ORD-005', customer: 'Michael Wilson', date: '2023-04-13', amount: '$79.99', status: 'Processing' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
                <div className={`mt-2 flex items-baseline ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                  <span className="text-sm font-medium">
                    {stat.change} from last month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-blue-100 text-blue-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-gold-600 hover:text-gold-900">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
