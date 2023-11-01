const express = require('express');
const bodyParser = require('body-parser');
const kubernetesApi = require('@kubernetes/client-node');

const app = express();
const port = process.env.PORT || 30000;

app.use(bodyParser.json());

const kubernetesConfig = new kubernetesApi.KubeConfig();
kubernetesConfig.loadFromDefault();

// //Assingmnet 1

// app.get('/foo', (req, res) => {
//   res.send('bar');
// });

// app.post('/hello', (req, res) => {
//   const { name } = req.body;
//   res.send(`Hello ${name}!`);
// });

// app.get('/kill', (req, res) => {
//   process.exit(0);
// });

// //Assignment 2

// // Read from Kubernetes ConfigMap
// app.get('/configValue', async (req, res) => {
//   try{
//     const configval = process.env.configValue || "Something went wrong";

//     res.send(configval);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Read from Kubernetes Secret
// app.get('/secretValue', async (req, res) => {
//   try{
//     const secret = process.env.secretValue || "Something went wrong";

//     res.send(secret);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// app.get('/envValue', (req, res) => {
//   try{
//     const envValue = process.env.ENV_VALUE || 'DefaultEnvValue';

//     res.send(envValue);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

//Assignment 3
let postString="";

app.get('/foo', (req, res) => {
  res.send('bar');
});

app.post('/saveString',(req,res)=>{
  postString= req.body;
  res.sendStatus(200);
});

app.get('/getString',(req,res)=>{
  if(postString){
    res.send(postString);
  }
  else{
    res.sendStatus(404);
  }
});

app.get('/busywait',(req,res)=>{
  const time=Date.now();
  while(Date.now()-time<1800000000){}
  res.sendStatus(200);
  res.send("working")
});

app.get('/isAlive',(req,res)=>{
  res.send("True")
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});