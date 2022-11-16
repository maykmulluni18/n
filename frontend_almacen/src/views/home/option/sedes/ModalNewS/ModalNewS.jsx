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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//import InputLabel from '@mui/material/InputLabel';


import "./modalsnews.scss"

const URI = 'http://localhost:8000/sedes/'

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


const ModalNewSedes = () => {
    /*Definiendo el formulario del modal*/
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false)
    }

    const [sedes, setSedes] = useState([])
    useEffect(() => {
        Sedes()
    }, [])

/*    const getSedes = async () => {
        const res = await axios.get(URI)
        setSedes(res.data)
    }
*/
    const [cuenta_de_costo, setCuentaDeCosto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [sede, setSede] = useState('')
    const [responsable, setResponsable] = useState('')

    const navigate = useNavigate()

    const Sedes = async (e) => {
        e.preventDefault(); 
        //e.target.reset();
        setCuentaDeCosto("");
        setDescripcion("");
        setSede("");
        setResponsable("");
        const respon = await axios.post(URI, {
            cuenta_de_costo: cuenta_de_costo,
            descripcion: descripcion,
            sede: sede,
            responsable:responsable,
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

        navigate('/sedes')

    }


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
                                <form onSubmit={Sedes}>

                                    <div className="inpuntform">
                                        <label>Cuenta de Costo</label>
                                        <input
                                            value={cuenta_de_costo}
                                            onChange={(e) => setCuentaDeCosto(e.target.value)}
                                            type="number"
                                            placeholder="Ingrese cuenta de costo"
                                        />
                                    </div>
                                    <div className="inpuntform">
                                        <label>Descripcion</label>
                                        <input
                                            value={descripcion}
                                            onChange={(e) => setDescripcion(e.target.value)}
                                            type="text"
                                            placeholder="Ingrese una descripcion"
                                        />
                                    </div>
                                    <div className="inpuntform">
                                        <label>Sede</label>
                                        <input
                                            value={sede}
                                            onChange={(e) => setSede(e.target.value)}
                                            type="text"
                                            placeholder="Ingrese una sede"
                                        />
                                    </div>
                                    <div className="inpuntform">
                                        <label>Responsable</label>
                                        <input
                                            value={responsable}
                                            onChange={(e) => setResponsable(e.target.value)}
                                            type="text"
                                            placeholder="Ingrese un responsable"
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

export default ModalNewSedes;
