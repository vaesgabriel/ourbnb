import axios from "axios"

const urlBase = "http://localhost:3001/api/users"

class UsuarioService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addUsuario(data: any) {
        return axios.post(`${urlBase}`, data)
            .then((response) => {
                console.log(response.status)
            }).catch((err) => {
                console.log(err)
            })
    }

}

export default new UsuarioService()