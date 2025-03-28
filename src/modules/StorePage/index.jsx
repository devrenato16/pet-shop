import React from "react";
import "@mantine/core/styles.css";
import { Container, Title } from "@mantine/core";
import AppointmentList from "../../components/AppointmentList";

function StorePage() {
  // Carrega os agendamentos do localStorage ao montar a página
  const [appointments, setAppointments] = React.useState(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments"));
    return savedAppointments || [];
  });

  // Função para excluir um agendamento
  function handleDelete(id) {
    const updatedAppointments = appointments.filter((app) => app.id !== id);

    // Atualiza o estado local
    setAppointments(updatedAppointments);

    // Atualiza o localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  }

  return (
    <Container size="sm">
      <Title order={2} align="center" mb="xl">
        Gerenciamento de Agendamentos
      </Title>
      <AppointmentList appointments={appointments} onDelete={handleDelete} />
    </Container>
  );
}

export default StorePage;
