import { useRef } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"

import { Title, Form, ContainerInputs, InputLabel, Input } from "./styles"
import Button from "../../components/Button"
import UsersImg from '../../assets/users.png'
import Container from "../../components/ContainerBackground"
import TopBackground from "../../components/TopBackground"
import Imagem from "../../components/Imagem"

function Home() {
  const inputNome = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()  // Corrigido aqui

  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputNome.current.value
    })
    navigate('/lista-de-usuarios')
  }

  return (
    <Container>
      <TopBackground>
        <Imagem src={UsersImg} alt='Imagem usuários' />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input type="text" placeholder="Nome do usuário" ref={inputNome}/>
            </div>

            <div>
              <InputLabel>Idade<span>*</span></InputLabel>
              <Input type="number" placeholder="Idade do usuário" ref={inputAge}/>
            </div>
        </ContainerInputs>
        <div style={{ width: '100%'}}>
          <InputLabel>Email<span>*</span></InputLabel>
          <Input type="email" placeholder="Email do usuário" ref={inputEmail} />
        </div>
        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver lista de usuários</Button>  {/* Corrigido aqui */}
    </Container>
  )
}

export default Home
