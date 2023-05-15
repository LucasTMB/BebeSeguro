import styles from "./HcgCalculator.module.css";

import { useState } from "react";

import { hcgCalculator } from "../../hooks/useCalculator";

import { Form, Button, Alert } from "react-bootstrap";

const HcgCalculator = () => {

  const [initialHcg, setInitialHcg] = useState("");
  const [currentHcg, setCurrentHcg] = useState("");
  const [iniDate, setIniDate] = useState("");
  const [curDate, setCurDate] = useState("");
  const [formError, setFormError] = useState("");
  const [results, setResults] = useState({
    resultDiff: "",
    resultDoublingTime: "",
    resultRaiseOneDay: "",
    resultRaiseTwoDays: "",
  });
  const [bool, setBool] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    if (!initialHcg || !currentHcg || !iniDate || !curDate) {
      setFormError("Por favor, preencha todos os campos!");
      setBool(false);
    }

    if (formError || setBool === false) return;

    const calculatorResults = hcgCalculator(initialHcg, currentHcg, iniDate, curDate);

    setResults(calculatorResults);
    setBool(true);
  }

  return (
    <div className={styles.hcg}>
      <div className={`${styles.page_titles} page_titles`}>
        <h2>Calculadora de níveis hCG</h2>
        <p>
          Nossa calculadora de beta hCG ajuda você a entender seus níveis do hormônio da gravidez durante o estágio inicial da gestação, além de monitorar seu progresso semanal, sem precisar sair de casa.
        </p>
      </div>
      <Form
        className={`${styles.calculator_form} calculator_form`}
        onSubmit={handleSubmit}
      >
        <div className="calculator_form_group">
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Informe seu nível de hCG inicial:
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="number"
              onChange={(e) => setInitialHcg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Informe seu nível de hCG atual:
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="number"
              onChange={(e) => setCurrentHcg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Informe a data do seu exame inicial:
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="date"
              onChange={(e) => setIniDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">
              Informe a data do seu exame atual:
            </Form.Label>
            <Form.Control
              className="calculator_form_input"
              required
              type="date"
              onChange={(e) => setCurDate(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className={styles.buttonsAndAlerts}>
          <Button
            type="submit"
            className={styles.calculateBtn}
          >
            Calcular níveis de hCG
          </Button>
          {formError &&
            <Alert
              className={styles.alert}
              variant="danger"
            >
              {formError}
            </Alert>
          }
          {bool &&
            <Alert
              className={styles.alert}
              variant="danger"
            >
              <ul>
                <li>{results.resultDiff}</li>
                <li>{results.resultDoublingTime}</li>
                <li>{results.resultRaiseOneDay}</li>
                <li>{results.resultRaiseTwoDays}</li>
              </ul>
            </Alert>
          }
        </div>
      </Form>
    </div>
  )
}

export default HcgCalculator