import './App.css'
import { RevenueCard, SimpleCard } from './components/RevenueCard'
import Sidebar from './components/SideBar'
import DataTable from './components/Table'
import { TopBar } from './components/TopBar'
import { Transaction } from './components/Transaction'

function App() {

  return (
    <div className='flex'>
      <div>
        <Sidebar/>
      </div>
      <div className='grid'>
          <TopBar/>
        <div className='grid grid-cols-1 w-sm items-start md:grid-cols-2 md:min-w-3xl lg:grid-cols-3 lg:min-w-6xl'>
          <RevenueCard title={"Next Payout"} amount={"2,312.23"} orderCount={"23"}/>
          <SimpleCard title={"Amount Pending"} amount={"93,312.20"} orderCount={"13"}/>
          <SimpleCard title={"Amount Processed"} amount={"23,92,312.19"}/>
        </div>
          <Transaction/>
          <DataTable/>
      </div>
    </div>
  )
}

export default App
