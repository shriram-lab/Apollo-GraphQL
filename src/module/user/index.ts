import path from 'path'
import mergeGraphqlSchemas from 'merge-graphql-schemas'
const fileLoader = mergeGraphqlSchemas.fileLoader
const mergeTypes = mergeGraphqlSchemas.mergeTypes
 
const usertypesArray = fileLoader(path.join(__dirname, 'module/**/*.graphql'))
 
export default mergeTypes(usertypesArray, { all: true })