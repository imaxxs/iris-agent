webpackHotUpdate(0,{

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _types = __webpack_require__(72);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _index = __webpack_require__(54);\n\nvar _python = __webpack_require__(80);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar clickMessage = function clickMessage(dispatch, text) {\n    dispatch((0, _index.setDocs)({ docs: false }));\n    (0, _python.updateDocs)(text);\n};\n\nvar TitleMessage = function TitleMessage(_ref) {\n    var dispatch = _ref.dispatch,\n        origin = _ref.origin,\n        text = _ref.text,\n        hidden = _ref.hidden,\n        minimizeState = _ref.minimizeState;\n    return _react2.default.createElement(\n        'div',\n        { className: origin === 'iris' ? 'message left clickable' : 'message right clickable', style: hidden === true ? { display: 'none' } : {}, onClick: function onClick() {\n                return clickMessage(dispatch, text);\n            } },\n        _react2.default.createElement(\n            'div',\n            { className: 'bubble' },\n            ' ',\n            text,\n            ' '\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {};\n};\n\nTitleMessage = (0, _reactRedux.connect)(mapStateToProps)(TitleMessage);\n\nexports.default = TitleMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UaXRsZU1lc3NhZ2UuanM/M2Q3MSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJjbGlja01lc3NhZ2UiLCJkaXNwYXRjaCIsInRleHQiLCJkb2NzIiwiVGl0bGVNZXNzYWdlIiwib3JpZ2luIiwiaGlkZGVuIiwibWluaW1pemVTdGF0ZSIsImRpc3BsYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsUzs7QUFDWjs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFvQjtBQUN2Q0QsYUFBUyxvQkFBUSxFQUFDRSxNQUFLLEtBQU4sRUFBUixDQUFUO0FBQ0EsNEJBQVdELElBQVg7QUFDRCxDQUhEOztBQUtBLElBQUlFLGVBQWU7QUFBQSxRQUFHSCxRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFhSSxNQUFiLFFBQWFBLE1BQWI7QUFBQSxRQUFxQkgsSUFBckIsUUFBcUJBLElBQXJCO0FBQUEsUUFBMkJJLE1BQTNCLFFBQTJCQSxNQUEzQjtBQUFBLFFBQW1DQyxhQUFuQyxRQUFtQ0EsYUFBbkM7QUFBQSxXQUNmO0FBQUE7QUFBQSxVQUFLLFdBQWFGLFdBQVcsTUFBWCxHQUFvQix3QkFBcEIsR0FBK0MseUJBQWpFLEVBQTRGLE9BQU9DLFdBQVcsSUFBWCxHQUFrQixFQUFDRSxTQUFTLE1BQVYsRUFBbEIsR0FBc0MsRUFBekksRUFBNkksU0FBUztBQUFBLHVCQUFNUixhQUFhQyxRQUFiLEVBQXVCQyxJQUF2QixDQUFOO0FBQUEsYUFBdEo7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFZLFFBQWpCO0FBQUE7QUFBNEJBLGdCQUE1QjtBQUFBO0FBQUE7QUFESixLQURlO0FBQUEsQ0FBbkI7O0FBS0EsSUFBTU8sa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWSxFQUFaO0FBQUEsQ0FBeEI7O0FBSUFOLGVBQWUseUJBQVFLLGVBQVIsRUFBeUJMLFlBQXpCLENBQWY7O2tCQUVlQSxZIiwiZmlsZSI6IjE0MjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgc2V0RG9jcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXBkYXRlRG9jcyB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuXG5jb25zdCBjbGlja01lc3NhZ2UgPSAoZGlzcGF0Y2gsIHRleHQpID0+IHtcbiAgZGlzcGF0Y2goc2V0RG9jcyh7ZG9jczpmYWxzZX0pKVxuICB1cGRhdGVEb2NzKHRleHQpO1xufTtcblxubGV0IFRpdGxlTWVzc2FnZSA9ICh7IGRpc3BhdGNoLCBvcmlnaW4sIHRleHQsIGhpZGRlbiwgbWluaW1pemVTdGF0ZSB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lID0ge29yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCBjbGlja2FibGUnIDogJ21lc3NhZ2UgcmlnaHQgY2xpY2thYmxlJ30gc3R5bGU9e2hpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319IG9uQ2xpY2s9eygpID0+IGNsaWNrTWVzc2FnZShkaXNwYXRjaCwgdGV4dCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnViYmxlXCI+IHt0ZXh0fSA8L2Rpdj5cbiAgICA8L2Rpdj47XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcblxufSk7XG5cblRpdGxlTWVzc2FnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShUaXRsZU1lc3NhZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZU1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9UaXRsZU1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})