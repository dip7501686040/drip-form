"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[6161],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 3305:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44996);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'transform',title:'transform',description:'表单提交前修改数据'};var contentTitle=undefined;var metadata={"unversionedId":"form/API/formProp/transform","id":"form/API/formProp/transform","title":"transform","description":"表单提交前修改数据","source":"@site/docs/form/API/formProp/transform.md","sourceDirName":"form/API/formProp","slug":"/form/API/formProp/transform","permalink":"/drip-form/docs/form/API/formProp/transform","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/API/formProp/transform.md","tags":[],"version":"current","frontMatter":{"id":"transform","title":"transform","description":"表单提交前修改数据"},"sidebar":"docs","previous":{"title":"parse","permalink":"/drip-form/docs/form/API/formProp/parse"},"next":{"title":"onValidate","permalink":"/drip-form/docs/form/API/formProp/onValidate"}};var assets={};var toc=[{value:'示例',id:'示例',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"./parse"},"parse prop"),"\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u9047\u5230\u4E86\u540E\u53F0\u4E0B\u53D1\u7684\u6570\u636E\u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8868\u5355\u6E32\u67D3\u7684\u573A\u666F\uFF0C\u5E76\u901A\u8FC7 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"parse")," \u5728\u6E32\u67D3\u524D\u5B8C\u6210\u4E86\u89E3\u6790\u3002\n\u76F8\u5BF9\u5E94\u7684\uFF0C\u5F53\u6211\u4EEC\u7684\u8868\u5355\u6570\u636E\u4E0D\u6EE1\u8DB3\u540E\u53F0\u7684\u4E0A\u4F20\u683C\u5F0F\u65F6\uFF0C\u4E5F\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u867D\u7136\u53EF\u4EE5\u901A\u8FC7 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ref.current.formData")," \u83B7\u53D6\u5230\u8868\u5355\u6570\u636E\uFF0C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",{parentName:"p"}),"\n","\u4F46\u662F\u65E0\u6CD5\u901A\u8FC7\u8D4B\u503C\u64CD\u4F5C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"formData.multiSelect = '1-1-1'")," \u5BF9\u5176\u8FDB\u884C\u4FEE\u6539\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-javascript","metastring":"title=\"Uncaught TypeErrorr:\"","title":"\"Uncaught","TypeErrorr:\"":true},"Cannot assign to read only property 'multiSelect' of object '#<Object>'\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u662F\u7531\u4E8E\u5728drip-form\u8BBE\u8BA1\u7406\u5FF5\u4E2D\uFF0C\u8868\u5355\u6570\u636E\u662F\u5185\u90E8\u7EF4\u62A4\u7684\uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://immerjs.github.io/immer/"},"immer")," \u5BF9\u5176\u8FDB\u884C\u7BA1\u7406\u3002\n\u5BFC\u81F4\u8868\u5355\u6570\u636E\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u4E0D\u53EF\u53D8\u5BF9\u8C61\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F46\u662F\uFF0Cdrip-form\u63D0\u4F9B\u4E86\u4E00\u4E2A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"transform")," \u5165\u53C2\uFF0C\u5E76\u5728\u7528\u6237\u901A\u8FC7 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ref.current.formData")," \u53D6\u503C\u65F6\u89E6\u53D1\u8FD9\u4E2A\u51FD\u6570\u3002\n\u5B83\u5C06\u4EA7\u751F\u4E00\u4E2A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"formData")," \u7684\u5B8C\u5168\u62F7\u8D1D\uFF0C\u7136\u540E\u5C06\u5176\u4F20\u5165 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"transform")," \u51FD\u6570\u8FDB\u884C\u5904\u7406\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7531\u4E8E\u8FD9\u4E2A\u62F7\u8D1D\u662F\u4E00\u4E2A\u53EF\u53D8\u5BF9\u8C61\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528JS\u7684\u6240\u6709API\uFF0C\u6BD4\u5982\u8D4B\u503C\u3001\u6570\u7EC4\u64CD\u4F5C\u3001\u5BF9\u8C61\u5220\u9664\u7B49\uFF1B\u540C\u65F6\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u5E76\u4E0D\u4F1A\u5BF9\u8868\u5355\u5185\u90E8\u7684\u6570\u636E\u9020\u6210\u4EFB\u4F55\u5F71\u54CD\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"提示","type":"info"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u4E0E ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"parse")," \u4E0D\u540C\u7684\u662F\uFF0C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"transform")," \u51FD\u6570\u5E76\u4E0D\u9700\u8981\u8FD4\u56DE\u503C\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"示例"},"\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx","metastring":"title=\"Form.jsx\" {7,8,9,10,22}","title":"\"Form.jsx\"","{7,8,9,10,22}":true},"import React, { memo, useCallback } from 'react'\nimport DripForm from '@jdfed/drip-form'\n\nconst Form = memo(() => {\n    const formRef = useRef()\n\n    const onTransform = useCallback((formData) => {\n        // ...\u5728\u8FD9\u91CC\u505A\u4E00\u4E9B\u6570\u636E\u4FEE\u6539\u64CD\u4F5C\n        formData.multiSelect = formData.multiSelect.join('-')\n    }, [])\n    \n    const onSubmit = useCallback(() => {\n        // formData\u5728\u5904\u7406\u524D\u4E3A { multiSelect: [1,1,1] }\uFF0Ctransform\u5904\u7406\u540E{ multiSelect: '1-1-1' }\n        console.log(ref.current.formData)\n    }, [])\n\n    return <>\n        <DripForm\n          ...\n          ref={formRef}\n          transform={onTransform}\n        />\n        <button onClick={onSubmit}>\u63D0\u4EA4</button>\n    </>\n})\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);