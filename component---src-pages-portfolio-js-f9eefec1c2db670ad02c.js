webpackJsonp([0xe015e3200350],{312:function(e,t){},214:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function a(e){var t=e.children;return f.default.createElement("div",{className:"grid"},t)}function l(e){var t=e.children,r=n(e,["children"]);return f.default.createElement("div",i({className:"grid-item"},r),t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.Grid=a,t.GridItem=l;var c=r(1),f=o(c);r(312)},315:function(e,t){},217:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.item;return l.default.createElement("div",{className:"portfolio-item"},l.default.createElement("div",null,t.name))}t.__esModule=!0;var a=r(1),l=o(a);r(315),t.default=n,e.exports=t.default},218:function(e,t){"use strict";t.__esModule=!0;var r=(t.portfolioCategories=["mobile","web","native"],[{name:"Portfolio 1",category:"mobile"},{name:"Portfolio 2",category:"web"},{name:"Portfolio 3",category:"native"},{name:"Portfolio 4",category:"mobile"},{name:"Portfolio 5",category:"web"},{name:"Portfolio 6",category:"native"},{name:"Portfolio 7",category:"mobile"},{name:"Portfolio 8",category:"web"},{name:"Portfolio 9",category:"native"}]);t.default=r},319:function(e,t){},225:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c=r(1),f=o(c),u=r(217),s=o(u),d=r(214),m=r(218),p=o(m);r(319);var y=function(e){function t(){var r,o,l;n(this,t);for(var i=arguments.length,c=Array(i),f=0;f<i;f++)c[f]=arguments[f];return r=o=a(this,e.call.apply(e,[this].concat(c))),o.state={filterBy:"All"},o.handleFilterClick=function(e){o.setState({filterBy:e.target.textContent})},l=r,a(o,l)}return l(t,e),t.prototype.render=function(){var e=this,t=this.state.filterBy,r="All"!==t?p.default.filter(function(e){return e.category===t}):p.default;return f.default.createElement("div",{className:"page page-portfolio"},f.default.createElement("div",{className:"portfolio-filters"},f.default.createElement("button",i({className:"portfolio-filter",onClick:this.handleFilterClick},"All"===t&&{"aria-selected":!0}),"All"),m.portfolioCategories.map(function(r,o){return f.default.createElement("button",i({className:"portfolio-filter",key:o,onClick:e.handleFilterClick},r===t&&{"aria-selected":!0}),r)})),f.default.createElement("div",{className:"portfolio-items"},f.default.createElement(d.Grid,null,r.map(function(e,t){return f.default.createElement(d.GridItem,{key:t},f.default.createElement(s.default,{item:e}))}))))},t}(c.Component);t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-portfolio-js-f9eefec1c2db670ad02c.js.map