# Project Documentation

## Overview

This is a full-stack application with automated end-to-end testing, containerized deployment, and database seeding capabilities. The project consists of a backend API and frontend application, both designed to work together seamlessly through Docker Compose.

## Project Structure

```
├── backend/               # Backend API application  
├── frontend/              # Frontend application  
├── docker-compose.yaml    # Docker orchestration configuration  
└── README.md              # Project documentation  
```

## Quick Start

### Prerequisites

- Docker
- Docker Compose

### Running the Application

To start the entire application stack with pre-populated database:

```bash
docker  compose up
```

This single command will:

- Build and start all services (backend, frontend, database)
- Automatically populate the database with seed data
- Set up the complete development environment

The application will be ready to use once all containers are running.
