import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./DataNeasBienes";
import { Link } from "react-router-dom";
import { GridToolbar } from '@mui/x-data-grid';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./TablaNeasBienes.scss"


const URI = 'http://localhost:8000/neasbienes/'


const TablaNeasBienes = () => {

    const [neasbienes, setNeasBienes] = useState([])
    useEffect(() => {
        getNeasBienes()
    }, [])

    const getNeasBienes = async () => {
        const res = await axios.get(URI)
        setNeasBienes(res.data)
        console.log(res.data.id)
    }


    const deleteNeasBienes = async (id) => {
        const res = await axios.delete(`${URI}${id}`)
        getNeasBienes(res.data)
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
                                onClick={() => deleteNeasBienes(params.id)}
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
                    <Link to={'created-neas-bienes'}>
                        <div className="CrearButton">
                            <button>Crear</button>
                        </div>
                    </Link>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={neasbienes}
                    //getRowId={(row) => (row.id, row.neaEntradaId, row.bineneId)}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={18}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick

                    experimentalFeatures={{ newEditingApi: true }}

                    //checkboxSelection
                    {...neasbienes}
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

export default TablaNeasBienes;
