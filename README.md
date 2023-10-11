# COMP4016

#All the commands that were used for this assignment
#node commands
node init
#docker commands for running
docker login 
docker build -t assign2-imag:assign2 .
docker tag assign2-imag:assign2 mamb0/assign2-image
docker push mamb0/assign2-image
docker run -p 30000:30000 mamb0/assign2-image
#kubernetis commands
kubectl apply -f <filename.yaml>
kubectl create namespace <your-username>

#namespace was created and used
mamb0



