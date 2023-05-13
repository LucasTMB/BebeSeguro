import styles from "./GestAgeCalculator.module.css";

import { useState } from "react";

import { gestAgeCalculator } from "../../hooks/useCalculator";

import { Form, Button } from "react-bootstrap";

const GestAgeCalculator = () => {
  const [dum, setDum] = useState("");
  const [today, setToday] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>Calculadora de idade gestacional</h1>
      <p></p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            Data do primeiro dia do último período menstrual:
          </Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setDum(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Data atual:
          </Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setToday(e.target.value)}
          />
        </Form.Group>
        <Button onClick={() => setResult(gestAgeCalculator(dum, today))}>
          Calcular
        </Button>
        <p>{result}</p>
      </Form>
    </div>
  )
}

export default GestAgeCalculator