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
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Layout from "../../../Layout";
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
                <h1>kjl</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img
                       
                        alt=""
                    />
                </div>
                <div className="right">
                    <form>
                        <div className="formInput">
                            <label htmlFor="file">
                                Image: <DriveFolderUploadOutlinedIcon className="icon" />
                            </label>
                            <input
                             
                                //onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>

                            <div className="formInput" >
                                <label>jksñda</label>
                                <input  />
                            </div>
                        
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Editusers;