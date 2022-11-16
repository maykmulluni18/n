import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from "../../../../Layout";
//import UNAP from "../UNAP.png";
import "./editarneasbienes.scss"
import MenuItem from '@mui/material/MenuItem';
import { Select as MultiSelect } from '@mui/material';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const URI = 'http://localhost:8000/neasbienes/'

const URI1 = 'http://localhost:8000/neasentradas/'

const URI2 = 'http://localhost:8000/bienes/'

const URI3 = 'http://localhost:8000/sedes/'


const EditPedidos = () => {
    const [neasentradas, setNeasEntradas] = useState([])
    const [bienes, setBienes] = useState([])
    const [sedes, setSedes] = useState([])

    const getNeasEntradas = async () => {
        const res = await axios.get(URI1)
        setNeasEntradas(res.data)
    }
    const getBienes = async () => {
        const res = await axios.get(URI2)
        setBienes(res.data)
    }
    const getSedes = async () => {
        const res = await axios.get(URI3)
        setSedes(res.data)
    }

    useEffect(() => {
        getNeasEntradas()
        getBienes()
        getSedes()
        getNeasBienes()
    }, [])
    const [neaEntradaId, setNeaEntradaId] = useState('')
    const [bieneId, setBieneId] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [fte_fto, setFteFto] = useState('')
    const [cuenta_contable, setCuentaContable] = useState('')
    const [p_unitario, setPUnitario] = useState('')
    const [fecha, setFecha] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updateNeasBienes = async (e) => {
        e.preventDefault()
        const respon = await axios.put(URI + id, {
            neaEntradaId: neaEntradaId,
            bieneId: bieneId,
            cantidad: cantidad,
            fte_fto: fte_fto,
            cuenta_contable: cuenta_contable,
            p_unitario: p_unitario,
            fecha: fecha
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

        } else {
            Swal.fire(
                {
                    title: 'Error!',
                    icon: 'error',
                    timer: 5500
                }
            )
        }
        navigate('/neas-bienes')

    }


    const getNeasBienes = async () => {
        const res = await axios.get(URI + id,)
        setNeaEntradaId(res.data.neaEntradaId)
        setBieneId(res.data.bieneId)
        setCantidad(res.data.cantidad)
        setFteFto(res.data.fte_fto)
        setPUnitario(res.data.p_unitario)
        setCuentaContable(res.data.cuenta_contable)
        setFecha(res.data.fecha)
    }


    return (
        <Layout>
            <div className='EditarNeasBienes'>
                <div className="top">
                    <h1>Editar Pedidos: {id}</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={updateNeasBienes}>
                            <div className='formInput'>
                                <label>Neas</label>

                                <input
                                    type="text"
                                    list="data1"
                                    placeholder='filtrar'
                                    value={neaEntradaId}
                                    onChange={(e) => setNeaEntradaId(e.target.value)}
                                />
                                <datalist className='datalistt' id="data1">
                                    {
                                        neasentradas
                                            .map(res => {
                                                return (
                                                    <option className='options' key={res.id} value={res.id}> {res.fecha_de_registro} {res.neaEntradaId}</option>
                                                )
                                            })
                                    }
                                </datalist>
                            </div>
                            
                            <div className='formInput'>
                                <label>Bienes </label>

                                <input
                                    type="text" list="bienes"
                                    placeholder='filtrar'
                                    value={bieneId}
                                    onChange={(e) => setBieneId(e.target.value)}
                                />
                                <datalist id="bienes">
                                    {
                                        bienes
                                            .map(res => {
                                                return (
                                                    <option key={res.id} value={res.id}> {res.description} </option>
                                                )
                                            })
                                    }

                                </datalist>
                            </div>

                            <div className="formInput" >
                                <label>Cantidad</label>
                                <input
                                    value={cantidad}
                                    onChange={(e) => setCantidad(e.target.value)}
                                    type="number"
                                    placeholder=""
                                />
                            </div>
                            <div className="formInput" >
                                <label>Fte/Fto</label>
                                <input
                                    value={fte_fto}
                                    onChange={(e) => setFteFto(e.target.value)}
                                    type="number"
                                    placeholder=""
                                />
                            </div>
                            <div className="formInput">
                                <label>Cuenta Contable</label>
                                <input
                                    value={cuenta_contable}
                                    onChange={(e) => setCuentaContable(e.target.value)}
                                    type="number"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Precio Unitario</label>
                                <input
                                    value={p_unitario}
                                    onChange={(e) => setPUnitario(e.target.value)}
                                    type="number"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Fecha de Registrp</label>
                                <input
                                    value={fecha}
                                    onChange={(e) => setFecha(e.target.value)}
                                    type="date"
                                />
                            </div>
                            <div className='BotonesOp'>
                                <button className='button1' type='submit'>Guardar</button>
                                <Link to={'../../neas-bienes'} className='butoon_2' >
                                    <button className='button2'> Salir</button>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default EditPedidos;