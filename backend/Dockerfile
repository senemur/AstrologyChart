# Use the official .NET SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copy csproj files and restore dependencies
COPY src/AstrologyChart.Domain/AstrologyChart.Domain.csproj src/AstrologyChart.Domain/
COPY src/AstrologyChart.Application/AstrologyChart.Application.csproj src/AstrologyChart.Application/
COPY src/AstrologyChart.Infrastructure/AstrologyChart.Infrastructure.csproj src/AstrologyChart.Infrastructure/
COPY src/AstrologyChart.API/AstrologyChart.API.csproj src/AstrologyChart.API/

RUN dotnet restore src/AstrologyChart.API/AstrologyChart.API.csproj

# Copy the rest of the source code
COPY src/ src/

# Build and publish the application
WORKDIR /app/src/AstrologyChart.API
RUN dotnet publish -c Release -o /app/publish

# Use the official ASP.NET Core runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .

# Expose the port the app runs on
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "AstrologyChart.API.dll"]
