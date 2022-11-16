import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Login from '../views/login/Login'
import Table from '../views/home/option/bienes/Table'
import EditBienes from '../views/home/option/bienes/EditBienes/EditBienes'
import EditNeas from '../views/home/option/neas/EditNeas/EditNeas'
import Prueba from './Prueva'

describe('Prueva',() => {
    it("must display a title", () => {
        render(<Prueba/>);
        expect(screen.queryByText(/Editar Neas/i)).toBeInTheDocument();
    })
    
})


describe('existencia de un titulo',() => {
    it("must display a title", () => {
        render(<EditNeas/>);
        expect(screen.queryByText(/Editar Neas/i)).toBeInTheDocument();
    })
    
})

describe('existencia de un titulo',() => {
    it("must display a title", () => {
        render(<Login/>);
        expect(screen.queryByText(/Universidad Nacional del Altiplano/i)).toBeInTheDocument();
    })
    
})

describe('test para el componete A ', () => {
    it("renderizar", () => {
        const renderr = shallow(<Login/>);
        expect(renderr).toHaveLength();
    })
})

describe('test para el componete ', () => {
    it("renderizar", () => {
        const componete = render(<Login/>);
        const inputC = componete.getBytText('Email:')
        expect(inputC).toBeInTheDocument();
    })
})


