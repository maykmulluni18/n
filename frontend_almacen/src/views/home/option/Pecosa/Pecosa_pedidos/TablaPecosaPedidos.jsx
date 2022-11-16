import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./DataPecosaPedidos";
import { Link } from "react-router-dom";
import { GridToolbar } from '@mui/x-data-grid';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./TablaPecosaPedidos.scss"


const URI = 'http://localhost:8000/pecosapedidos/'


const TablaPecosaPedidos = () => {

    const [pecosapedidos, setPecosaPedidos] = useState([])
    useEffect(() => {
        getPecosaPedidos()
    }, [])

    const getPecosaPedidos = async () => {
        const res = await axios.get(URI)
        setPecosaPedidos(res.data)
    }


    const deletePecosaPedidos = async (id) => {
        const res = await axios.delete(`${URI}${id}`)
        getPecosaPedidos(res.data)
    }


    const actionColumn = [
        {
            field: "opciones",
            headerName: "Opciones",
            width: 150,
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
                                onClick={() => deletePecosaPedidos(params.id)}
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
                    <Link to={'created-pecosa-pedidos'}>
                        <div className="CrearButton">
                            <button>Crear</button>
                        </div>
                    </Link>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={pecosapedidos}
                    //getRowId={(row) => (row.id, row.neaEntradaId, row.bineneId)}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={18}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                    //checkboxSelection
                    {...pecosapedidos}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    //experimentalFeatures={{ newEditingApi: true }}
                    localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                />
            </div>


        </>
    );

};

export default TablaPecosaPedidos;
