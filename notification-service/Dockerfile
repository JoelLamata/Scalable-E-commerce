FROM maven:3.9.10 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

FROM openjdk:21
COPY --from=build /home/app/target/notificationservice-0.0.1-SNAPSHOT.jar /usr/local/lib/notification-service.jar
ENTRYPOINT ["java","-jar","/usr/local/lib/notification-service.jar"]