import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from "../../../Layout";
import UNAP from "../UNAP.png";
import "./createbienes.scss"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Swal from 'sweetalert2'


const URI = 'http://localhost:8000/bienes/'

const CreatedBienes = () => {
    const { id } = useParams()
    const [bienes, setBienes] = useState([])
    useEffect(() => {
        Bienes()
    }, [])
    const [item, setItem] = useState('')
    const [description, setDescription] = useState('')
    const [unidad_de_medida, setUnidadDeMedida] = useState('')
    const navigate = useNavigate()

    const Bienes = async (e) => {
        e.preventDefault();
        const respon = await axios.post(URI, {
            item: item,
            description: description,
            unidad_de_medida: unidad_de_medida
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

        navigate('/bienes')

    }
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
                        onChange={(e) => setItem(e.target.value)}
                        type="number"
                        placeholder=""
                        disabled='disabled'
                    />
                </div>
                <div className="right">
                    <form onSubmit={Bienes}>
                        <div className="formInput" >
                            <label>Item</label>
                            <input
                                value={item}
                                onChange={(e) => setItem(e.target.value)}
                                type="number"
                                placeholder=""

                            />
                        </div>
                        <div className="formInput" >
                            <label>Descripcion</label>
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="formInput" >
                            <label>U. de Medida</label>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                className="selecunidad"
                                //labelId="demo-simple-select-label"
                                //id="demo-simple-select"
                                value={unidad_de_medida}
                                //label="Medida"
                                onChange={(e) => setUnidadDeMedida(e.target.value)}
                            >
                                <MenuItem value="Kilogramo">Kilogramo</MenuItem>
                                <MenuItem value="Metro">Metro</MenuItem>
                                <MenuItem value="Galon">Galon</MenuItem>
                                <MenuItem value="Plancha">Plancha</MenuItem>

                            </Select>
                        </div>

                        <button type='submit'>Guardar</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default CreatedBienes;