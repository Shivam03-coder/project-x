# Project Setup Guide

This document will guide you through the process of cloning the repository and setting up the project on your local system using `pnpm`.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher is recommended)
- [pnpm](https://pnpm.io/) (v7 or higher)
- [Git](https://git-scm.com/)

## Steps to Clone and Set Up the Project

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/Shivam03-coder/project-x-server.git
   ```


2. **Navigate to the Project Directory**

   Change to the directory of the cloned repository:

   ```bash
   cd <your project folder name>
   ```

   Replace `<project-directory>` with the name of the cloned repository folder.

3. **Install Dependencies**

   Run the following command to install the project dependencies:

   ```bash
   pnpm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project and add the required environment variables. Refer to the `.env.example` file (if available) for guidance.

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file to add your specific configuration.

5. **Run the Application**

   Start the application in development mode:

   ```bash
   pnpm dev
   ```

   The application should now be running. Open your browser and navigate to the URL displayed in the terminal (usually `http://localhost:3000`).

Thank you for contributing to the project!
