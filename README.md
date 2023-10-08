# COMP4016

#All the commands that were used for this assignment
#node commands
node init
#docker commands for running
docker login 
docker build -t assign1-image:assign1 .
docker tag assign1-image:assign1 mamb0/assign1-image
docker push mamb0/assign1-image
docker run -p 8080:8080 mamb0/assign1-image
#kubernetis commands
kubectl apply -f <filename.yaml>

expected output with commands:

