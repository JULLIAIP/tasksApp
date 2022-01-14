import {
  Button,
  makeStyles,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { Label } from "@material-ui/icons";
import { Formik } from "formik";
import React from "react";
import { useTasksGlobalContext } from "../../hooks/contextTask";
import { InputContain, WrapperModal } from "./style";

function ModalNewTask() {
  const { isOpen, handleSetIsOpen, onSubmitTask } = useTasksGlobalContext();

  return (
    <Modal
      open={isOpen}
      onClose={handleSetIsOpen}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <WrapperModal>
        <Button className="button-close" onClick={handleSetIsOpen}>
          X
        </Button>
        <Formik
          onSubmit={onSubmitTask}
          initialValues={{
            title: "",
            description: "",
            team: "",
            hours: "",
          }}
          render={({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <InputContain>
                <h2>Título: </h2>
                <TextField
                  name="title"
                  type="text"
                  title="Título"
                  value={values.title}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </InputContain>
              <InputContain>
                <h2> Descrição:</h2>

                <TextField
                  name="description"
                  type="text"
                  title="Descrição"
                  value={values.description}
                  onChange={handleChange}
                  variant="outlined"
                />
              </InputContain>
              <InputContain>
                <h2>Pessoas:</h2>

                <TextField
                  name="team"
                  type="number"
                  value={values.team}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </InputContain>
              <InputContain>
                <h2> Horas:</h2>

                <TextField
                  name="hours"
                  type="time"
                  value={values.hours}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </InputContain>
              <Button
                className="button-save"
                type="submit"
                variant="contained"
                title="entrar"
                color="primary"
              >
                SALVAR
              </Button>
            </form>
          )}
        />
      </WrapperModal>
    </Modal>
  );
}
export default ModalNewTask;
