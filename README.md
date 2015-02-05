Ground Zero
===========

Another Sails.js + Angular.js boilerplate

Usage
-----
```shell
wget https://github.com/JerryYangJin/zero/archive/master.zip zero.zip
unzip zero.zip
cd zero
git init
npm install
bower install
sails lift
```

Dependencies
------------
* Sails.js 0.10.5
* Angular.js 1.3.9
* Bootstrap 3.3.2
* Font Awesome 4.3.0
* jQuery 2.1.3

Changes made on top of sails project
------------------------------------
* Add bower.json to install dependencies like angular, bootstrap

* Register new task bower to copy files to assets

```js
//new file bower.js in tasks/register
module.exports = function (grunt) {
  grunt.registerTask('bower', [
  'copy:bower'
  ]);
};
//update default.js in tasks/register (can be added to other task like build/prod)
module.exports = function (grunt) {
  grunt.registerTask('default', [
  'bower',
  'compileAssets',
  'linkAssets',
  'watch'
  ]);
};
```
* Config bower task in tasks/config/copy.js

```js
bower: {
  files: [
  { // copy js library
    expand:true,
    flatten: true,
    cwd: 'bower_components',
    src: [
    'angular/angular.js',
    'bootstrap/dist/js/bootstrap.js',
    'jquery/dist/jquery.js'
    ],
    dest: 'assets/js/dependencies'
  }

```

* Update layout.ejs, homepage.ejs for angular

```html
<html ng-app="zero">
<head>
<base href="/">
```

```html
<div ng-view></div>
```

* Config js injection order

```js
var jsFilesToInject = [
// Load sails.io before everything else
'js/dependencies/sails.io.js',
// Dependencies like jQuery, or Angular are brought in here
'js/dependencies/jquery.js',
'js/dependencies/angular.js',
'js/dependencies/**/*.js',
// All of the rest of your client-side js files
// will be injected here in no particular order.
'js/**/*.js'
];
```

License
-------
The MIT License (MIT)

Copyright (c) 2015 Jerry Yang Jin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
