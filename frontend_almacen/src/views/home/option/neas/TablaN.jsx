import "./tabladata.scss";
import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./DataN";
import { Link } from "react-router-dom";
import { GridToolbar } from '@mui/x-data-grid';
import axios from 'axios'
import { useState, useEffect } from 'react'
//import ModalNewUsers from "./modalnewusers/ModalNewUsers";
//import ModalEditUsers from "./modaleditusers/ModalEditUsers";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModalNewNeas from "./ModalNewNeas/ModalNewNeas";

const URI = 'http://localhost:8000/neas/'


const TableN = () => {

    const [neas, setNeas] = useState([])
    useEffect(() => {
        getNeas()
    }, [])

    const getNeas = async () => {
        const res = await axios.get(URI)
        setNeas(res.data)
        console.log(res.data)
    }

    const deleteNeas = async (id) => {
        const res = await axios.delete(`${URI}${id}`)
        getNeas(res.data)
        //console.log(res.data.binene)
    }


    const actionColumn = [
        {
            field: "opciones",
            headerName: "Opciones",
            width: 200,
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
                                onClick={() => deleteNeas(params.id)}
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
                    <ModalNewNeas/>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={neas}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={18}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    
                    experimentalFeatures={{ newEditingApi: true }}

                    //checkboxSelection
                    {...neas}
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
export default TableN;
