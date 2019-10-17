import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import fs from 'fs';

const tranieetypesArray = [fs.readFileSync('src/module/trainee/types.graphql','utf-8')];
const traineeQuery = mergeTypes(tranieetypesArray, { all: true });

export default traineeQuery;