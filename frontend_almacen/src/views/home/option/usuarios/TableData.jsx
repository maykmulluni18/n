import "./tabladata.scss";
import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./DataS";
import { Link } from "react-router-dom";
import { GridToolbar } from '@mui/x-data-grid';
import axios from 'axios'
import { useState, useEffect } from 'react'
import ModalNewUsers from "./modalnewusers/ModalNewUsers";
//import ModalEditUsers from "./modaleditusers/ModalEditUsers";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const URI = 'http://localhost:8000/user/'


const TableData = () => {
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    getUsuarios()
  }, [])

  const getUsuarios = async () => {
    const res = await axios.get(URI)
    setUsuarios(res.data)
  }

  const deleteUsuarios = async (id) => {
    const res = await axios.delete(`${URI}${id}`)
    getUsuarios(res.data)
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
                onClick={() => deleteUsuarios(params.id)}
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
          <ModalNewUsers />
        </div>
        <DataGrid
          className="datagrid"
          rows={usuarios}
          columns={userColumns.concat(actionColumn)}
          pageSize={12}
          rowsPerPageOptions={[5]}
          //checkboxSelection
          {...usuarios}
          components={{
            Toolbar: GridToolbar,
          }}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </>
  );
};

export default TableData;
