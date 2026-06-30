const express = require('express');
const app = express();

app.use(express.json());

let prescriptions = [];

// Create prescription
app.post('/prescriptions', (req, res) => {
    const prescription = req.body;
    prescriptions.push(prescription);

    console.log("Prescription Created:", prescription);
    res.status(201).send(prescription);
});

// Get all prescriptions
app.get('/prescriptions', (req, res) => {
    res.send(prescriptions);
});

// Health check
app.get('/health', (req, res) => {
    res.send("Prescription Service is running");
});

app.listen(3001, () => {
    console.log('Prescription Service running on port 3001');
});
