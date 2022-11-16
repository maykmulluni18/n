import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import Autocomplete from '@mui/material/Autocomplete';
import { Select as MultiSelect } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';


//import Select from '@mui/material/Select';
//import MenuItem from '@mui/material/MenuItem';
//import InputLabel from '@mui/material/InputLabel';

import "./modalneas.scss"

const URI = 'http://localhost:8000/neas/'

const URI1 = 'http://localhost:8000/bienes/'

const URI2 = 'http://localhost:8000/user/'

const URI3 = 'http://localhost:8000/sedes/'

/*Estilos de modal*/
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(4),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(12),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    className='close'
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 14,
                        top: 14,

                        color: (theme) => theme.palette.grey[700],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


const ModalNewNeas = () => {
    /*Definiendo el formulario del modal*/
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false)
    }

    const [bienes, setBienes] = useState([])
    const getBienes = async () => {
        const res = await axios.get(URI1)
        setBienes(res.data)
    }

    const [usuarios, setUsuarios] = useState([])
    const getUsuarios = async () => {
        const res = await axios.get(URI2)
        setUsuarios(res.data)
    }

    const [sedes, setSedes] = useState([])
    const getSedes = async () => {
        const res = await axios.get(URI3)
        setSedes(res.data)
    }

    const [neas, setNeas] = useState([])

    useEffect(() => {
        getBienes();
        getUsuarios();
        getSedes();
        Neas();
    }, [])


    const [idbienes, setIdbienes] = useState('')
    const [almacen, setAlmacen] = useState('')
    const [precio_unitario, setPrecioUnitario] = useState('')
    const [precio_total, setPrecioTotal] = useState('')
    const [sedes_idsedes, setSedesIdSedes] = useState('')
    const [usuarios_idusuarios, setUsuariosIdUsuarios] = useState('')
    const [fecha_de_entrega, setFechaDeEntrega] = useState('')
    const navigate = useNavigate()
    const Neas = async (e) => {
        e.preventDefault();
        setIdbienes("");
        setAlmacen("");
        setPrecioUnitario("");
        setPrecioTotal("");
        setSedesIdSedes("");
        setUsuariosIdUsuarios("");
        setFechaDeEntrega("");
        const respon = await axios.post(URI, {
            idbienes: idbienes,
            almacen: almacen,
            precio_unitario: precio_unitario,
            precio_total: precio_total,
            sedes_idsedes: sedes_idsedes,
            usuarios_idusuarios: usuarios_idusuarios,
        })

        if (respon.status === 200) {
            Swal.fire(
                {
                    title: 'Creado con Exito..',
                    // text: 'Presione Clik para cerrar!',
                    icon: 'success',
                    timer: 5500
                }
            )

            handleClose()

        } else {
            Swal.fire(
                {
                    title: 'Error!',
                    // text: 'Presione Clik para cerrar!',
                    icon: 'error',
                    timer: 5500
                }
            )
        }

        navigate('/neas')

    }

    const handleChange = (event) => {
        setIdbienes(event.target.value);
        //  setValue(event.target.value);
    };


    /*Calenadrio modal*/
    return (
        <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Abrir
            </Button>

            <BootstrapDialog

                className="m"
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle
                    className="titlemodal"
                    id="customized-dialog-title"
                    onClose={handleClose}


                >
                    Agregar Inventariado
                </BootstrapDialogTitle>

                <div className="newinvent">
                    <div className="newconta">
                        <div className="bot">
                            <div className="newform">
                                <form onSubmit={Neas}>

                                    <div className="inpuntform">
                                        <label>Descripcion Bienes</label>

                                        <MultiSelect
                                            disabled
                                            className="complete"
                                            name="idbienes"
                                            value={idbienes}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value=' '> </MenuItem>
                                            {bienes.map((optios) => (
                                                <MenuItem key={optios.id} value={optios.id}>{optios.description}</MenuItem>

                                            ))}
                                        </MultiSelect>
                                    </div>

                                    <div className='inpuntfromm'>
                                        <label>Bienes</label>

                                        <input
                                            className="filter"
                                            type="text"
                                            list="data1"
                                            placeholder='filtrar'
                                            value={idbienes}

                                            onChange={handleChange} />
                                        <datalist className='datalistt' id="data1">
                                            
                                            {
                                                bienes
                                                    .slice(0, 10)
                                                    .map(res => {
                                                        return (
                                                            <option className='options' key={res.id} value={res.id}> {res.description} </option>
                                                        )
                                                    })
                                            }

                                        </datalist>
                                    </div>


                                    <div className="inpuntform">
                                        <label>Usuarios</label>

                                        <MultiSelect
                                            disabled
                                            className="complete"
                                            name='usuarios_idusuarios'
                                            value={usuarios_idusuarios}
                                            onChange={(e) => setUsuariosIdUsuarios(e.target.value)}
                                        >
                                            <MenuItem value=' '> </MenuItem>
                                            {usuarios.map((optios) => (
                                                <MenuItem key={optios.id} value={optios.id}>{optios.n_documento} - {optios.nombres}</MenuItem>

                                            ))}
                                        </MultiSelect>
                                    </div>

                                    <div className='inpuntfromm'>
                                        <label>Usuarios</label>

                                        <input
                                            className="filter"
                                            type="text" list="usuarios"
                                            placeholder='filtrar'
                                            value={usuarios_idusuarios}
                                            onChange={(e) => setUsuariosIdUsuarios(e.target.value)}
                                        />
                                        <datalist id="usuarios">
                                            {
                                                usuarios
                                                    .map(res => {
                                                        return (
                                                            <option key={res.id} value={res.id}> {res.nombres} </option>
                                                        )
                                                    })
                                            }

                                        </datalist>
                                    </div>

                                    <div className="inpuntform">
                                        <label>Sedes</label>

                                        <MultiSelect
                                            disabled
                                            className="complete"
                                            name='sedes_idsedes'
                                            value={sedes_idsedes}
                                            onChange={(e) => setSedesIdSedes(e.target.value)}
                                        >
                                            <MenuItem value=' '> </MenuItem>
                                            {sedes.map((optios) => (
                                                <MenuItem key={optios.id} value={optios.id}>{optios.sede}</MenuItem>

                                            ))}
                                        </MultiSelect>
                                    </div>

                                    <div className='inpuntfromm'>
                                        <label>Sedes</label>

                                        <input
                                            className="filter"
                                            type="text" list="sedes"
                                            placeholder='filtrar'
                                            value={sedes_idsedes}
                                            onChange={(e) => setSedesIdSedes(e.target.value)}
                                        />
                                        <datalist id="sedes">
                                            {
                                                sedes
                                                    .map(res => {
                                                        return (
                                                            <option key={res.id} value={res.id}> {res.sede} </option>
                                                        )
                                                    })
                                            }

                                        </datalist>
                                    </div>



                                    <div className="inpuntform">
                                        <label>Almacen</label>
                                        <input
                                            value={almacen}
                                            onChange={(e) => setAlmacen(e.target.value)}
                                            type="text"
                                            placeholder="Ingrese el almacen"
                                        />
                                    </div>
                                    <div className="inpuntform">
                                        <label>Precio Unitario</label>
                                        <input
                                            value={precio_unitario}
                                            onChange={(e) => setPrecioUnitario(e.target.value)}
                                            type="number"
                                            placeholder="Ingrese precio unitario"
                                        />
                                    </div>
                                    <div className="inpuntform">
                                        <label>Precio Total</label>
                                        <input
                                            value={precio_total}
                                            onChange={(e) => setPrecioTotal(e.target.value)}
                                            type="text"
                                            placeholder="Ingrese precio total"
                                        />
                                    </div>


                                    <div className="inpuntform">
                                        <label>Sede</label>
                                        <input
                                            value={sedes_idsedes}
                                            onChange={(e) => setSedesIdSedes(e.target.value)}
                                            type="number"
                                            placeholder="Ingrese una Sede"
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                    //onClick={() => alertsave()}
                                    >Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Button>
                    <br />
                </Button>

            </BootstrapDialog>
        </div>
    );
}

export default ModalNewNeas;
