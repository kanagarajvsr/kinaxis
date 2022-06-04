import Widget from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Datatable from "../../components/datatable/Datatable";
import { Columns, Rows } from "../../jsonData/transactionData";
import { widgets, charts } from "../../jsonData/dashboardData";
import "./dashboard.scss"; 
import { useEffect, useState } from "react";


const Dashboard = () => {
  const [filter,setFilter] = useState(6);
  const [chartData,setChartData] = useState(6);

  useEffect(()=>{
    setChartData(charts.slice(0,filter));
  },[filter])
 
  return (
    <div  className="dashboard">
      <div className="widgets">
        <Widget data={ widgets.user} />
        <Widget data={ widgets.order} />
        <Widget data={ widgets.earning} />
        <Widget data={ widgets.balance} />
      </div>
      <div className="charts">
          <Featured />
          <div className="chart">
          <div className="title">Last {filter} Months (Revenue)  
            <select data-testid="select-id" className="select" value={filter} label="Age" onChange={(e)=>setFilter(e.target.value)} >
              <option value={3}>Last 3 Months (Revenue)</option>
              <option value={6}>Last 6 Months (Revenue)</option>
              <option value={12}>Last 12 Months (Revenue)</option>
            </select>
           </div>
          <Chart  data={chartData} aspect={2 / 1} />
          </div>
      </div>
      <div className="listContainer">
          <Datatable columns={Columns} rows={Rows} pageName="Latest Transactions" />
      </div>
    </div>
  )
}

export default Dashboard;