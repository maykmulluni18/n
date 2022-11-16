import {
    Container, Button, Grid, Paper,
    TextField, IconButton, InputAdornment,

} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoginUser, reset } from "../home/auth/Authen";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UNAP from "./img/UNAP.png";
import Video from "./video/una.mp4";
import './login.scss'

const Login = () => {
  
    const [values, setValues] = useState({
        usua: "",
        pass: "",
        showPass: false,
    });

    const handlePassVisibilty = () => {
        setValues({
            ...values,
            showPass: !values.showPass,
        });
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/home");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };

    return (

        <div className="fondo">
            <video src={Video} autoPlay />

            <div className="inicio">

                <Container maxWidth="sm">
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        justifyContent="center"
                        style={{ minHeight: "100vh" }}
                    >
                        <Paper className="loginf" elelvation={5} sx={{ padding: 5, margin: 6 }}>
                            <form>
                                <Grid container direction="column" spacing={3}>
                                    <Grid aling='center'>
                                        {isError && <stron><p className="has-text-centered">{message}</p></stron>}
                                        <div className="imagen">
                                            <img src={UNAP} />
                                        </div>

                                        <h1>Universidad Nacional del Altiplano</h1>
                                        <h2>Iniciar Sesion</h2>
                                        <h3>Sub-Almacen central</h3>

                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="text"
                                            fullWidth
                                            label="Ingrese su Usuario"
                                            placeholder="Ingrese su numero de usuario"
                                            variant="outlined"
                                            required
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            type={values.showPass ? "text" : "password"}
                                            fullWidth
                                            label="Ingrese su Contraseña"
                                            placeholder="Ingrese su contraseña"
                                            variant="outlined"
                                            required
                                            name="password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={handlePassVisibilty}
                                                            aria-label="toggle password"
                                                            edge="end"
                                                        >
                                                            {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <Button
                                            className="iniciar"
                                            fullWidth
                                            onClick={Auth}
                                        >
                                            {isLoading ? 'Loading...' : 'Iniciar Sesion'}
                                        </Button>
                                    </Grid>
                                    <Grid>

                                        <h4>
                                            Soporte tecnico pulsa aqui..
                                        </h4>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Container>
            </div>
        </div>

    );
};

export default Login;