# fake-todos
> Generates a list of mock todos for TodoMVC apps ;)

[![NPM][fake-todos-icon] ][fake-todos-url]

[![Build status][fake-todos-ci-image] ][fake-todos-ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)

[demo page](http://glebbahmutov.com/fake-todos/)

## Install and use

`npm install --save fake-todos`

```js
var generate = require('fake-todos')
var items = generate(100)
// items is a list with 100 items like
/*
{
    what: 'learn italian',
    done: false,
    id: 'x8kk...'
}
*/
```

## Sample output

You can see a few examples by running `node src/index.js`

```
what                      due       done   id                                  
------------------------  --------  -----  ------------------------------------
tweet milk                tomorrow  false  ce889dbb-ce91-49b4-beba-809a9bef8ea6
try to clean needle work  tomorrow  false  2c956df1-216e-4b16-8b46-2f75a876b0b0
make milk                 tomorrow  false  1f666512-4484-4b1b-846e-ee7650bb4a6c
make distant relatives    tomorrow  false  a052cc1d-012b-40bd-ae3b-07c1efb2432e
learn Node.js             tomorrow  false  1b00ce60-e419-4eaa-81aa-bf9de737b99f
```

Or you can see yourself the results by reloading the 
[demo page](http://glebbahmutov.com/fake-todos/)

## Related

* [virtual-todos](https://github.com/bahmutov/virtual-todos) for rendering virtual DOM from todos
* [todomvc-model](https://github.com/bahmutov/todomvc-model) is the model that keeps
  todo items and responds to outside events

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/fake-todos/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[fake-todos-icon]: https://nodei.co/npm/fake-todos.png?downloads=true
[fake-todos-url]: https://npmjs.org/package/fake-todos
[fake-todos-ci-image]: https://travis-ci.org/bahmutov/fake-todos.png?branch=master
[fake-todos-ci-url]: https://travis-ci.org/bahmutov/fake-todos
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
