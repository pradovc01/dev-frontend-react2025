
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormLogin = ({ titleForm }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };

    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label>UserName:</label>
                    <input type='text'
                        name='username'
                        required
                        value={formData.username}
                        onChange={handleChange} />
                </div>

                <div>
                    <label>Email:</label>
                    <input type='email'
                        name='email'
                        required
                        value={formData.email}
                        onChange={handleChange} />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default FormLogin;