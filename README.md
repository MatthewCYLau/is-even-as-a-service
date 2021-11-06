# Is-Even as a Service

![cicd cloud run workflow](https://github.com/MatthewCYLau/is-even-as-a-service/actions/workflows/cicd-cloud-run.yml/badge.svg)

A reference project to build a React Redux app in TypeScript, and deploy to GCP Cloud Run

An app which returns if a number is even

App URL [here](https://iseven-as-a-service-sxzla7yera-ew.a.run.app)

## Local development

```bash
npm i # install node dependencies
npm start # visit app at http://localhost:3000
```

## Deploy to Cloud Run

In the project root directory, run this command:

```bash
docker build -t gcr.io/<your_gcp_project_id>/iseven-as-a-service .
docker run -p 3000:8000 gcr.io/<your_gcp_project_id>/iseven-as-a-service:latest
docker push gcr.io/<your_gcp_project_id>/iseven-as-a-service:latest
gcloud run deploy --image=gcr.io/<your_gcp_project_id>/iseven-as-a-service:latest
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
