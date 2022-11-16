import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';
import Layout from "../../../../Layout";
//import UNAP from "../UNAP.png";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "./editarneasentradas.scss"

const URI = 'http://localhost:8000/neasentradas/'

const URI1 = 'http://localhost:8000/user/'

const URI3 = 'http://localhost:8000/sedes/'


const EditarNeasEntradas = () => {

    const [sedes, setSedes] = useState([])
    const [usuario, setUsuario] = useState([])

    const getSedes = async () => {
        const res = await axios.get(URI3)
        setSedes(res.data)
    }
    const getUsuario = async () => {
        const res = await axios.get(URI1)
        setUsuario(res.data)
    }
    useEffect(() => {
        getSedes()
        getUsuario()
        getNeasEntradas()
        Neas_Entradas()
    }, [])


    const [id_administradores, setIdAdministradores] = useState('')
    const [id_sedes, setIdSedes] = useState('')
    const [tipo_de_ingreso, setTipoDeIngreso] = useState('')
    const [recibido_por, setRecibidoPor] = useState('')
    const [tipo_de_obra, setTipoDeObra] = useState('')
    const [tipo_de_moneda, setTipoDeMoneda] = useState('')
    const [tipo_de_almacen, setTipoDeAlmacen] = useState('')
    const [documento, setDocumento] = useState('')
    const [tipo_de_cambio, setTipoDeCambio] = useState('')
    const [tipo_de_uso, setTipoDeUso] = useState('')
    const [fecha_de_nea, setFechaDeNea] = useState('')
    const [fecha_de_registro, setFechaDeRegristro] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    const Neas_Entradas = async (e) => {
        e.preventDefault();
        const respon = await axios.put(URI + id, {
            id_administradores: id_administradores,
            id_sedes: id_sedes,
            tipo_de_ingreso: tipo_de_ingreso,
            recibido_por: recibido_por,
            tipo_de_obra: tipo_de_obra,
            tipo_de_moneda: tipo_de_moneda,
            tipo_de_almacen: tipo_de_almacen,
            documento: documento,
            tipo_de_cambio: tipo_de_cambio,
            tipo_de_uso: tipo_de_uso,
            fecha_de_nea: fecha_de_nea,
            fecha_de_registro: fecha_de_registro
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
                    // text: 'Presione Clik para cerrar!',
                    icon: 'error',
                    timer: 5500
                }
            )
        }

        navigate('/neas-entradas')

    }

    const getNeasEntradas = async () => {
     const res = await axios.get(URI + id,)
        setIdAdministradores(res.data.id_administradores)
        setIdSedes(res.data.id_sedes)
        setTipoDeIngreso(res.data.tipo_de_ingreso)
        setRecibidoPor(res.data.recibido_por)
        setTipoDeObra(res.data.tipo_de_obra)
        setTipoDeMoneda(res.data.tipo_de_moneda)
        setTipoDeAlmacen(res.data.tipo_de_almacen)
        setDocumento(res.data.documento)
        setTipoDeCambio(res.data.tipo_de_cambio)
        setTipoDeUso(res.data.tipo_de_uso)
        setFechaDeNea(res.data.fecha_de_nea)
        setFechaDeRegristro(res.data.fecha_de_registro)
        
    }
    const selectAdministrativo = (e) => {
        setIdAdministradores(e.target.value)
    }
    const selectSedes = (e) => {
        setIdSedes(e.target.value)
    }
    return (
        <Layout>
            <div className='editarneasentradas'>
                <div className="top">
                    <h1>Crear Bienes de las Neas</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={Neas_Entradas}>
                            <div className='formInput'>
                                <label>Solicitante Id:</label>

                                <input
                                    type="text"
                                    list="data1"
                                    placeholder='filtrar'
                                    value={id_administradores}
                                    onChange={selectAdministrativo}
                                />
                                <datalist className='datalistt' id="data1">
                                    {
                                        usuario
                                            .map(res => {
                                                return (
                                                    <option className='options' key={res.id} value={res.id}> {res.nombres} {res.apellido_paterno}</option>
                                                )
                                            })
                                    }
                                </datalist>
                            </div>
                            <div className='formInput'>
                                <label>Sedes Id</label>

                                <input
                                    type="text" list="bienes"
                                    placeholder='filtrar'
                                    value={id_sedes}
                                    onChange={selectSedes}
                                />
                                <datalist id="bienes">
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

                            <div className="formInput" >
                                <label>Tipo de Ingreso</label>
                                <input
                                    value={tipo_de_ingreso}
                                    onChange={(e) => setTipoDeIngreso(e.target.value)}
                                    type="text"

                                />
                            </div>
                            <div className="formInput" >
                                <label>Recibido Por</label>
                                <input
                                    value={recibido_por}
                                    onChange={(e) => setRecibidoPor(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="formInput">
                                <label>Tipo de Obra</label>
                                <input
                                    value={tipo_de_obra}
                                    onChange={(e) => setTipoDeObra(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Tipo de Moneda</label>
                                <input
                                    value={tipo_de_moneda}
                                    onChange={(e) => setTipoDeMoneda(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Tipo de Almacen</label>
                                <input
                                    value={tipo_de_almacen}
                                    onChange={(e) => setTipoDeAlmacen(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Tipo de Documento</label>
                                <input
                                    value={documento}
                                    onChange={(e) => setDocumento(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Tipo de Cambio</label>
                                <input
                                    value={tipo_de_cambio}
                                    onChange={(e) => setTipoDeCambio(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Tipo de Uso</label>
                                <input
                                    value={tipo_de_uso}
                                    onChange={(e) => setTipoDeUso(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Fecha de Nea</label>
                                <input
                                    value={fecha_de_nea}
                                    onChange={(e) => setFechaDeNea(e.target.value)}
                                    type="date"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Fecha de Registro</label>
                                <input
                                    value={fecha_de_registro}
                                    onChange={(e) => setFechaDeRegristro(e.target.value)}
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
export default EditarNeasEntradas;