Cloud Deployment via cloudformation cli
Refer to https://keyholesoftware.com/2019/05/13/aws-lambda-with-nestjs/

Cloud Deployment via serverless - TODO

Build and deploy steps
npm install
npm run build
npm prune --production (reduces zipfile size from 111.32MB to 48.91 MB)
sls deploy -v


Progress:
Created Dynamo DB tables
Next, Do Create, Scan, GetItem tasks