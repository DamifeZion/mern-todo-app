import { useMediaQuery } from "@mui/material"

import PCDashboard from "./PCDashboard"
import MobileDashboard from './MobileDashboard'


const Dashboard = () => {
  const isSmall = useMediaQuery('(max-width: 1025px)')

  return (
    <div>
      {isSmall ? <MobileDashboard/> : <PCDashboard />}
    </div>
  )
}

export default Dashboard