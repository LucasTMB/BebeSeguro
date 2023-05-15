import styles from "./GestAgeCalculator.module.css";

import { useState } from "react";

import { gestAgeCalculator } from "../../hooks/useCalculator";

import { Form, Button, Alert } from "react-bootstrap";

const GestAgeCalculator = () => {
  const [dum, setDum] = useState("");
  const [today, setToday] = useState("");
  const [result, setResult] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    if (!dum || !today) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    setResult(gestAgeCalculator(dum, today));
  }

  return (
    <div className={styles.gest_age}>
      <div className={`${styles.page_titles} page_titles`}>
        <h2>Calculadora de idade gestacional</h2>
        <p>
          A idade gestacional é o tempo de gravidez contado em semanas e dias a partir do primeiro dia da última menstruação antes da concepção. Nossa calculadora de idade gestacional permite que você calcule a idade gestacional com base na data do primeiro dia do último período menstrual e a data atual.
        </p>
      </div>
      <Form
        className={`${styles.calculator_form} calculator_form`}
        onSubmit={handleSubmit}
      >
        <div className="calculator_form_group">
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Data do primeiro dia do último período menstrual:
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="date"
              onChange={(e) => setDum(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Data atual:
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="date"
              onChange={(e) => setToday(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className={styles.buttonsAndAlerts}>
          <Button
            type="submit"
            className={styles.calculateBtn}
          >
            Calcular idade gestacional
          </Button>
          {formError &&
            <Alert
              className={styles.alert}
              variant="danger"
            >
              {formError}
            </Alert>
          }
          {result &&
            <Alert
              className={styles.alert}
              variant="danger"
            >
              {result}
            </Alert>
          }
        </div>
      </Form>
    </div>
  )
}

export default GestAgeCalculator