const { generateService } = require('@umijs/openapi')

generateService({
  schemaPath: './config/openapi.json',
  serversPath: './src/services/sgin',
})