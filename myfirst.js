var http = require('http');
const dt = require('./myfirstmodule')
var url = require('url');
var fs = require('fs');
const {
    Blob,
    resolveObjectURL,
  } = require('node:buffer');
const { resolve } = require('path');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text.html'})
//     res.write('hello world, this is a server msg!')
//     res.write(req.url)
//     res.end()
// }).listen(8080);

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text.html'})
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.write(txt)
//     res.end()
// }).listen(8080);

const myURL = new URL('/foo', 'https:example.org/')
const myURL2 = new URL({ toString: () => 'https://example.org/' });
const myURL3 = new URL('https://example.org/foo#bar');
const myURL4 = new URL('https://example.org:81/foo');
const myURL5 = new URL ('https://example.org:81/foo');
const myURL6 = new URL('https://abc:xyz@example.org:81/foo')
const myURL7 = new URL('https://example.org:81/foo/bar/baz?888');
const myURL8 = new URL('https://example.org:8888');
const u = new URL ('http://example.org/');
const s = new URL('https://example.org/abc?123');
const myUrl = new URL('https://example.org/abc?foo=~bar');

console.log(globalThis.URL);

myURL3.hash = 'baz';
myURL4.host = 'lol.com:69'
console.log(myURL3.hash)
console.log(myURL4.href)
console.log(myURL5.origin);
myURL6.password = '69420'
myURL6.username = 'blazeit'
console.log(myURL6.password)
console.log(myURL6.username);
console.log(myURL7.pathname)

myURL8.port = '443'
//should print empty string cuz default http port
//a LOT of other port rules, check at https://nodejs.org/api/url.html#urlhostname
console.log(myURL8.port);
console.log(myURL8.protocol);
 
//u.protocol before this line is http
u.protocol = 'https';
console.log(u.href)
s.search ='69420'
console.log(s.search);
myUrl.searchParams.sort();
console.log(myUrl.search)

const myURLs = [
    new URL('https://www.example.com'),
    new URL('https://test.example.org'),
  ];

console.log(JSON.stringify(myURLs))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const blob = new Blob(['hello'])
  const id = URL.createObjectURL(blob);

  const otherBlob = resolveObjectURL(id);

  console.log('otherBlob.size', otherBlob.size);


 // ********* // url.searchParams docs => https://nodejs.org/api/url.html#new-urlsearchparamsobj

 const params = new URLSearchParams({
    user: 'abc',
    query: ['first', 'second']
 })

 console.log('params', params)
 console.log('params.getAll(...)', params.getAll('query'))
 console.log('params.toString()', params.toString())

 //other fn to check out 

 //urlSearchParams.get(name)
 //urlSearchParams.getAll(name)
 //urlSearchParams.has(name)
 //urlSearchParams.keys()
 //urlSearchParams.set(name, value)
 //urlSearchParams.sort()
 //urlSearchParams.toString()



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-type': 'text.html' })
        res.write(data);
        return res.end();
    })

    fs.appendFile('test.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    fs.open('opentest.txt', 'w', function(err, file) {
        if (err) throw err;
        console.log('Saved', file)
    })

    fs.writeFile('writetest.txt', 'writeFileText', function(err) {
        if(err) throw err;
        console.log('ssakhjhad');
    })

    fs.unlink('opentest.txt', function(err) {
        if(err) throw err;
        console.log('filed deleted!')
    })

    fs.rename('mynewfile1.txt', 'renamed.txt', function(err) {
        if(err) throw err;
        console.log('renamed')
    })
    
}).listen(8080)
