const LandingPage = () => {
    return (
        <div>
            <h1>Module7: DESARROLLO FRONTEND CON REACT JS</h1>
            <h3 className="left-align">Bienvenido</h3>
            <hr className="green-line" />
            <p className="left-align">Este modulo se centra en el useo de <b>React</b>, incluyendo la creacion de
                <b>componentes</b>, el manejo de <b>hooks</b> y el uso de <b>Redux.</b></p>
            <br />
            <h3 className="left-align">Temas Cubiertos</h3>
            <hr className="green-line" />

            <div className="table-container">
                <table>
                    <tbody>
                        <tr>
                            <td>componentes funionales y de clase</td>
                            <td>Uso de <b>React, Hooks</b> como useState y useEffect</td>
                            <td>Creaciono de <b>custom hooks</b> como useForm</td>
                            <td>Gestion de estado global con <b>Redux</b> con <b>React</b></td>
                            <td>Manejo de <b>Formularios</b> en <b>React</b></td>
                            <td>Publicando nuestra <b>Pagina </b> con <b>Github  Pages</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <h3 className="left-align">Recursosn Adicionales</h3>
            <hr className="green-line" />

            <p className="left-align">Para profundizar en los temas cubiertos, consulta los siguientes recursos</p>

            <a href="https://github.com/pradovc01/dev-frontend-react2025" target="_blank">GitHub Repositorio</a>
        </div>
    )
}


export default LandingPage;