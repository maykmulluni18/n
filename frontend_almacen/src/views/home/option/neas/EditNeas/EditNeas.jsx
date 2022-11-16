import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import Layout from "../../../Layout";
import UNAP from "../UNAP.png";
import "./editneas.scss"
import MenuItem from '@mui/material/MenuItem';
import { Select as MultiSelect } from '@mui/material';


const URI = 'http://localhost:8000/neas/'

const URI1 = 'http://localhost:8000/bienes/'

const URI2 = 'http://localhost:8000/user/'

const URI3 = 'http://localhost:8000/sedes/'

const EditNeas = () => {
    const [idbienes, setIdbienes] = useState('')
    const [almacen, setAlmacen] = useState('')
    const [precio_unitario, setPrecioUnitario] = useState('')
    const [precio_total, setPrecioTotal] = useState('')
    const [sedes_idsedes, setSedesIdSedes] = useState('')
    const [usuarios_idusuarios, setUsuariosIdUsuarios] = useState('')

    //const navigate = useNavigate()
    const { id } = useParams()

    const updateeNeas = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            idbienes: idbienes,
            almacen: almacen,
            precio_unitario: precio_unitario,
            precio_total: precio_total,
            sedes_idsedes: sedes_idsedes,
            usuarios_idusuarios: usuarios_idusuarios,
        })
        //navigate('/neas')

    }


    const getNeasId = async () => {
        const res = await axios.get(URI + id,)
        setIdbienes(res.data.idbienes)
        setAlmacen(res.data.almacen)
        setPrecioUnitario(res.data.precio_unitario)
        setPrecioTotal(res.data.precio_total)
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
        getNeasId()
        console.log('mostrar')
    }, [])

    const handleChange = (event) => {
        setIdbienes(event.target.value);
        //  setValue(event.target.value);
    };

    return (
        <Layout>
            <div className="prinNeas">
                <div className="top">
                    <h1>Editar Neas</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={UNAP} />

                        <h1></h1>
                        <input
                            className='iduser'
                            value={id}
                            onChange={(e) => setAlmacen(e.target.value)}
                            type="number"
                            placeholder=""
                            disabled='disabled'

                        />
                    </div>
                    <div className="right">
                        <form onSubmit={updateeNeas}>

                            <div className="inpuntfromS">
                                <label>Descripcion Bienes</label>

                                <MultiSelect
                                    disabled
                                    className="MiltiSelect"
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

                            <div className='formInput'>
                                <label>Bienes</label>

                                <input
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
                                        <MenuItem key={optios.id} value={optios.id}>{optios.nombres} {optios.apellido_paterno} {optios.apellido_materno}</MenuItem>

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
                                <label>Almacen</label>
                                <input
                                    value={almacen}
                                    onChange={(e) => setAlmacen(e.target.value)}
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                            <div className="formInput" >
                                <label>Precio unitario</label>
                                <input
                                    value={precio_unitario}
                                    onChange={(e) => setPrecioUnitario(e.target.value)}
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

export default EditNeas;