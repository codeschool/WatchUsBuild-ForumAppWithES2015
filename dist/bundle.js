(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _post = require("./post");

var _post2 = _interopRequireDefault(_post);

var _ui = require("./ui");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_post2.default.findAll().then(_ui2.default.renderPosts);

},{"./post":3,"./ui":4}],2:[function(require,module,exports){
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

},{"./constants":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ui = {
  renderPosts: function renderPosts(posts) {
    var target = document.querySelector(".container");

    var postElements = posts.map(function (post) {
      return articleElement(post.title, post.lastReply);
    });

    target.innerHTML = postElements.join("");
  }
};

// TODO: fix XSS breach
function articleElement(title, lastReply) {
  return ("<article class='post'>\n    <h2 class='post-title'>\n      " + title + "\n    </h2>\n    <p class='post-meta'>\n      last reply on " + lastReply + "\n    </p>\n  </article>").trim();
}

exports.default = ui;

},{}]},{},[1]);
