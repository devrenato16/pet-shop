import React from "react";
import "@mantine/dates/styles.css";
import { Container, Title, Divider } from "@mantine/core";
import ServiceList from "../../components/ServiceList";
import AppointmentForm from "../../components/AppointmentForm";

import classes from "./clientPage.module.css";

function ClientPage() {
  const services = [
    { id: 1, name: "Banho", price: 50 },
    { id: 2, name: "Tosa", price: 40 },
    { id: 3, name: "Consulta Veterinária", price: 100 },
  ];

  return (
    <Container className={classes.container} size="xl">
      <Title order={2} align="center" mb="xl">
        Bem-vindo ao PetShop Neno
      </Title>
      <ServiceList services={services} />
      <Divider my="xl" />
      <AppointmentForm />
    </Container>
  );
}

export default ClientPage;
