# HNG Public API

This is a simple public API for HNG Internship.

## API Endpoint

- **GET /** → Returns JSON with email, current date-time, and GitHub repo URL.

### Example Response

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## How to Run Locally

1. Clone the repository:

```sh
   git clone https://github.com/bunmijemiyo/gopher.git
   cd your-repo
```

2. Install dependencies:

```sh
   npm install
```

3. Run the API:

```sh
   node index.js
```

4. Open in browser or use Postman:

```sh
   http://localhost:3000/
```

## Deployment

### Deployed on Render/Vercel/Railway at:

```sh
  <your-deployment-url>
```
