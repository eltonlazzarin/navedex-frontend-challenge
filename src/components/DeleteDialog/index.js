import React from 'react';

import api from '../../services/api';

import Button, { LightButton } from '../Button/styles';

import Container from './styles';

export default function DeleteDialog({
  setShowModal,
  setDeleteNaver,
  setConfirmation,
  id,
}) {
  async function getNaverData() {
    const token = localStorage.getItem('@Navedex:Token');

    await api.delete(`navers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setDeleteNaver(false);
    setConfirmation(true);
    setShowModal(false);
  }

  return (
    <Container>
      <div>
        <h2>Excluir Naver</h2>
        <p>Tem certeza que deseja excluir este Naver?</p>

        <footer>
          <LightButton onClick={() => setDeleteNaver(false)}>
            Cancelar
          </LightButton>
          <Button onClick={getNaverData}>Excluir</Button>
        </footer>
      </div>
    </Container>
  );
}
