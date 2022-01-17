import { Button, TextField } from "@material-ui/core";
import { Formik } from "formik";
import { FormContaier, ImageContainer, WrapperLogin } from "./style";
import image from "../../assets/initial.jpg";
import { useState } from "react";
import { useTasksGlobalContext } from "../../hooks/contextTask";
import { createNew, getById } from "../../services/endpoints";

function LoginPage() {
  // const { onSubmitCards } = useTasksGlobalContext();
  const [actualPage, setActualPage] = useState("login");

  const onSubmitCards = (values, actions) => {
    if (values.email) {
      createNew({
        path: "user",
        bodyData: values,
      });
      console.log("cadastro");
    } else {
      console.log("login");
    }
    console.log({ values }, { actions });
  };

  return (
    <WrapperLogin>
      <FormContaier>
        <h1>BEM VINDO AO TO-DO-LIST</h1>
        <Formik
          onSubmit={onSubmitCards}
          initialValues={{
            name: "",
            pass: "",
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
                required
              />

              {actualPage === "singUp" && (
                <>
                  <TextField
                    name="email"
                    type="email"
                    title="email"
                    placeholder="EMAIL"
                    value={values.email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    name="gender"
                    type="gender"
                    title="Gênero"
                    placeholder="Gênero"
                    value={values.gender}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                  />
                </>
              )}

              <TextField
                name="pass"
                type="password"
                title="senha"
                placeholder="SENHA"
                value={values.pass}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
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
          <span
            onClick={() => {
              setActualPage("singUp");
            }}
          >
            Ou Cadastre-se
          </span>
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
