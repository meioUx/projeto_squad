import { Header } from '../../../components/Header'
import imageUser from "../../../assets/imageUser.jpg"
import "./profile.style.css"
import { Input } from '../../../components/Input'
import { NavLink, useNavigate } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import { api, endpoint } from '../../../services/api'
import { useEffect, useState } from 'react'
import { ISquad } from '../../../interfaces/squad.interface'

export function AddMember() {
  const navigate = useNavigate()
  const [squads, setSquads] = useState<ISquad[]>([])

  async function handleSubmitMember(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (!formJson.nome || !formJson.descricao || !formJson.habilidades || !formJson.email || !formJson.squad_id || !formJson.data_nascimento || !formJson.genero || !formJson.foto_url || !formJson.redes_sociais) {
      alert(`Favor, verificar se todos os campos foram preenchidos`);
      return;
    }
    try {

      const response = await api.post(endpoint.membros, formJson);
      console.log(response.data)
      alert(`Adicionado membro com sucesso`)
      navigate("/inicio")
    } catch (error) {
      console.log(JSON.stringify(error.response.data))
      alert(`Erro ao adicionar membro\n${error.response.data.message}`)
    }
  }

  useEffect(() => {
    (async () => {
      const response = await api.get<ISquad[]>(endpoint.squads)
      console.log(response.data)
      if (response.data.length < 1) {
        alert('Precisa criar um squad primeiro para poder adicionar um membro')
        navigate('/criarsquad')
        return
      }
      setSquads(response.data)
    })()
  }, [])

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
              color: '#858585',
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
              color: '#1C1C1C',
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
              Adicionar Membro
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
          <form method="post" onSubmit={handleSubmitMember}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 10
            }}>
              <label>
                Selecione um Squad:
                <select name="squad_id">
                  {
                    squads.map(squad => (
                      <option value={squad._id}>{squad.nome}</option>
                    ))
                  }
                </select>
              </label>
              <Input name='nome' label='Nome' placeholder='Nome' />
              <Input name='data_nascimento' type='date' label='Data de Nascimento' placeholder='23' />
              <label>
                Gênero:
                <select name="genero">
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="naobinario">Não Binário</option>
                </select>
              </label>
              <Input name='descricao' label='Descrição' placeholder='Sistema e-comerce' />
              <Input name='habilidades' label='Habilidades' placeholder='React, Figma, Canvas, PHP, Java...' />
              <Input name='redes_sociais' label='LinkedIn' placeholder='https://linkedin.com/in/' />
              <Input name='email' label='Email' placeholder='email@email.com' />
              <Input name='foto_url' label='Link Foto Perfil' placeholder='URL Foto' />
              <div style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: 10
              }}>
                <button className='buttonCancelProfile' type='reset' onClick={() => navigate("/inicio")}>Cancelar</button>
                <button className='buttonSaveProfile' type='submit'>Salvar</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}