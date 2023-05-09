import styles from "./DeliveryDateCalculator.module.css";

import { useState } from "react";

import { Form, Button } from "react-bootstrap";

const DeliveryDateCalculator = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                        Data da última menstruação:
                    </Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default DeliveryDateCalculator