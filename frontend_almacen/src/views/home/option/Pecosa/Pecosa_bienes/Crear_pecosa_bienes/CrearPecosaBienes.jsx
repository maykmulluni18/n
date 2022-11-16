import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from "../../../../Layout";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "./crearpecosabienes.scss"

const URI = 'http://localhost:8000/pecosabienes/'

const URI1 = 'http://localhost:8000/pecosapedidos/'

const URI2 = 'http://localhost:8000/bienes/'

const CrearPecosaBienes = () => {
    const [pecosapedidos, setPecosaPedidos] = useState([])
    const [bienes, setBienes] = useState([])

    const getPecosaPedidos = async () => {
        const res = await axios.get(URI1)
        setPecosaPedidos(res.data)
    }
    const getBienes = async () => {
        const res = await axios.get(URI2)
        setBienes(res.data)
    }

    useEffect(() => {
        getPecosaPedidos()
        getBienes()
        Pecosa_Bien()
    }, [])

    const [pecosaPedidoId, setPecosaPedidoId] = useState('')
    const [bieneId, setBieneId] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [p_unitario, setPUnitario] = useState('')
    const [cuenta_contable, setCuentaContable] = useState('')
    const [observaciones, set_Observaciones] = useState('')
    const [fecha, setFecha] = useState('')

    const navigate = useNavigate()
    const Pecosa_Bien = async (e) => {
        e.preventDefault();
        setPecosaPedidoId("")
        setBieneId("")
        setCantidad("")
        setPUnitario("")
        setCuentaContable("")
        set_Observaciones("")
        setFecha("")
        const respon = await axios.post(URI, {
            pecosaPedidoId: pecosaPedidoId,
            bieneId: bieneId,
            cantidad: cantidad,
            p_unitario: p_unitario,
            cuenta_contable: cuenta_contable,
            observaciones: observaciones,
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
                    // text: 'Presione Clik para cerrar!',
                    icon: 'error',
                    timer: 5500
                }
            )
        }

        navigate('/pecosa-bienes')

    }

    return (
        <Layout>
            <div className='crearpecosabienes'>
                <div className="top">
                    <h1>Crear Bienes de la Pecosa</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={Pecosa_Bien}>
                            <div className='formInput'>
                                <label>Pecosa</label>
                                <input
                                    type="text"
                                    list="datap"
                                    placeholder='filtrar'
                                    value={pecosaPedidoId}
                                    onChange={(e) => setPecosaPedidoId(e.target.value)}
                                />
                                <datalist className='datalistt' id="datap">
                                    {
                                        pecosapedidos
                                            .map(res => {
                                                return (
                                                    <option className='options' key={res.id} value={res.id}>{res.dependencias}  {res.fecha}</option>
                                                )
                                            })
                                    }
                                </datalist>
                            </div>
                            <div className='formInput'>
                                <label>Bienes </label>

                                <input
                                    type="text" list="bienesp"
                                    placeholder='filtrar'
                                    value={bieneId}
                                    onChange={(e) => setBieneId(e.target.value)}
                                />
                                <datalist id="bienesp">
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
                            <div className="formInput">
                                <label>Cuenta Contable</label>
                                <input
                                    value={cuenta_contable}
                                    onChange={(e) => setCuentaContable(e.target.value)}
                                    type="number"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Observaciones</label>
                                <input
                                    value={observaciones}
                                    onChange={(e) => set_Observaciones(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="inpuntfromS">
                                <label>Fecha de Registro</label>
                                <input
                                    value={fecha}
                                    onChange={(e) => setFecha(e.target.value)}
                                    type="date"
                                />
                            </div>
                            <div className='BotonesOp'>
                                <button className='button1' type='submit'>Guardar</button>
                                <Link to={'../../pecosa-bienes'} className='butoon_2' >
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

export default CrearPecosaBienes;   