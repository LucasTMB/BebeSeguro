import styles from "./HcgCalculator.module.css";

import { useState } from "react";

import { hcgCalculator } from "../../hooks/useCalculator";

import { Form, Button } from "react-bootstrap";

const HcgCalculator = () => {

  const [initialHcg, setInitialHcg] = useState("");
  const [currentHcg, setCurrentHcg] = useState("");
  const [iniDate, setIniDate] = useState("");
  const [curDate, setCurDate] = useState("");
  const [results, setResults] = useState({
    resultDiff: "",
    resultDoublingTime: "",
    resultRaiseOneDay: "",
    resultRaiseTwoDays: "",
  });

  const handleCalculate = () => {
    const calculatorResults = hcgCalculator(initialHcg, currentHcg, iniDate, curDate);
    
    setResults(calculatorResults);
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            Informe seu nível de hCG inicial:
          </Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setInitialHcg(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Informe seu nível de hCG atual:
          </Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setCurrentHcg(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Informe a data do seu exame inicial:
          </Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setIniDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Informe a data do seu exame atual:
          </Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setCurDate(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleCalculate}>
          Calcular
        </Button>
        <p>{results.resultDiff}</p>
        <p>{results.resultDoublingTime}</p>
        <p>{results.resultRaiseOneDay}</p>
        <p>{results.resultRaiseTwoDays}</p>
      </Form>
    </div>
  )
}

export default HcgCalculator