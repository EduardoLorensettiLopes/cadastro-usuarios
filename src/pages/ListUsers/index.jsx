import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import UsersImg from '../../assets/users.png'
import api from '../../services/api'
import TopBackground from "../../components/TopBackground"
import Imagem from "../../components/Imagem"
import Trash from '../../assets/trash.svg'
import Edit from '../../assets/edit.svg'
import { useEffect, useState } from "react"
import ContainerUsers from "../../components/ContainerUsers"
import { Container, CardUsers, TrashIcon, EditIcon, Title, AvatarUser, ContainerIcons } from './styles'

function ListUsers() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }
    return (
        <Container>
            <TopBackground>
                <Imagem src={UsersImg} alt='Imagem usuários' />
            </TopBackground>
            <Title>Lista de Usuários</Title>
            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <ContainerIcons>
                            <TrashIcon src={Trash} alt='icon-lixo' onClick={() => deleteUsers(user.id)} />
                            <EditIcon src={Edit} alt='icon-lixo' onClick={() => navigate(`/edit/${user.id}`)} />
                        </ContainerIcons>
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}


export default ListUsers