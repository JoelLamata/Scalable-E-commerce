FROM ubuntu:24.04
LABEL authors="joel"

ENTRYPOINT ["top", "-b"]

#
# Build
#
FROM maven:3.9.10 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package
#
# Package stage
#
FROM openjdk:21
COPY --from=build /home/app/target/notificationservice-0.0.1-SNAPSHOT.jar /usr/local/lib/notification-service.jar
ENTRYPOINT ["java","-jar","/usr/local/lib/notification-service.jar"]