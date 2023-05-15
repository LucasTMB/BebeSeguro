import styles from "./DeliveryDateCalculator.module.css";

import { useState } from "react";

import { deliveryDateCalculator } from "../../hooks/useCalculator";

import { Form, Button, Alert } from "react-bootstrap";

const DeliveryDateCalculator = () => {
    const [lastDate, setLastDate] = useState("");
    const [menstrualCycle, setMenstrualCycle] = useState("");
    const [result, setResult] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormError("");

        if (!lastDate || !menstrualCycle) {
            setFormError("Por favor, preencha todos os campos!");
        }

        if (formError) return;

        setResult(deliveryDateCalculator(lastDate, menstrualCycle));
    }

    return (
        <div className={styles.delivery_date}>
            <div className={`${styles.page_titles} page_titles`}>
                <h2>Calculadora da data do parto</h2>
                <p>
                    Você acabou de receber um resultado positivo no teste de gravidez e agora tem muitas perguntas, tipo "como calcular quantas semanas de gravidez tenho?", "quando é a data prevista para o parto?" e "qual é a melhor ferramenta de cálculo gestacional?". Se você quiser planejar a data de sua gravidez antes de começar a tentar, nossa calculadora da data do parto pode ajudar. Usando a data da última menstruação, ela pode calcular sua gravidez e, com base na data prevista para o parto, estimar a data da concepção.
                </p>
            </div>
            <Form
                className={`${styles.calculator_form} calculator_form`}
                onSubmit={handleSubmit}
            >
                <div className="calculator_form_group">
                    <Form.Group className="mb-3">
                        <Form.Label className="label">
                            Data da última menstruação:
                        </Form.Label>
                        <Form.Control
                            className="calculator_form_input"
                            type="date"
                            required
                            onChange={(e) => setLastDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="label">
                            Duração média do ciclo menstrual (em dias):
                        </Form.Label>
                        <Form.Control
                            className="calculator_form_input"
                            type="number"
                            required
                            onChange={(e) => setMenstrualCycle(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className={styles.buttonsAndAlerts}>
                    <Button
                        type="submit"
                        className={styles.calculateBtn}
                    >
                        Calcular data do parto
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

export default DeliveryDateCalculator