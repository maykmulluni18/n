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
import "./modalnew.scss"

const URI = 'http://localhost:8000/user/'

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


const ModalNewUsers = () => {
    /*Definiendo el formulario del modal*/
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false)
    }

    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        getUsuarios()
    }, [])

    const getUsuarios = async () => {
        const res = await axios.get(URI)
        setUsuarios(res.data)
    }

    const [n_documento, setNdocumento] = useState('')
    const [apellido_paterno, setApellidopaterno] = useState('')
    const [apellido_materno, setApellidomaterno] = useState('')
    const [nombres, setNombres] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        const respon = await axios.post(URI, {
            n_documento: n_documento,
            apellido_paterno: apellido_paterno,
            apellido_materno: apellido_materno,
            nombres: nombres
        })
        if (respon.status === 200) {
            Swal.fire(
                {
                    title: 'Good job!',
                    text: 'You clicked the button!',
                    icon: 'success'
                }
            )
            handleClose()
            navigate('/list')
        } else {
            Swal.fire(
                {
                    title: 'Good job!',
                    text: 'You clicked the button!',
                    icon: 'error'
                }
            )
        }

        navigate('/list')

    }

    const alertsave = () => {

        Swal.fire(
            {
                title: 'Good job!',
                text: 'You clicked the button!',
                icon: 'success',
                timer: 5500
            }
        )
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
                                <form onSubmit={store}>

                                    <div className="inpuntform">
                                        <label>N° DOCUMENTO</label>
                                        <input
                                            value={n_documento}
                                            onChange={(e) => setNdocumento(e.target.value)}
                                            type="number"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="inpuntform">
                                        <label>APELLIDO PATERNO</label>
                                        <input
                                            value={apellido_paterno}
                                            onChange={(e) => setApellidopaterno(e.target.value)}
                                            type="text"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="inpuntform">
                                        <label>APELLIDO MATERNO</label>
                                        <input
                                            value={apellido_materno}
                                            onChange={(e) => setApellidomaterno(e.target.value)}
                                            type="text"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="inpuntform">
                                        <label>NOMBRES</label>
                                        <input
                                            value={nombres}
                                            onChange={(e) => setNombres(e.target.value)}
                                            type="text"
                                            placeholder=""
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

export default ModalNewUsers;
