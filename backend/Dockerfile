FROM gradle:8.8-jdk17 AS builder
WORKDIR /app
COPY . .
RUN gradle clean build --no-daemon

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/build .
COPY --from=builder /app/build/libs/*.jar libs/app.jar
COPY .env .
CMD ["java", "-jar", "libs/app.jar"]