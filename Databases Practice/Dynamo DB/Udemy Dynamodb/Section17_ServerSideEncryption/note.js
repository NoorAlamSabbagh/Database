// // Lec82: Logging DynamoDB API Calls with AWS CloudTrail
// #AWS CloudTrail
// CloudTrail = AWS service that records and tracks API activity in your AWS account.
// It tells you:
// Who performed an action
// What action was performed
// When it happened
// From where it happened
// Which AWS resource was affected
// ### Logging DynamoDB API Calls with CloudTrail
// CloudTrail can record DynamoDB API calls such as:
// CreateTable
// PutItem
// GetItem
// UpdateItem
// DeleteItem
// Scan
// Query

// Example:
// User → PutItem → DynamoDB
//               ↓
//           CloudTrail logs
//               ↓
//       Who / When / What / Where
// Remember:
// DynamoDB stores your data; CloudTrail records who did what with AWS APIs.
