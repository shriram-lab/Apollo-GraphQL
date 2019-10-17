import traineeQuery from "./trainee/index";
import userQuery from "./user/index";
import { mergeTypes } from 'merge-graphql-schemas';

const QueriesTypes = mergeTypes([traineeQuery, userQuery], { all: true });


export default QueriesTypes;