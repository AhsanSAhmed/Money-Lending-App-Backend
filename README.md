# Money Lending Application Backend

## Overview

This backend service is designed for a money lending application similar to apps like Slice and KreditBee. It is implemented using Node.js, Express, and MongoDB. The service includes APIs for user signup, login, viewing user data, and borrowing money.

## Features

- **Approve Application During Signup**: Validates and approves/rejects user applications based on age and monthly salary.
- **Login API**: Authenticates users and generates JWT tokens for secure access.
- **Show User Data**: Retrieves user data including purchase power amount, phone number, email, date of registration, DOB, and monthly salary.
- **Borrow Money API**: Allows users to borrow money, updates purchase power amount, and calculates repayment details.

## Installation

### Prerequisites

- Node.js
- MongoDB
- Postman (for testing)

### Clone the Repository

```bash
git clone https://github.com/AhsanSAhmed/Money-Lending-App-Backend.git
cd Money-Lending-App-Backend
