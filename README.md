# Rootuire [![Build Status](https://travis-ci.org/rand0me/rootuire.svg?branch=master)](https://travis-ci.org/rand0me/rootuire)
## Require a local project dependencies without a "../../"-hell!

[![NPM](https://nodei.co/npm/rootuire.png)](https://nodei.co/npm/rootuire/)

### Before `npm i --save rootuire`:
```javascript
var path        = require('path');                            // Ok, node module
var _           = require('lodash');                          // Ok too, npm module
var myComponent = require('../../../components/myComponent'); // Oh, what is that??
```

### After `npm i --save rootuire`:
```javascript
var path        = require('path');                             // Ok, node module
var _           = require('lodash');                           // Ok too, npm module
var rootuire    = require('rootuire');                         // Ok too, npm module :)
var myComponent = rootuire('components/myComponent');          // Yea, much better
```

### Using namespace
```javascript
var path        = require('path');                                // Ok, node module
var _           = require('lodash');                              // Ok too, npm module
var rootuire    = require('rootuire')({namespace: 'components'}); // Ok too, npm module :)
var myComponent = rootuire('myComponent');                        // Yea, much better
```
