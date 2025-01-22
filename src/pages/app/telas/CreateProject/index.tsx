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

export function CreateProject() {
  const navigate = useNavigate()
  const [squads, setSquads] = useState<ISquad[]>([])

  async function handleSubmitProject(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if (!formJson.nome || !formJson.descricao || !formJson.tecnologias || !formJson.status || !formJson.squad_id) {
      alert(`Favor, verificar se todos os campos foram preenchidos`);
      return;
    }
    try {
      const response = await api.post(endpoint.projetos, formJson);
      console.log(response.data)
      alert(`Criado Projeto com sucesso`)
      navigate("/inicio")
    } catch (error) {
      console.log(JSON.stringify(error))
      alert(`Erro ao criar o projeto\n${error.message}`)
    }
  }

  useEffect(() => {
    (async () => {
      const response = await api.get<ISquad[]>(endpoint.squads)
      console.log(response.data)
      if (response.data.length < 1) {
        alert('Precisa criar um squad primeiro para poder criar um projeto')
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
              color: '#1C1C1C',
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
              Criar Projeto
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
          <form method="post" onSubmit={handleSubmitProject}>
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
              <Input name='nome' label='Nome Projeto' placeholder='Nome Projeto' />
              <Input name='descricao' label='Descrição' placeholder='Sistema e-comerce' />
              <Input name='tecnologias' label='Tecnologias' placeholder='React, Figma, Canvas, PHP, Java...' />
              <Input name='status' label='Status' placeholder='Status do Projeto' />
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