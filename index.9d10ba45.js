var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequirec771;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequirec771=r),r.register("O354J",(function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.codigoSecreto=t}var t,r,n;return t=e,(r=[{key:"setCodigoSecreto",value:function(e){this.codigoSecreto=e}},{key:"adivinar",value:function(e){if(e===this.codigoSecreto)return"Ganaste!";for(var t="",o=0;o<this.codigoSecreto.length;o++)this.codigoSecreto[o]===e[o]?t+="!":this.codigoSecreto.includes(e[o])&&(t+="*");return t}}])&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports.default=r})),r.register("gaSgt",(function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"setPresenter",value:function(e){this.presenter=e}},{key:"init",value:function(){var e=this,t=document.querySelector("#codigosecreto-form"),o=document.querySelector("#adivinar-form");t.addEventListener("submit",(function(t){t.preventDefault(),e.presenter.botonCodigoSecretoPresionado()})),o.addEventListener("submit",(function(t){t.preventDefault(),e.presenter.botonAdivinarPresionado()}))}},{key:"obtenerCodigoSecreto",value:function(){return document.querySelector("#codigosecreto").value}},{key:"obtenerIntento",value:function(){return document.querySelector("#adivinar").value}},{key:"mostrarPistas",value:function(e){document.querySelector("#resultado-div").innerHTML="<p>"+e+"</p>"}}])&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports.default=r})),r.register("j8a2o",(function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=t,this.torosyvacas=o}var t,r,n;return t=e,(r=[{key:"botonCodigoSecretoPresionado",value:function(){var e=this.view.obtenerCodigoSecreto();this.torosyvacas.setCodigoSecreto(e)}},{key:"botonAdivinarPresionado",value:function(){var e=this.view.obtenerIntento(),t=this.torosyvacas.adivinar(e);this.view.mostrarPistas(t)}}])&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports.default=r}));var n=u(r("O354J")),i=u(r("gaSgt")),a=u(r("j8a2o"));function u(e){return e&&e.__esModule?e:{default:e}}var c=new i.default,s=new n.default,l=new a.default(c,s);c.setPresenter(l),c.init();
//# sourceMappingURL=index.9d10ba45.js.map
