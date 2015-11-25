(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _post = require("./post");

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
let articleTemplate = `
<article class='post'>
  <h2 class='post-title'>
    ${postTitle}
  </h2>
  <p class='post-meta'>
    ${lastReply}
  </p>
</article>
`.trim();
*/

var ui = {
  renderPosts: function renderPosts(posts) {
    var target = document.querySelector(".container");

    var article = document.createElement("article");
    article.className = "post";

    var h2 = document.createElement("h2");
    h2.className = "post-title";
    var postTitle = document.createTextNode("I am a post title w00t");
    h2.appendChild(postTitle);

    var p = document.createElement("p");
    p.className = "post-meta";
    var lastReply = document.createTextNode("last reply on 1997-07-03");
    p.appendChild(lastReply);

    article.appendChild(h2);
    article.appendChild(p);

    target.appendChild(article);
  }
};

_post2.default.findAll().then(ui.renderPosts);

},{"./post":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_URI = "http://localhost:3000";

exports.BASE_URI = BASE_URI;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require("./constants");

var Post = { findAll: findAll };

function findAll() {
  var url = _constants.BASE_URI + "/posts";
  var request = new XMLHttpRequest();

  return new Promise(function (resolve, reject) {

    request.open('GET', url, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response));
      }
    };

    request.onerror = function () {
      reject(new Error("Error fetching posts"));
    };

    request.send();
  });
}

exports.default = Post;

},{"./constants":2}]},{},[1]);
