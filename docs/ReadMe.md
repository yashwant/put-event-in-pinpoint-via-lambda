Things required before running the deployment
- Configure AWS CLI on your dev/deployment machine with AWS credentials
- Create deployment bucket on AWS S3
- Login to your AWS account console, and create new pinpoint app, get the pinpoint app id
- Rename config/aws_params.tp file to config/aws_params.yml and change parameter values accordingly
- Go to terminal & cd to project root and run following commands
- $ npm install
- $ sls deploy

Before running deploy command, make sure that your account has permission for pinpoint, S3, CloudFormation, Lambda, APIGateway, CloudWatch