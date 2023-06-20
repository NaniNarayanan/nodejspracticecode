var path = require('path');

//normalization
console.log('normalization:'+ path.normalize('/sivaji/banglore//chadrapati/indian/newfolder/tab/..'));

//join
console.log('join:' + path.join('/sivaji/karnataka','chadrapti','indian/newfolder','tab'));

//resolve
console.log('resolve:' + path.resolve('pathmodule.js'));

//extension
console.log('extension:' + path.extname('pathmodule.js'));

