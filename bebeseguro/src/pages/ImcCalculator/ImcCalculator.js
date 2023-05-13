import styles from "./ImcCalculator.module.css";

import { useState } from "react";

import { imcCalculator } from "../../hooks/useCalculator";

import { Form, Button } from "react-bootstrap";

const ImcCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [weeks, setWeeks] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            Peso (em kg):
          </Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Altura (em cm):
          </Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setHeight(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Semanas de gestação:
          </Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setWeeks(e.target.value)}
          />
        </Form.Group>
        <Button onClick={() => setResult(imcCalculator(weight, height, weeks))}>
          Calcular
        </Button>
        <p>{result}</p>
      </Form>
    </div>
  )
}

export default ImcCalculator