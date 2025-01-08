import React from 'react'
import CardDashboard from '@/components/global/card-dashboard'
import Chart from '@/components/global/chart'
import {Trackprogress} from '@/components/global/track-progress'
import CreateTask from '@/components/global/CreateTask'
type Props = {}

const DashboardPage = () => {
    return (
    <div> 
        <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex ites=ms-center border-b'>Dashboard</h1>
        <div className='flex flex-row gap-6 py-4 px-4 ' >         
           <CreateTask/>
        </div>
        <div className='  flex flex-row gap-8'> 
        <div className='h-96 w-96'>
          <Chart/>
        </div>
        <div className='h-96 w-96'>
          <Trackprogress/>
        </div>
        </div>
     </div>
      )
}



export default DashboardPage
