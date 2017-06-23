webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(41);\n\nvar _reactSyntaxHighlighter = __webpack_require__(400);\n\nvar _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FunctionInfo = function (_Component) {\n  _inherits(FunctionInfo, _Component);\n\n  function FunctionInfo() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FunctionInfo);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FunctionInfo.__proto__ || Object.getPrototypeOf(FunctionInfo)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      if (_this.props.doc.title === \"\") {\n        return _react2.default.createElement(\n          'div',\n          { className: 'func_info' },\n          _react2.default.createElement(\n            'div',\n            { className: 'func_title' },\n            'Search for a command to see information'\n          )\n        );\n      } else {\n        return _react2.default.createElement(\n          'div',\n          { className: 'func_info' },\n          _react2.default.createElement(\n            'div',\n            { className: 'func_title' },\n            _this.props.doc.title\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'func_description' },\n            _this.props.doc.description.join(\" \")\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'examples' },\n            _react2.default.createElement(\n              'div',\n              { className: 'head' },\n              'Examples:'\n            ),\n            _this.props.doc.examples.map(function (ex) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'example' },\n                ex\n              );\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'func_code' },\n            _react2.default.createElement(\n              'div',\n              { className: 'head' },\n              'Code:'\n            ),\n            _react2.default.createElement(\n              'pre',\n              null,\n              _react2.default.createElement(\n                _reactSyntaxHighlighter2.default,\n                { language: 'python' },\n                _this.props.doc.source\n              )\n            )\n          )\n        );\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return FunctionInfo;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    doc: state.docs,\n    minimizeState: state.minimizeState\n  };\n};\n\nFunctionInfo = (0, _reactRedux.connect)(mapStateToProps)(FunctionInfo);\n\nexports.default = FunctionInfo;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvbkluZm8uanM/YmY0ZCJdLCJuYW1lcyI6WyJGdW5jdGlvbkluZm8iLCJyZW5kZXIiLCJwcm9wcyIsImRvYyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJqb2luIiwiZXhhbXBsZXMiLCJtYXAiLCJleCIsInNvdXJjZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZG9jcyIsIm1pbmltaXplU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNQSxZOzs7Ozs7Ozs7Ozs7OztrTUFFRkMsTSxHQUFTLFlBQU07QUFDYixVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxLQUFmLEtBQXlCLEVBQTdCLEVBQWdDO0FBQzlCLGVBQU87QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQTJCO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUFBO0FBQUE7QUFBM0IsU0FBUDtBQUNELE9BRkQsTUFHSTtBQUNGLGVBQVE7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ047QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQTZCLGtCQUFLRixLQUFMLENBQVdDLEdBQVgsQ0FBZUM7QUFBNUMsV0FETTtBQUVOO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRyxrQkFBS0YsS0FBTCxDQUFXQyxHQUFYLENBQWVFLFdBQWYsQ0FBMkJDLElBQTNCLENBQWdDLEdBQWhDO0FBREgsV0FGTTtBQUtOO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE1BQWY7QUFBQTtBQUFBLGFBREY7QUFFRyxrQkFBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVJLFFBQWYsQ0FBd0JDLEdBQXhCLENBQTRCO0FBQUEscUJBQU07QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUEwQkM7QUFBMUIsZUFBTjtBQUFBLGFBQTVCO0FBRkgsV0FMTTtBQVNOO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE1BQWY7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsa0JBQW1CLFVBQVcsUUFBOUI7QUFDQyxzQkFBS1AsS0FBTCxDQUFXQyxHQUFYLENBQWVPO0FBRGhCO0FBREE7QUFGRjtBQVRNLFNBQVI7QUFrQkQ7QUFDRixLOzs7Ozs7QUFHTCxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDVCxTQUFLUyxNQUFNQyxJQURxQjtBQUVoQ0MsbUJBQWVGLE1BQU1FO0FBRlcsR0FBWjtBQUFBLENBQXhCOztBQUtBZCxlQUFlLHlCQUFRVyxlQUFSLEVBQXlCWCxZQUF6QixDQUFmOztrQkFFZUEsWSIsImZpbGUiOiI0MzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN5bnRheEhpZ2hsaWdodGVyIGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcic7XG5cblxuY2xhc3MgRnVuY3Rpb25JbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRvYy50aXRsZSA9PT0gXCJcIil7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfaW5mb1wiPjxkaXYgY2xhc3NOYW1lPVwiZnVuY190aXRsZVwiPlNlYXJjaCBmb3IgYSBjb21tYW5kIHRvIHNlZSBpbmZvcm1hdGlvbjwvZGl2PjwvZGl2PlxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfaW5mb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY190aXRsZVwiPnt0aGlzLnByb3BzLmRvYy50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmRvYy5kZXNjcmlwdGlvbi5qb2luKFwiIFwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5FeGFtcGxlczo8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmRvYy5leGFtcGxlcy5tYXAoZXggPT4gPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+e2V4fTwvZGl2Pil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jX2NvZGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlID0gXCJweXRob25cIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmRvYy5zb3VyY2V9XG4gICAgICAgICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBkb2M6IHN0YXRlLmRvY3MsXG4gICAgbWluaW1pemVTdGF0ZTogc3RhdGUubWluaW1pemVTdGF0ZVxufSk7XG5cbkZ1bmN0aW9uSW5mbyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShGdW5jdGlvbkluZm8pO1xuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbkluZm87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvbkluZm8uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})