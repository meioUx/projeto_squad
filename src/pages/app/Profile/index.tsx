import { Header } from '../../../components/Header'
import imageUser from "../../../assets/imageUser.jpg"
import "./profile.style.css"
import { useState } from 'react'
import { Input } from '../../../components/Input'
import { NavLink } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiPencil, mdiBell, mdiChevronLeft, mdiLock, mdiCog, mdiHelpCircleOutline } from '@mdi/js';

export function Profile() {
  const [profile, setProfile] = useState()

  function handleSubmitPost(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson)
    setProfile(formJson)
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
            Configurações
          </NavLink>
          <NavLink
            to={"/profile"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#1C1C1C',
              fontWeight: '900',
              alignItems: 'center',
              gap: 5
            }}
          >
            <Icon path={mdiPencil} size={0.6} />
            Editar Perfil
          </NavLink>
          <NavLink
            to={"/profile"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#858585',
              fontWeight: 'bold',
              alignItems: 'center',
              gap: 5
            }}
          >
            <Icon path={mdiBell} size={0.6} />
            Notificação
          </NavLink>
          <NavLink
            to={"/profile"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#858585',
              fontWeight: 'bold',
              alignItems: 'center',
              gap: 5
            }}
          >
            <Icon path={mdiLock} size={0.6} />
            Segurança
          </NavLink>
          <NavLink
            to={"/profile"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#858585',
              fontWeight: 'bold',
              alignItems: 'center',
              gap: 5
            }}
          >
            <Icon path={mdiCog} size={0.6} />
            Aparência
          </NavLink>
          <NavLink
            to={"/profile"}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: '#858585',
              fontWeight: 'bold',
              alignItems: 'center',
              gap: 5
            }}
          >
            <Icon path={mdiHelpCircleOutline} size={0.6} />
            Ajuda
          </NavLink>
        </div>
        <div
          className='containerEditProfile'
        >
          <div className='headerBannerProfile'>
            <h1>
              Editar Perfil
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
          <form method="post" onSubmit={handleSubmitPost}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 10
            }}>
              <div style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10
              }}>
                <Input name='name' label='Primeiro Nome' placeholder='Meu nome' />
                <Input name='lastname' label='Sobrenome' placeholder='Meu sobrenome' />
              </div>
              <Input name='email' label='Email' placeholder='Meuemail@email.com' />
              <Input name='phone' label='Numero de contato' placeholder='(00)00000-0000' />
              <div style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10
              }}>
                <Input name='city' label='Cidade' placeholder='Cidade' />
                <Input name='state' label='Estado' placeholder='Estado' />
              </div>
              <Input name='password' label='Senha' type='password' placeholder='Digite sua senha' />
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