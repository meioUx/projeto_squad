import { Header } from '../../../components/Header'
import imageUser from "../../../assets/imageUser.jpg"
import "./profile.style.css"
import { Input } from '../../../components/Input'
import { NavLink, useNavigate } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import { api, endpoint } from '../../../services/api'

export function CreateSquad() {
  const navigate = useNavigate()

  async function handleSubmitSquad(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if (!formJson.nome || !formJson.descricao || !formJson.area_atuacao || !formJson.status) {
      alert(`Favor, verificar se todos os campos foram preenchidos`);
      return;
    }
    try {
      const response = await api.post(endpoint.squads, formJson);
      console.log(response.data)
      alert(`Criado Squad com sucesso`)
      navigate("/inicio")
    } catch (error) {
      console.log(JSON.stringify(error))
      alert(`Erro ao criar o squad\n${error.message}`)
    }
  }

  return (
    <>
      <Header />
      <div className='containerProfile'>
        <div className='menuProfile'>
          <NavLink
            to={"/inicio"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#1C1C1C',
              fontWeight: 'bold',
              alignItems: 'center',
              gap: 5,
              fontSize: 18,
              marginTop: 20
            }}
          >
            <Icon path={mdiChevronLeft} size={1} />
            Início
          </NavLink>
          <NavLink
            to={"/criarsquad"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#1C1C1C',
              fontWeight: '900',
              alignItems: 'center',
              gap: 5
            }}
          >
            Criar Squad
          </NavLink>
          <NavLink
            to={"/adicionarmembro"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#858585',
              fontWeight: 'bold',
              alignItems: 'center',
              gap: 5
            }}
          >
            Adicionar Membro
          </NavLink>
          <NavLink
            to={"/criarprojeto"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#858585',
              fontWeight: 'bold',
              alignItems: 'center',
              gap: 5
            }}
          >
            Criar Projeto
          </NavLink>
        </div>
        <div
          className='containerEditProfile'
        >
          <div className='headerBannerProfile'>
            <h1>
              Criar Squad
            </h1>
            <img
              src={imageUser}
              width={100}
              height={100}
              style={{
                objectFit: "cover",
                borderRadius: 100,
                marginTop: 20,
                marginLeft: 10
              }}
            />
          </div>
          <form method="post" onSubmit={handleSubmitSquad}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 10
            }}>
              <Input name='nome' label='Nome Squad' placeholder='Nome Squad' />
              <Input name='descricao' label='Descrição' placeholder='Foco em desenvolvimento' />
              <Input name='area_atuacao' label='Área de Atuação' placeholder='Desenvolvimento, Design, Marketing...' />

              <Input name='status' label='Status' placeholder='Status da Squad' />
              <div style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: 10
              }}>
                <button className='buttonCancelProfile'>Cancelar</button>
                <button className='buttonSaveProfile'>Salvar</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}