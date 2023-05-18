import styles from "./ImcCalculator.module.css";

import { useState } from "react";

import { imcCalculator } from "../../hooks/useCalculator";

import { Form, Button, Alert } from "react-bootstrap";

const ImcCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [weeks, setWeeks] = useState("");
  const [result, setResult] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    if (!weight || !height || !weeks) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    setResult(imcCalculator(weight, height, weeks));
  }

  return (
    <div className={styles.imc}>
      <div className={`${styles.page_titles} page_titles`}>
        <h2>Calculadora de IMC para gestantes</h2>
        <p>
          O índice de massa corporal (IMC) é uma medida que usa sua altura e peso para saber se seu peso é saudável. O IMC leva em consideração as variações naturais na forma do corpo, dando uma faixa de peso saudável para uma determinada altura. Entretanto, para dizer se você é saudável os profissionais de saúde não utilizam exclusivamente o seu IMC. Em caso de dúvida consulte o seu médico.
        </p>
      </div>
      <Form
        className={`${styles.calculator_form} calculator_form`}
        onSubmit={handleSubmit}
      >
        <div className="calculator_form_group">
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Peso (em kg):
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="number"
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Altura (em cm):
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="number"
              onChange={(e) => setHeight(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Semanas de gestação:
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="number"
              min={6}
              onChange={(e) => setWeeks(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className={styles.buttonsAndAlerts}>
          <Button
            type="submit"
            className={styles.calculateBtn}
          >
            Calcular IMC
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

export default ImcCalculator