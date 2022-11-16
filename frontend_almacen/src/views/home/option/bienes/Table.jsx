import "./tableB.scss";
import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./Data";
import { Link } from "react-router-dom";
import { GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react'
//import ModalEditUsers from "./modaleditusers/ModalEditUsers";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios";

const URI = 'http://localhost:8000/bienes/'


const Table = () => {
  const [bienes, setBienes] = useState([])

  useEffect(() => {
    getBienes()
  }, [])

  const getBienes = async () => {
    const res = await axios.get(URI)
    setBienes(res.data)
  }

  const deleteBienes = async (id) => {
    const res = await axios.delete(`${URI}${id}`)
    getBienes(res.data)
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
                onClick={() => deleteBienes(params.id)}
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
          <Link to={'created-bienes'}>
            <div className="CrearButton">
              <button>Crear</button>
            </div>
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={bienes}
          columns={userColumns.concat(actionColumn)}
          pageSize={12}
          rowsPerPageOptions={[5]}
          //disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          components={{ Toolbar: GridToolbar }}
          {...bienes}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </>
  );
};

export default Table;
