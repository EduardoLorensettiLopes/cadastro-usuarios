import { useRef, useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate,useParams} from "react-router-dom"

import { Title, Form, ContainerInputs, InputLabel, Input } from "./styles"
import Button from "../../components/Button"
import UsersImg from '../../assets/users.png'
import Container from "../../components/ContainerBackground"
import TopBackground from "../../components/TopBackground"
import Imagem from "../../components/Imagem"

function EditUsers() {
  const inputNome = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const [user, setUsers] = useState([])

  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get(`/usuarios/${id}`)

        setUsers(data)

        inputNome.current.value = data.name
        inputAge.current.value = data.age
        inputEmail.current.value = data.email
      } catch (error) {
        console.error("Erro ao carregar usuário", error);
        alert("Erro ao carregar os dados do usuário");
      }
    }
    getUsers()
  }, [id])


  async function editUser(id) {
    try {
      await api.put(`/usuarios/${id}`, {
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value),
        name: inputNome.current.value
      })
      navigate('/lista-de-usuarios')
    } catch (error) {
      console.error("Erro ao editar usuário", error);
      alert("Erro ao editar o usuário");
    }
  }
  if (!user) {
    return <p>Carregando...</p>;  
  }

  return (
    <Container>
      <TopBackground>
        <Imagem src={UsersImg} alt='Imagem usuários' />
      </TopBackground>

      <Form>
        <Title>Editar Usuário</Title>
        <ContainerInputs>
          <div>
            <InputLabel>Nome<span>*</span></InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputNome} />
          </div>

          <div>
            <InputLabel>Idade<span>*</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>Email<span>*</span></InputLabel>
          <Input type="email" placeholder="Email do usuário" ref={inputEmail} />
        </div>
        <Button type="button" onClick={() => editUser(user.id)} theme="primary">Editar Usuário</Button>
      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Cancelar</Button>  {/* Corrigido aqui */}
    </Container>
  )
}

export default EditUsers
