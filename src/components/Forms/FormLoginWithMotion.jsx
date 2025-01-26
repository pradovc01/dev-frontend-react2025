import { motion } from "motion/react"
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setFormLogin } from "../../store/form/formSlice.js";
import useForm from "../Hooks/useForm.js";
import ModalSuccess from "../Modals/ModalSuccess.jsx";
import ModalError from "../Modals/ModalError.jsx";
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
    const dispatch = useDispatch()
    const useLogin = useSelector((state) => state.formRed.loginForm)

    const { formData, handleChange, resetForm } = useForm({
        username: '',
        password: '',
        email: '',
        module: useLogin.module,
    });
    useEffect(() => {
        if (useLogin.module === '') {
            resetForm();
        }
    }, [useLogin.module]);



    const [showPassword, setPassword] = useState(false);
    const [showModal, setModal] = useState(false);
    const [showModalError, setModalError] = useState(false);

    const togglePasswordVisibility = () => {
        setPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password === useLogin.password) {
            dispatch(setFormLogin({
                username: formData.username,
                email: formData.email,
            }
            ));
            setModal(true);
            setModalError(false);
        }
        else {
            setModalError(true)
            setModal(false);
        }

    };
    const onClosModalInfo = () => {
        setModal(false);
        setModalError(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalSuccess
                visible={showModal}
                message={`Bienvenido ${useLogin.username} ${useLogin.email}`}
                onClose={onClosModalInfo}
            ></ModalSuccess>
            <ModalError
                visible={showModalError}
                message="Username/Password Incorrectos!!!"
                onClose={onClosModalInfo}
            ></ModalError>

            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Module: &nbsp;
                            <input
                                type="text"
                                name="module"
                                value={useLogin.module}
                                readOnly

                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Username:&nbsp;
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Email: &nbsp;
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Password:&nbsp;
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            /> &nbsp;

                            {!showPassword ? (
                                <button className="button" type="button" onClick={togglePasswordVisibility}>
                                    Show
                                </button>
                            ) : (
                                <button className="button" type="button" onClick={togglePasswordVisibility}>
                                    Hide
                                </button>
                            )}
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button className="button" type="submit">Enviar</button>
                </motion.div>
            </form >
        </motion.div >
    );
};
export default FormWithMotionAndHook;