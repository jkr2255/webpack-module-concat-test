import logger from './lib/log';

import mainModule from './will-concat/main-module';
import subMobule from './will-concat/sub-module';

import evalModule from './cannot-concat/eval-module';
import moduleExported from './cannot-concat/module-exported';
import multipleImported from './cannot-concat/multiple-imported';

logger('test');

mainModule();
subMobule();

moduleExported();
evalModule();
multipleImported();
