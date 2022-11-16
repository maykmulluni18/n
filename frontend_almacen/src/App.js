import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Layout from "./views/home/Layout"
//import Sing from "./views/home/Sing";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Listinfo from "./views/home/option/usuarios/ListInfo";
import Bienes from "./views/home/option/bienes/Listinfobienes";
import EditBienes from "./views/home/option/bienes/EditBienes/EditBienes";
import Sedes from "./views/home/option/sedes/Listinfosedes";
import EditSede from "./views/home/option/sedes/Editsedes/EditSede";
import Editusers from "./views/home/option/usuarios/modaleditusers/Editusers";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import CreatedBienes from "./views/home/option/bienes/modalnew/CreateBienes";

import ListaNeasBienes from "./views/home/option/Neas/Neas_bienes/ListaNeasBienes";
import CrearNeasBienes from "./views/home/option/Neas/Neas_bienes/Crear_neas_bienes/CrearNeasBienes";
import EditNeasBienes from "./views/home/option/Neas/Neas_bienes/Editar_neas_bienes/EditarNeasBienes";

import ListaNeasEntradas from "./views/home/option/Neas/Neas_Entradas/ListaNeasEntradas";
import CrearNeasEntradas from "./views/home/option/Neas/Neas_Entradas/Crear_neas_entradas/CrearNeasEntradas";
import EditNeasEntradas from "./views/home/option/Neas/Neas_Entradas/Editar_neas_entradas/EditarNeasEntradas";

import ListaPecosaBienes from "./views/home/option/Pecosa/Pecosa_bienes/ListaPecosaBienes";
import CrearPecosaBienes from "./views/home/option/Pecosa/Pecosa_bienes/Crear_pecosa_bienes/CrearPecosaBienes";
import EditarPecosaBienes from "./views/home/option/Pecosa/Pecosa_bienes/Editar_pecosa_bienes/EditarPecosaBienes";

import ListaPecosaPedidos from "./views/home/option/Pecosa/Pecosa_pedidos/ListaPecosaPedidos";
import CrearPecosaPedidos from "./views/home/option/Pecosa/Pecosa_pedidos/Crear_pecosa_pedidos/CrearPecosaPedidos"
import EditarPecosaPedidos from "./views/home/option/Pecosa/Pecosa_pedidos/Editar_pecosa_pedidos/EditarPecosaPedidos";
import Sidebar from "./views/home/Sidebar";
import "./app.css"
import Navbar from "./views/home/Navbar";
import Top from "./views/home/Top";
import MyDocument from "./views/home/option/Pecosa/Pecosa_bienes/Pecosa_Pdf/MyDocument";
import DowlanPDF from "./views/home/option/Pecosa/Pecosa_bienes/Pecosa_Pdf/DowlandPdf";

function App() {
  return (
    <div className="container">
    
        <BrowserRouter>
          <Routes>

            <Route path="/">
              <Route index element={<Login />} />
              <Route path="/home" element={<Home />} />
              
              <Route path="pdf" element={<DowlanPDF/>}/>

              <Route path="/bienes">
                <Route index element={<Bienes />} />
                <Route path="created-bienes" element={<CreatedBienes />} />
                <Route path="edit/:id" element={<EditBienes />} />
              </Route>

              <Route path="/sedes">
                <Route index element={<Sedes />} />
                <Route path="edit/:id" element={<EditSede />} />
              </Route>

              <Route path="/list" >
                <Route index element={<Listinfo />} />
                <Route path="edit/:id" element={<Editusers />} />
              </Route>

              <Route path="/neas-bienes" >
                <Route index element={<ListaNeasBienes />} />
                <Route path="created-neas-bienes" element={<CrearNeasBienes />} />
                <Route path="edit/:id" element={<EditNeasBienes />} />
              </Route>

              <Route path="/neas-entradas" >
                <Route index element={<ListaNeasEntradas />} />
                <Route path="created-neas-entrada" element={<CrearNeasEntradas />} />
                <Route path="edit/:id" element={<EditNeasEntradas />} />
              </Route>

              <Route path="/pecosa-bienes">
                <Route index element={<ListaPecosaBienes />} />
                <Route path="created-pecosa-bienes" element={<CrearPecosaBienes />} />
                <Route path="edit/:id" element={<EditarPecosaBienes />} />
              </Route>

              <Route path="/pecosa-pedidos">
                <Route index element={<ListaPecosaPedidos />} />
                <Route path="created-pecosa-pedidos" element={<CrearPecosaPedidos />} />
                <Route path="edit/:id" element={<EditarPecosaPedidos />} />
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}


export default App;