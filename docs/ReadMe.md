## Things required before runnng the deployment
1) Configure AWS CLI on your dev/deployment machine with aws credentials
2) Create deployment bucket on AWS S3
3) Login to your AWS account console, and create new pinpoint app, get the pinpoint app id
3) Rename config/aws_params.tp file to config/aws_params.yml
4) Go to terminal & cd to projetc root and run following commands
5) $ npm install
6) $ sls deploy



Before running deploy command, make sure that your account has permission for pinpoint, S3, CloudFormation, Lambda, APIGateway, CloudWatch
