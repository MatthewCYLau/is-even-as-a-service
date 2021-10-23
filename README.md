# Is-Even as a Service

A reference project to build, and deploy a React Redux app in TypeScript

An app which returns whether a number is even, or odd

## Local development

```bash
npm i # install node dependencies
npm start # visit app at http://localhost:3000
```

## Build/Run locally with Docker

```bash
docker build -t iseven-as-a-service . # build Docker image for app
docker run -p 3000:8080 iseven-as-a-service # visit app at http://localhost:3000
```

## Linting

```bash
npm run lint
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)