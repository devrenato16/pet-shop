import { useState, useImperativeHandle, forwardRef } from "react";
import { Modal, TextInput, PasswordInput, Button, Text } from "@mantine/core";

const LoginComponent = forwardRef((props, ref) => {
  const [opened, setOpened] = useState(false);
  const [mode, setMode] = useState("login"); // 'login' ou 'register'

  // Expondo a função openModal para ser acessada externamente
  useImperativeHandle(ref, () => ({
    openModal: (type) => {
      setMode(type); // Define o modo (login ou register)
      setOpened(true);
    },
  }));

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (mode === "login") {
      console.log("Dados de login:", data);
      alert(`Bem-vindo, ${data.email}!`);
    } else {
      console.log("Dados de cadastro:", data);
      alert(`Conta criada para ${data.email}!`);
    }

    setOpened(false); // Fecha o modal após o envio
  };

  return (
    <>
      {/* Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={mode === "login" ? "Entrar" : "Criar Conta"}
        centered
      >
        <form onSubmit={handleSubmit}>
          {/* Campos adicionais para cadastro */}
          {mode === "register" && (
            <>
              <TextInput
                mt="sm"
                label="Nome"
                placeholder="Digite seu nome"
                name="name"
                required
              />
            </>
          )}
          {/* Campo de E-mail */}
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            name="email"
            required
          />

          {/* Campos adicionais para cadastro */}
          {mode === "register" && (
            <>
              <TextInput
                mt="sm"
                label="Confirme o E-mail"
                placeholder="Confirme seu e-mail"
                name="confirmEmail"
                required
              />
            </>
          )}
          {/* Campo de Senha */}
          <PasswordInput
            mt="sm"
            label="Senha"
            placeholder="Digite sua senha"
            name="password"
            required
          />

          {/* Botão de Envio */}
          <Button fullWidth type="submit" mt="md">
            {mode === "login" ? "Entrar" : "Criar Conta"}
          </Button>
        </form>
      </Modal>
    </>
  );
});

export default LoginComponent;
