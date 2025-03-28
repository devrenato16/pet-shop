import React from "react";
import { TextInput, Select, Button, Group, Alert } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

function AppointmentForm() {
  const [name, setName] = React.useState("");
  const [service, setService] = React.useState("");
  const [dateTime, setDateTime] = React.useState(null);
  const [error, setError] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !service || !dateTime) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const isTimeOccupied = existingAppointments.some(
      (app) => new Date(app.dateTime).getTime() === dateTime.getTime()
    );

    if (isTimeOccupied) {
      setError(
        "Este horário já está ocupado. Por favor, escolha outro horário."
      );
      return;
    }

    const newAppointment = {
      id: Date.now(),
      name,
      service,
      dateTime: dateTime.toISOString(),
    };

    const updatedAppointments = [...existingAppointments, newAppointment];

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    alert(
      `Agendamento realizado:\nNome: ${name}\nServiço: ${service}\nData e Horário: ${dateTime.toLocaleString()}`
    );
    setName("");
    setService("");
    setDateTime(null);
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nome"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        mb="md"
      />
      <Select
        label="Serviço"
        placeholder="Escolha um serviço"
        data={[
          { value: "banho", label: "Banho" },
          { value: "tosa", label: "Tosa" },
          { value: "consulta", label: "Consulta Veterinária" },
        ]}
        value={service}
        onChange={setService}
        required
        mb="md"
      />
      <DateTimePicker
        label="Data e Horário"
        placeholder="Escolha a data e horário"
        value={dateTime}
        onChange={setDateTime}
        required
        mb="md"
        locale="pt-br"
      />
      {error && (
        <Alert color="red" mb="md">
          {error}
        </Alert>
      )}
      <Group position="right">
        <Button type="submit">Agendar</Button>
      </Group>
    </form>
  );
}

export default AppointmentForm;
