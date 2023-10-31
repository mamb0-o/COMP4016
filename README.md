# COMP4016
Assignment 3:
Repository: https://github.com/mamb0-o/COMP4016/tree/Assignment-3 "It's private, send you an invite"- note: its branch Assingment 3, main is first Assignment
Image: mamb0/assign3-image , command to pull- docker docker pull mamb0/assign3-image:latest
Kubernetis namespace: mamb0
Command: docker run -p 30000:30000 mamb0/assign3-image
Commments: # all the docker commands
docker login 
docker build -t assign3-image:assign3 .
docker tag assign3-image:assign3 mamb0/assign3-image
docker push mamb0/assign3-image
docker run -p 30000:30000 mamb0/assign3-image
#node command
npm init
npm install
#kubernetis commands
kubectl create -f ./namespace.yaml
kubectl apply -f <filename.yaml>
