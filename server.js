const express = require('express');
const bodyParser = require('body-parser');
const kubernetesApi = require('@kubernetes/client-node');

const app = express();
const port = 30000;

app.use(bodyParser.json());

const kubernetesConfig = new kubernetesApi.KubeConfig();
kubernetesConfig.loadFromDefault();
const k8 = kubernetesConfig.makeApiClient(kubernetesApi.CoreV1Api);

//Assingmnet 1

app.get('/foo', (req, res) => {
  res.send('bar');
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}!`);
});

app.get('/kill', (req, res) => {
  process.exit(0);
});

//Assignment 2

// Read from Kubernetes ConfigMap
app.get('/configValue', async (req, res) => {
  try {
    const configMapName ='assignment2config';
    const namespace ='mamb0'; 

    const configMapResponse = await k8.readNamespacedConfigMap(configMapName, namespace);
    const configValue = configMapResponse.body.data.configValue;

    res.send(configValue);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Read from Kubernetes Secret
app.get('/secretValue', async (req, res) => {
  try{
    const secretName ='assignment2secret'; 
    const namespace ='mamb0';

    const secretResponse = await k8.readNamespacedSecret(secretName, namespace);
    const secretValue = Buffer.from(secretResponse.body.data.secretValue, 'base64').toString();

    res.send(secretValue);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.get('/envValue', (req, res) => {
  try{
    const envValue = process.env.value || 'DefaultEnvValue';

    res.send(envValue);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
