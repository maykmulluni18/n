import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./DataP";
import { Link } from "react-router-dom";
import { GridToolbar } from '@mui/x-data-grid';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModalNewPedidos from './modalnew/ModalNewP';
import "./tableP.scss"

const URI = 'http://localhost:8000/pedidos/'


const TableP = () => {

    const [pedidos, setPedidos] = useState([])
    useEffect(() => {
        getPedidos()
    }, [])

    const getPedidos = async () => {
        const res = await axios.get(URI)
        setPedidos(res.data)
        console.log(res.data)
    }


    const deletePedidos = async (id) => {
        const res = await axios.delete(`${URI}${id}`)
        //console.log(res.data.binene)
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
                                onClick={() => deletePedidos(params.id)}
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
                    <ModalNewPedidos/>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={pedidos}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={18}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    
                    experimentalFeatures={{ newEditingApi: true }}

                    //checkboxSelection
                    {...pedidos}
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

export default TableP;
