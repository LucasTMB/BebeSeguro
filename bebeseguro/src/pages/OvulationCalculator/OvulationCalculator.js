import styles from "./OvulationCalculator.module.css";

import { useState } from "react";

import { fertilePeriodCalculator } from "../../hooks/useCalculator";

import { Form, Button, Alert } from "react-bootstrap";

const OvulationCalculator = () => {
  const [cycle, setCycle] = useState("");
  const [date, setDate] = useState("");
  const [formError, setFormError] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    if (!cycle || !date) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    setResult(fertilePeriodCalculator(cycle, date));
  };

  return (
    <div className={styles.ovulation}>
      <div className={`${styles.page_titles} page_titles`}>
        <h2>Calculadora de ovulação</h2>
        <p>
          Saber quando você está ovulando ajuda a descobrir o melhor momento para engravidar. Saiba como descobrir o período fértil de um jeito fácil com a calculadora de ovulação do BebeSeguro.
        </p>
      </div>
      <Form
        className={`${styles.calculator_form} calculator_form`}
        onSubmit={handleSubmit}
      >
        <div className="calculator_form_group">
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Data da última menstrual:
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Duração do ciclo menstrual (em dias):
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="number"
              min={21}
              max={35}
              onChange={(e) => setCycle(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className={styles.buttonsAndAlerts}>
          <Button type="submit" className={styles.calculateBtn}>
            Calcular ovulação
          </Button>
          {formError && (
            <Alert className={styles.alert} variant="danger">
              {formError}
            </Alert>
          )}
          {result && (
            <Alert className={styles.alert} variant="danger">
              {result}
            </Alert>
          )}
        </div>
      </Form>
    </div>
  );
};

export default OvulationCalculator;