import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import Layout from "../../../Layout";
import UNAP from "../UNAP.png";
import "./editpedidos.scss"
import MenuItem from '@mui/material/MenuItem';
import { Select as MultiSelect } from '@mui/material';
import Swal from 'sweetalert2'


const URI = 'http://localhost:8000/pedidos/'

const URI1 = 'http://localhost:8000/bienes/'

const URI2 = 'http://localhost:8000/user/'

const URI3 = 'http://localhost:8000/sedes/'

const EditPedidos = () => {
    const [almacen, setAlmacen] = useState('')
    const [recepcion, setRecepcion] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [binenes_idbinenes, setIdbienes] = useState('')
    const [precio_unitario, setPrecioUnitario] = useState('')
    const [precio_total, setPrecioTotal] = useState('')
    const [sedes_idsedes, setSedesIdSedes] = useState('')
    const [usuarios_idusuarios, setUsuariosIdUsuarios] = useState('')
    const [fecha_de_pedido, setFechaDePedido] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updateePedidos = async (e) => {
        e.preventDefault()
        const respon = await axios.put(URI + id, {
            almacen: almacen,
            recepcion: recepcion,
            cantidad: cantidad,
            binenes_idbinenes: binenes_idbinenes,
            precio_unitario: precio_unitario,
            precio_total: precio_total,
            sedes_idsedes: sedes_idsedes,
            usuarios_idusuarios: usuarios_idusuarios,
            fecha_de_pedido: fecha_de_pedido,

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
        navigate('/pedidos')

    }


    const getPedidosId = async () => {
        const res = await axios.get(URI + id,)
        setAlmacen(res.data.almacen)
        setRecepcion(res.data.recepcion)
        setCantidad(res.data.cantidad)
        setIdbienes(res.data.binenes_idbinenes)
        setPrecioUnitario(res.data.precio_unitario)
        setPrecioTotal(res.data.precio_total)
        setFechaDePedido(res.data.fecha_de_pedido)
        setSedesIdSedes(res.data.sedes_idsedes)
        setUsuariosIdUsuarios(res.data.usuarios_idusuarios)
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

    useEffect(() => {
        getBienes();
        getUsuarios();
        getSedes();
        getPedidosId()
        console.log('mostrar')
    }, [])

    const handleChange = (event) => {
        setIdbienes(event.target.value);
        //  setValue(event.target.value);
    };

    return (
        <Layout>
            <div className='prinPedidos'>
                <div className="top">
                    <h1>Editar Pedidos</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={UNAP} />

                        <h1></h1>
                        <input
                            className='iduser'
                            value={id}
                            onChange={(e) => setCantidad(e.target.value)}
                            type="number"
                            placeholder=""
                            disabled='disabled'

                        />
                    </div>
                    <div className="right">
                        <form onSubmit={updateePedidos}>

                            <div className="inpuntfromS">
                                <label>Descripcion Bienes</label>

                                <MultiSelect
                                    disabled
                                    className="MiltiSelect"
                                    name="binenes_idbinenes"
                                    value={binenes_idbinenes}
                                    onChange={handleChange}
                                >
                                    <MenuItem value=' '> </MenuItem>
                                    {bienes.map((optios) => (
                                        <MenuItem key={optios.id} value={optios.id}>{optios.description}</MenuItem>

                                    ))}
                                </MultiSelect>
                            </div>

                            <div className='formInput'>
                                <label>Bienes</label>

                                <input
                                    type="text"
                                    list="data1"
                                    placeholder='filtrar'
                                    value={binenes_idbinenes}

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


                            <div className="inpuntfromS">
                                <label>Usuarios</label>

                                <MultiSelect
                                    disabled
                                    className="MiltiSelect"
                                    name='usuarios_idusuarios'
                                    value={usuarios_idusuarios}
                                    onChange={(e) => setUsuariosIdUsuarios(e.target.value)}
                                >
                                    <MenuItem value=' '> </MenuItem>
                                    {usuarios.map((optios) => (
                                        <MenuItem key={optios.id} value={optios.id}>{optios.nombres}</MenuItem>

                                    ))}
                                </MultiSelect>
                            </div>

                            <div className='formInput'>
                                <label>Usuarios</label>

                                <input
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

                            <div className="inpuntfromS">
                                <label>Sedes</label>

                                <MultiSelect
                                    disabled
                                    className="MiltiSelect"
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

                            <div className='formInput'>
                                <label>Sedes</label>

                                <input
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

                            <div className="formInput" >
                                <label>Recepcion</label>
                                <input
                                    value={recepcion}
                                    onChange={(e) => setRecepcion(e.target.value)}
                                    type="text"
                                    placeholder=""
                                />
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
                                <label>Precio unitario</label>
                                <input
                                    value={precio_unitario}
                                    onChange={(e) => setPrecioUnitario(e.target.value) - 2}
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                            <div className="formInput" >
                                <label>Precio total</label>
                                <input
                                    value={precio_total}
                                    onChange={(e) => setPrecioTotal(e.target.value)}
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                            <div className="formInput">
                                <label>Fecha de Pedido</label>
                                <input
                                    value={fecha_de_pedido}
                                    onChange={(e) => setFechaDePedido(e.target.value)}
                                    type="date"
                                />
                            </div>
                            <div className="inpuntform">
                                <label>Almacen</label>
                                <input
                                    value={almacen}
                                    onChange={(e) => setAlmacen(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className='BotonesOp'>
                                <button className='button1' type='submit'>Guardar</button>
                                <button className='button2' >Canselar</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default EditPedidos;