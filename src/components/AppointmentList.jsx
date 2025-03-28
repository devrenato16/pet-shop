import React from "react";
import "@mantine/core/styles.css";
import { Table, Button } from "@mantine/core";

function AppointmentList({ appointments, onDelete }) {
  const rows = appointments.map((app) => (
    <tr key={app.id}>
      <td>{app.name}</td>
      <td>{app.service}</td>
      <td>
        {new Date(app.dateTime).toLocaleString()}{" "}
        {/* Converte ISO para formato legível */}
      </td>
      <td>
        <Button color="red" onClick={() => onDelete(app.id)}>
          Excluir
        </Button>
      </td>
    </tr>
  ));

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Serviço</th>
          <th>Data e Horário</th> {/* Atualiza o cabeçalho */}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default AppointmentList;
