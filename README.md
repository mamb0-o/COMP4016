# COMP4016

#All the commands that were used for this assignment
#node commands
node init
#docker commands for running
docker login 
docker build -t assign1-image:assign1 .
docker tag assign1-image:assign1 mamb0/assign1-image
docker push mamb0/assign1-image
docker run -p 8080:8080 mamb0/assign1-images

expected output with commands:
command 1: curl localhost:8080/foo
output 1: bar
command 2:
windows: curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST --data "{\"name\":\"Prabh\"}" localhost:8080/hello
mac: curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST --data "{"name":"Prabh"}" localhost:8080/hello
output 2: Hello Prabh!
command 3: curl localhost:8080/kill
output 3: curl: (52) Empty reply from server
