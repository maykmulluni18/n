import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';
import Layout from "../../../../Layout";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "./editarpecosapedidos.scss"

const URI = 'http://localhost:8000/pecosapedidos/'

const URI3 = 'http://localhost:8000/sedes/'

const URI4 = 'http://localhost:8000/user'

const EditarPecosaPedidos = () => {
    const [sedes, setSedes] = useState([])
    const [administrativos, setAdministrativos] = useState([])

    const getSedes = async () => {
        const res = await axios.get(URI3)
        setSedes(res.data)
    }
    const getAdministrativos = async () => {
        const res = await axios.get(URI4)
        setAdministrativos(res.data)
    }

    useEffect(() => {
        getSedes()
        getAdministrativos()
        getPedidosPecosa()
        Pecosa_Pedidos_E()
    }, [])

    const [dependencias, setDependencias] = useState('')
    const [id_administrativos, setIdAdministrativos] = useState('')
    const [id_sedes, setIdSedes] = useState('')
    const [fecha, setFecha] = useState('')
    const [almacen, setAlmacen] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    const Pecosa_Pedidos_E = async (e) => {
        e.preventDefault();
        const respon = await axios.put(URI + id, {
            dependencias: dependencias,
            id_administrativos: id_administrativos,
            id_sedes: id_sedes,
            fecha: fecha,
            almacen: almacen
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

        navigate('/pecosa-pedidos')

    }

    const getPedidosPecosa = async () => {
        const res = await axios.get(URI + id,)
        setDependencias(res.data.dependencias)
        setIdAdministrativos(res.data.id_administrativos)
        setIdSedes(res.data.id_sedes)
        setAlmacen(res.data.almacen)
        setFecha(res.data.fecha)

    }

    return (
        <Layout>
            <div className='editarpecosapedidos'>
                <div className="top">
                    <h1>Editar Pedidos de la Pecosa: {id}</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={Pecosa_Pedidos_E}>
                        <div className="formInput">
                                <label>Dependencias</label>
                                <input
                                    value={dependencias}
                                    onChange={(e) => setDependencias(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className='formInput'>
                                <label>Administrativos</label>
                                <input
                                    type="text"
                                    list="datap"
                                    placeholder='filtrar'
                                    value={id_administrativos}
                                    onChange={(e) => setIdAdministrativos(e.target.value)}
                                />
                                <datalist className='datalistt' id="datap">
                                    {
                                        administrativos
                                            .map(res => {
                                                return (
                                                    <option className='options' key={res.id} value={res.id}>'
                                                        {res.nombres}' ' 
                                                        {res.apellido_paterno}' '
                                                        {res.apellido_materno}' 
                                                        </option>
                                                )
                                            })
                                    }
                                </datalist>
                            </div>
                            <div className='formInput'>
                                <label>Sedes </label>

                                <input
                                    type="text" list="bienesp"
                                    placeholder='filtrar'
                                    value={id_sedes}
                                    onChange={(e) => setIdSedes(e.target.value)}
                                />
                                <datalist id="bienesp">
                                    {
                                        sedes
                                            .map(res => {
                                                return (
                                                    <option key={res.id} value={res.id}> {res.descripcion} - {res.sede}</option>
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
                                <Link to={'../../pecosa-pedidos'} className='butoon_2' >
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

export default EditarPecosaPedidos;   