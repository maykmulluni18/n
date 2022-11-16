import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from "../../../Layout";
import UNAP from "../UNAP.png";
import "./editsede.scss"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const URI = 'http://localhost:8000/sedes/'

const EditSede = () => {
    const [cuenta_de_costo, setCuentaDeCosto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [sede, setSede] = useState('')
    const [responsable, setResponsable] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updateeSede = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            cuenta_de_costo: cuenta_de_costo,
            descripcion: descripcion,
            sede: sede,
            responsable: responsable,
        })
        navigate('/sedes')

    }


    const getSedeId = async () => {
        const resb = await axios.get(URI + id,)
        setCuentaDeCosto(resb.data.cuenta_de_costo)
        setDescripcion(resb.data.descripcion)
        setSede(resb.data.sede)
        setResponsable(resb.data.responsable)
    }
    useEffect(() => {
        getSedeId()
    }, [])

    return (
        <Layout>
            <div className="top">
                <h1>Editar Bienes</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={UNAP} />

                    <h1></h1>
                    <input
                        className='iduser'
                        value={id}
                        onChange={(e) => setCuentaDeCosto(e.target.value)}
                        type="number"
                        placeholder=""
                        disabled='disabled'

                    />
                </div>
                <div className="right">
                    <form onSubmit={updateeSede}>
                        <div className="formInput" >
                            <label>Cuenta de Costo</label>
                            <input
                                value={cuenta_de_costo}
                                onChange={(e) => setCuentaDeCosto(e.target.value)}
                                type="number"
                                placeholder=""

                            />
                        </div>
                        <div className="formInput" >
                            <label>Descripcion</label>
                            <input
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="formInput" >
                            <label>Sede</label>
                            <input
                                value={sede}
                                onChange={(e) => setSede(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="formInput" >
                            <label>Responsable</label>
                            <input
                                value={responsable}
                                onChange={(e) => setResponsable(e.target.value)}
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

export default EditSede;