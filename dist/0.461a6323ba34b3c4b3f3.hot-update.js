webpackHotUpdate(0,{

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _types = __webpack_require__(72);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _index = __webpack_require__(54);\n\nvar _python = __webpack_require__(80);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar clickMessage = function clickMessage(dispatch, text) {\n    dispatch((0, _index.setDocs)({ docs: false }));\n    (0, _python.updateDocs)(text);\n};\n\nvar TitleMessage = function TitleMessage(_ref) {\n    var dispatch = _ref.dispatch,\n        origin = _ref.origin,\n        text = _ref.text,\n        hidden = _ref.hidden,\n        title = _ref.title;\n    return _react2.default.createElement(\n        'div',\n        { className: origin === 'iris' ? 'message left clickable' : 'message right clickable', style: hidden === true ? { display: 'none' } : {}, onClick: function onClick() {\n                return clickMessage(dispatch, text);\n            } },\n        _react2.default.createElement(\n            'div',\n            { className: 'bubble' },\n            ' ',\n            text,\n            ' '\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {};\n};\n\nTitleMessage = (0, _reactRedux.connect)(mapStateToProps)(TitleMessage);\n\nexports.default = TitleMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UaXRsZU1lc3NhZ2UuanM/M2Q3MSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJjbGlja01lc3NhZ2UiLCJkaXNwYXRjaCIsInRleHQiLCJkb2NzIiwiVGl0bGVNZXNzYWdlIiwib3JpZ2luIiwiaGlkZGVuIiwidGl0bGUiLCJkaXNwbGF5IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLFM7O0FBQ1o7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQVdDLElBQVgsRUFBb0I7QUFDdkNELGFBQVMsb0JBQVEsRUFBQ0UsTUFBSyxLQUFOLEVBQVIsQ0FBVDtBQUNBLDRCQUFXRCxJQUFYO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJRSxlQUFlO0FBQUEsUUFBR0gsUUFBSCxRQUFHQSxRQUFIO0FBQUEsUUFBYUksTUFBYixRQUFhQSxNQUFiO0FBQUEsUUFBcUJILElBQXJCLFFBQXFCQSxJQUFyQjtBQUFBLFFBQTJCSSxNQUEzQixRQUEyQkEsTUFBM0I7QUFBQSxRQUFtQ0MsS0FBbkMsUUFBbUNBLEtBQW5DO0FBQUEsV0FDZjtBQUFBO0FBQUEsVUFBSyxXQUFhRixXQUFXLE1BQVgsR0FBb0Isd0JBQXBCLEdBQStDLHlCQUFqRSxFQUE0RixPQUFPQyxXQUFXLElBQVgsR0FBa0IsRUFBQ0UsU0FBUyxNQUFWLEVBQWxCLEdBQXNDLEVBQXpJLEVBQTZJLFNBQVM7QUFBQSx1QkFBTVIsYUFBYUMsUUFBYixFQUF1QkMsSUFBdkIsQ0FBTjtBQUFBLGFBQXRKO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBWSxRQUFqQjtBQUFBO0FBQTRCQSxnQkFBNUI7QUFBQTtBQUFBO0FBREosS0FEZTtBQUFBLENBQW5COztBQUtBLElBQU1PLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFdBQVksRUFBWjtBQUFBLENBQXhCOztBQUdBTixlQUFlLHlCQUFRSyxlQUFSLEVBQXlCTCxZQUF6QixDQUFmOztrQkFFZUEsWSIsImZpbGUiOiIxNDIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBwcm9wdHlwZXMgZnJvbSAnLi4vcHJvcHR5cGVzL3R5cGVzJztcbmltcG9ydCB7IHNldERvY3MgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IHVwZGF0ZURvY3MgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcblxuY29uc3QgY2xpY2tNZXNzYWdlID0gKGRpc3BhdGNoLCB0ZXh0KSA9PiB7XG4gIGRpc3BhdGNoKHNldERvY3Moe2RvY3M6ZmFsc2V9KSlcbiAgdXBkYXRlRG9jcyh0ZXh0KTtcbn07XG5cbmxldCBUaXRsZU1lc3NhZ2UgPSAoeyBkaXNwYXRjaCwgb3JpZ2luLCB0ZXh0LCBoaWRkZW4sIHRpdGxlIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWUgPSB7b3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0IGNsaWNrYWJsZScgOiAnbWVzc2FnZSByaWdodCBjbGlja2FibGUnfSBzdHlsZT17aGlkZGVuID09PSB0cnVlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7fX0gb25DbGljaz17KCkgPT4gY2xpY2tNZXNzYWdlKGRpc3BhdGNoLCB0ZXh0KX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidWJibGVcIj4ge3RleHR9IDwvZGl2PlxuICAgIDwvZGl2PjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xufSk7XG5cblRpdGxlTWVzc2FnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShUaXRsZU1lc3NhZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZU1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9UaXRsZU1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})