import "@mantine/core/styles.css";
import React from "react";
import { List, Text } from "@mantine/core";

function ServiceList({ services }) {
  return (
    <div>
      <Text weight={700} size="lg" mb="md">
        Serviços Disponíveis
      </Text>
      <List>
        {services.map((service) => (
          <List.Item key={service.id}>
            {service.name} - R$ {service.price.toFixed(2)}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default ServiceList;
