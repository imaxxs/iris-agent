webpackHotUpdate(0,{

/***/ 1317:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar addExampleButton = function addExampleButton(dispatch) {\n  return function () {\n    dispatch((0, _index.addExample)());\n  };\n};\n\nvar onClickDelete = function onClickDelete(dispatch) {\n  return function () {\n    console.log('hi');\n  };\n};\n\nvar ExamplesEditor = function ExamplesEditor(_ref) {\n  var dispatch = _ref.dispatch,\n      examples = _ref.examples;\n  return _react2.default.createElement(\n    'div',\n    { className: 'command_examples' },\n    _react2.default.createElement(\n      'button',\n      { onClick: addExampleButton(dispatch) },\n      'Add Example'\n    ),\n    examples.map(function (example, id) {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'example' },\n          _react2.default.createElement('input', { type: 'text', value: example })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              return onClickDelete(dispatch, id);\n            } },\n          'Delete'\n        )\n      );\n    })\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    examples: state.commandEditPane.examples\n  };\n};\n\nExamplesEditor = (0, _reactRedux.connect)(mapStateToProps)(ExamplesEditor);\n\nexports.default = ExamplesEditor;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcz82NWIwIl0sIm5hbWVzIjpbImFkZEV4YW1wbGVCdXR0b24iLCJkaXNwYXRjaCIsIm9uQ2xpY2tEZWxldGUiLCJjb25zb2xlIiwibG9nIiwiRXhhbXBsZXNFZGl0b3IiLCJleGFtcGxlcyIsIm1hcCIsImV4YW1wbGUiLCJpZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29tbWFuZEVkaXRQYW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQ3ZCLFlBQU07QUFDSkEsYUFBUyx3QkFBVDtBQUNELEdBSHNCO0FBQUEsQ0FBekI7O0FBS0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDRCxRQUFEO0FBQUEsU0FDcEIsWUFBTTtBQUNKRSxZQUFRQyxHQUFSLENBQVksSUFBWjtBQUNELEdBSG1CO0FBQUEsQ0FBdEI7O0FBS0EsSUFBSUMsaUJBQWlCO0FBQUEsTUFBR0osUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUssUUFBYixRQUFhQSxRQUFiO0FBQUEsU0FDakI7QUFBQTtBQUFBLE1BQUssV0FBVSxrQkFBZjtBQUNJO0FBQUE7QUFBQSxRQUFRLFNBQVNOLGlCQUFpQkMsUUFBakIsQ0FBakI7QUFBQTtBQUFBLEtBREo7QUFFS0ssYUFBU0MsR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsRUFBVjtBQUFBLGFBQWlCO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZjtBQUF5QixtREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBT0QsT0FBMUI7QUFBekIsU0FBTDtBQUF5RTtBQUFBO0FBQUEsWUFBUSxTQUFTO0FBQUEscUJBQU1OLGNBQWNELFFBQWQsRUFBd0JRLEVBQXhCLENBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBekUsT0FBakI7QUFBQSxLQUFiO0FBRkwsR0FEaUI7QUFBQSxDQUFyQjs7QUFNQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDTCxjQUFVSyxNQUFNQyxlQUFOLENBQXNCTjtBQURFLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQUQsaUJBQWlCLHlCQUFRSyxlQUFSLEVBQXlCTCxjQUF6QixDQUFqQjs7a0JBRWVBLGMiLCJmaWxlIjoiMTMxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWRkRXhhbXBsZSB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5jb25zdCBhZGRFeGFtcGxlQnV0dG9uID0gKGRpc3BhdGNoKSA9PlxuICAoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkRXhhbXBsZSgpKTtcbiAgfTtcblxuY29uc3Qgb25DbGlja0RlbGV0ZSA9IChkaXNwYXRjaCkgPT5cbiAgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoaScpO1xuICB9O1xuXG5sZXQgRXhhbXBsZXNFZGl0b3IgPSAoeyBkaXNwYXRjaCwgZXhhbXBsZXMgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZXhhbXBsZXNcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRFeGFtcGxlQnV0dG9uKGRpc3BhdGNoKX0+QWRkIEV4YW1wbGU8L2J1dHRvbj5cbiAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaWQpID0+IDxkaXY+PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2V4YW1wbGV9IC8+PC9kaXY+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrRGVsZXRlKGRpc3BhdGNoLCBpZCl9PkRlbGV0ZTwvYnV0dG9uPjwvZGl2Pil9XG4gICAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGV4YW1wbGVzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuZXhhbXBsZXMsXG59KTtcblxuRXhhbXBsZXNFZGl0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXhhbXBsZXNFZGl0b3IpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlc0VkaXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0V4YW1wbGVzRWRpdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})