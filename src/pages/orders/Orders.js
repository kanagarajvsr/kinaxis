import Datatable from "../../components/datatable/Datatable";
import { Columns, Rows } from "../../jsonData/transactionData";
import "./orders.scss"; 

function Orders() {
  return (
    <div className="listContainer">
    <Datatable columns={Columns} rows={Rows} pageName="Latest Transactions" />
</div>
  )
}

export default Orders