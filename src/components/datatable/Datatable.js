import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = (props) => {
  const [data, setData] = useState(props.rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={props.link} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              data-testid="delete-id"
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      {
         props.pageName &&
          <div className="datatableTitle">
            { props.pageName} 
          </div>
      }
      <DataGrid
        className="datagrid"
        rows={data}
        columns={props.actionType?props.columns.concat(actionColumn):props.columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
