FROM openjdk:17-jdk-alpine
RUN addgroup -S nocountry && adduser -S spring -G nocountry
USER spring:nocountry
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app-intercambio-libros-0.0.1-SNAPSHOT.jar
EXPOSE 8080/tcp
ENTRYPOINT [ "java", "-jar", "/app-intercambio-libros-0.0.1-SNAPSHOT.jar" ]
