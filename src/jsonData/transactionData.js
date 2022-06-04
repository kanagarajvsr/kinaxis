 
export const Columns = [
    { field: "id", headerName: "Tracking ID", width: 100 },
    { field: "product", headerName: "Product Name", width: 220 },
    {
      field: "customer",
      headerName: "Customer",
      width: 220
    },
    {
      field: "date",
      headerName: "Date",
      width: 100,
    },
  
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "method",
      headerName: "Payment Method",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 80,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
 
    export const Rows = [
      {
        id: 1143155,
        product: "Acer Nitro 5",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
      },
      {
        id: 2235235,
        product: "Playstation 5",
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
        method: "Online Payment",
        status: "Pending",
      },
      {
        id: 2342353,
        product: "Redragon S101",
        customer: "John Smith",
        date: "1 March",
        amount: 35,
        method: "Cash on Delivery",
        status: "Pending",
      },
      {
        id: 2357741,
        product: "Razer Blade 15",
        customer: "Jane Smith",
        date: "1 March",
        amount: 920,
        method: "Online",
        status: "Approved",
      },
      {
        id: 2342355,
        product: "ASUS ROG Strix",
        customer: "Harold Carol",
        date: "1 March",
        amount: 2000,
        method: "Online",
        status: "Pending",
      },
    ];