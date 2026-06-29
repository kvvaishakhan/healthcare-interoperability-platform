const express = require('express');
const app = express();

app.use(express.json());

let patients = [];
app.post('/patients', (req, res) => {
    const patient = req.body;
    patients.push(patient);

    console.log("Patient Created:", patient);
    console.log("EVENT: PatientCreated");

    res.status(201).send(patient);
});
app.get('/patients', (req, res) => {
    res.send(patients);
});
app.get('/health', (req, res) => {
    res.send("Patient Service is running");
});
app.listen(3000, () => {
    console.log('Patient Service running on port 3000');
});
