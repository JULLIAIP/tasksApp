import { Button, TextField } from "@material-ui/core";
import { Formik } from "formik";
import { FormContaier, ImageContainer, WrapperLogin } from "./style";
import image from "../../assets/initial.jpg";
import { useState } from "react";
import { useTasksGlobalContext } from "../../hooks/contextTask";

function LoginPage() {
  const { onSubmitCards } = useTasksGlobalContext();
  const [actualPage, setActualPage] = useState("login");

  return (
    <WrapperLogin>
      <FormContaier>
        <h1>BEM VINDO AO TO-DO-LIST</h1>
        <Formik
          onSubmit={onSubmitCards}
          initialValues={{
            name: "",
            password: "",
          }}
          render={({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                type="text"
                title="nome"
                placeholder="USUÁRIO"
                value={values.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />

              {actualPage === "singUp" && (
                <TextField
                  name="email"
                  type="email"
                  title="email"
                  placeholder="EMAIL"
                  value={values.email}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              )}

              <TextField
                name="password"
                type="password"
                title="senha"
                placeholder="SENHA"
                value={values.password}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                title="entrar"
                color="primary"
              >
                {actualPage === "login" ? "ENTRAR" : "CADASTRAR"}
              </Button>
            </form>
          )}
        />
        {actualPage === "login" ? (
          <span onClick={() => setActualPage("singUp")}>Ou Cadastre-se</span>
        ) : (
          <span onClick={() => setActualPage("login")}>Já tenho uma Conta</span>
        )}
      </FormContaier>

      <ImageContainer>
        <img src={image} alt="foto de pessoas lendo uma lista de tarefas" />
      </ImageContainer>
    </WrapperLogin>
  );
}
export default LoginPage;
