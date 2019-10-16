import path from 'path'
import mergeGraphqlSchemas from 'merge-graphql-schemas'
const fileLoader = mergeGraphqlSchemas.fileLoader
const mergeTypes = mergeGraphqlSchemas.mergeTypes
 
const tranieetypesArray = fileLoader(path.join(__dirname, 'module/**/*.graphql'))
 
export default mergeTypes(tranieetypesArray, { all: true })