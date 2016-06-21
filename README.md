# Rootuire
## Require a local project dependencies without a "../../"-hell!

### Before `npm i --save rootuire`:
````
var path        = require('path');                            // Ok, node module
var _           = require('lodash');                          // Ok too, npm module
var myComponent = require('../../../components/myComponent'); // Oh, what is that??
````

### After `npm i --save rootuire`:
````
var path        = require('path');                             // Ok, node module
var _           = require('lodash');                           // Ok too, npm module
var rootuire    = require('rootuire');                         // Ok too, npm module :)
var myComponent = rootuire('components/myComponent');          // Yea, much better
````