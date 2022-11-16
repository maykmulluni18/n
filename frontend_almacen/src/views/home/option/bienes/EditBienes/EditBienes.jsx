import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import Layout from "../../../Layout";
import UNAP from "../UNAP.png";
import "./editbienes.scss"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const URI = 'http://localhost:8000/bienes/'

const EditBienes = () => {
    const [item, setItem] = useState('')
    const [description, setDescription] = useState('')
    const [unidad_de_medida, setUnidadDeMedida] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updateeBienes = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            item: item,
            description: description,
            unidad_de_medida: unidad_de_medida
        })
        navigate('/bienes')

    }


    const getBienesId = async () => {
        const resb = await axios.get(URI + id,)
        setItem(resb.data.item)
        setDescription(resb.data.description)
        setUnidadDeMedida(resb.data.unidad_de_medida)
    }
    useEffect(() => {
        getBienesId()
    }, [])

    return (
        <Layout>
            <div className="top">
                <h1>Editar Bienes</h1>
            </div>
            <div className="bottom">
                
                <div className="right">
                    <form onSubmit={updateeBienes}>
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

export default EditBienes;