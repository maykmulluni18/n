//import Navbar from "../../../Navbar";
//import Sidebar from "../../../Sidebar";
//import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
//import Button from '@mui/material/Button';
//import { styled } from '@mui/material/styles';
//import Dialog from '@mui/material/Dialog';
//import DialogTitle from '@mui/material/DialogTitle';
//import IconButton from '@mui/material/IconButton';
//import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from "../../../Layout";
import UNAP from "./UNAP.png";
import "./editusers.scss"

const URI = 'http://localhost:8000/user/'

const Editusers = () => {
    const [n_documento, setNdocumento] = useState('')
    const [apellido_paterno, setApellidopaterno] = useState('')
    const [apellido_materno, setApellidomaterno] = useState('')
    const [nombres, setNombres] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updatee = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {

            n_documento: n_documento,
            apellido_paterno: apellido_paterno,
            apellido_materno: apellido_materno,
            nombres: nombres,
        })
        navigate('/list')

    }


    const getUsariosId = async () => {
        const res = await axios.get(URI + id,)
        setNdocumento(res.data.n_documento)
        setApellidopaterno(res.data.apellido_materno)
        setApellidomaterno(res.data.apellido_materno)
        setNombres(res.data.nombres)
        console.log(res.data.nombres)
    }
    useEffect(() => {
        getUsariosId()
        console.log(nombres)
    }, [])

    return (
        <Layout>
            <div className="top">
                <h1>Editar Usuarios de Administradores</h1>
            </div>
            <div className="bottom">
                <div className="left">
                <img src={UNAP} />

                    <h1></h1>
                    <input
                        className='iduser'
                        value={id}
                        onChange={(e) => setNdocumento(e.target.value)}
                        type="number"
                        placeholder=""
                        disabled='disabled'

                    />
                </div>
                <div className="right">
                    <form onSubmit={updatee}>
                        <div className="formInput" >
                            <label>Documento</label>
                            <input
                                value={n_documento}
                                onChange={(e) => setNdocumento(e.target.value)}
                                type="number"
                                placeholder=""

                            />
                        </div>
                        <div className="formInput" >
                            <label>APELLIDO PATERNO</label>
                            <input
                                value={apellido_paterno}
                                onChange={(e) => setApellidopaterno(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="formInput" >
                            <label>APELLIDO MATERNO</label>
                            <input
                                value={apellido_materno}
                                onChange={(e) => setApellidomaterno(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="formInput" >
                            <label>NOMBRES</label>
                            <input
                                value={nombres}
                                onChange={(e) => setNombres(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>

                        <button type='submit'>Guardar</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Editusers;