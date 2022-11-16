import "./tableS.scss";
import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./DataS";
import { Link } from "react-router-dom";
import { GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react'
import ModalNewSedes from "./ModalNewS/ModalNewS";
//import ModalEditUsers from "./modaleditusers/ModalEditUsers";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios";

const URI = 'http://localhost:8000/sedes/'


const TableS = () => {
  const [sedes, setSedes] = useState([])
 
  useEffect(() => {
    getSedes()
  }, [])

  const getSedes = async () => {
    const res = await axios.get(URI)
    setSedes(res.data)
  }

  const deleteSedes= async (id) => {
    const res = await axios.delete(`${URI}${id}`)
    getSedes(res.data)
    console.log(res.data)
  }


  const actionColumn = [
    {
      field: "opciones",
      headerName: "Opciones",
      width: 330,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton"><VisibilityIcon /></div>
            </Link>

            <Link to={`edit/${params.id}`}>
              <div className="EditButton">
                <EditIcon />
              </div>
            </Link>

            <div className="cellAction">

              <div
                className="deleteButton"
                onClick={() => deleteSedes(params.id)}
              >
                <DeleteIcon />
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>

      <div className="Tabledata">

        <div className="dataTitle">
          Inventario Oficina de de abastecimiento

          <ModalNewSedes />
        </div>
        <DataGrid
          className="datagrid"
          rows={sedes}
          columns={userColumns.concat(actionColumn)}
          pageSize={12}
          rowsPerPageOptions={[5]}
          //checkboxSelection
          components={{
            Toolbar: GridToolbar,
          }}
          //loading
          {...sedes}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </>
  );
};

export default TableS;
