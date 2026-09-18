// download aws DynamoDB CLI from the official AWS website. You can find the installation instructions for different operating systems (Windows, macOS, Linux) on the AWS CLI documentation page.
//(2)Table level Operations with AWS CLI
//Commond run in vs code terminal to create table in DynamoDB using AWS CLI
// aws dynamodb list-tables
// aws dynamodb describe-table help 
// aws dynamodb create-table --table-name td_notes_test --attribute-definitions AttributeName=user_id,AttributeType=S AttributeName=timestamp,AttributeType=N --key-schema AttributeName=user_id,KeyType=HASH AttributeName=timestamp,KeyType=RANGE --billing-mode PAY_PER_REQUEST --region ap-south-1
//aws dynamodb describe-table --table-name td_notes_test
// aws dynamodb delete-table --table-name td_notes_test 

//Lec(39)Write Operations: Item Level Operations with AWS CLI
// Write Operations: Item Level Operations with AWS CLI Commond
// (1)aws dynamodb put-item --table-name td_notes_test --item file://item.json 
//(2)For Update Item in DynamoDB using AWS CLI
// aws dynamodb update-item --table-name td_notes_test --key file://key.json --update-expression "SET #t = :t" --expression-attribute-names file://attribute-name.json --expression-attribute-values file://attribute-value.json 
//(3)For Delete Item in DynamoDB using AWS CLI
// aws dynamodb delete-item --table-name td_notes_test --key file://key.json
// aws dynamodb batch-write-item --request-items file://items.json

// Read Operations: Item Level Operations with AWS CLI
// (1)aws dynamodb get-item --table-name td_notes_test --key file://key.json
// (2)aws dynamodb scan --table-name td_notes_test
// (3)aws dynamodb query --table-name td_notes_test --key-condition-expression "user_id = :uid" --expression-attribute-values file://attribute-value.json