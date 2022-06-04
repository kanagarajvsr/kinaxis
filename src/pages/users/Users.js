import "./users.scss" 
import Datatable from "../../components/datatable/Datatable";
import { userColumns, userRows } from "../../jsonData/UserData";


const List = () => {
  return (
    <div className="list">
       <div className="listContainer">
         <Datatable columns={userColumns} rows={userRows} pageName="Users" actionType={true} link="/userdetail"/>
      </div>
    </div>
  )
}

export default List