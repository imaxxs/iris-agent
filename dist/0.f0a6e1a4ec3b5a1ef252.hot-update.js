webpackHotUpdate(0,{

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(23);\n\nvar _index = __webpack_require__(42);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar addExampleButton = function addExampleButton(dispatch) {\n  return function () {\n    dispatch((0, _index.addExample)());\n  };\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  return function () {\n    console.log(\"attempting\", id);\n    console.log(dispatch);\n    console.log(_index.deleteCommmandExample, _index.addExample);\n    console.log((0, _index.deleteCommmandExample)(id));\n    dispatch((0, _index.deleteCommmandExample)(id));\n  };\n};\n\nvar ExamplesEditor = function ExamplesEditor(_ref) {\n  var dispatch = _ref.dispatch,\n      examples = _ref.examples;\n  return _react2.default.createElement(\n    'div',\n    { className: 'command_examples' },\n    _react2.default.createElement(\n      'button',\n      { onClick: addExampleButton(dispatch) },\n      'Add Example'\n    ),\n    examples.map(function (example, id) {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'example' },\n          _react2.default.createElement('input', { type: 'text', value: example })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: onClickDelete(dispatch, id) },\n          'Delete'\n        )\n      );\n    })\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    examples: state.commandEditPane.examples\n  };\n};\n\nExamplesEditor = (0, _reactRedux.connect)(mapStateToProps)(ExamplesEditor);\n\nexports.default = ExamplesEditor;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcz82NWIwIl0sIm5hbWVzIjpbImFkZEV4YW1wbGVCdXR0b24iLCJkaXNwYXRjaCIsIm9uQ2xpY2tEZWxldGUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJFeGFtcGxlc0VkaXRvciIsImV4YW1wbGVzIiwibWFwIiwiZXhhbXBsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29tbWFuZEVkaXRQYW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQ3ZCLFlBQU07QUFDSkEsYUFBUyx3QkFBVDtBQUNELEdBSHNCO0FBQUEsQ0FBekI7O0FBS0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDRCxRQUFELEVBQVdFLEVBQVg7QUFBQSxTQUNwQixZQUFNO0FBQ0pDLFlBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixFQUExQjtBQUNBQyxZQUFRQyxHQUFSLENBQVlKLFFBQVo7QUFDQUcsWUFBUUMsR0FBUjtBQUNBRCxZQUFRQyxHQUFSLENBQVksa0NBQXNCRixFQUF0QixDQUFaO0FBQ0FGLGFBQVMsa0NBQXNCRSxFQUF0QixDQUFUO0FBQ0QsR0FQbUI7QUFBQSxDQUF0Qjs7QUFTQSxJQUFJRyxpQkFBaUI7QUFBQSxNQUFHTCxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhTSxRQUFiLFFBQWFBLFFBQWI7QUFBQSxTQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0k7QUFBQTtBQUFBLFFBQVEsU0FBU1AsaUJBQWlCQyxRQUFqQixDQUFqQjtBQUFBO0FBQUEsS0FESjtBQUVLTSxhQUFTQyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVTixFQUFWO0FBQUEsYUFBaUI7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQXlCLG1EQUFPLE1BQUssTUFBWixFQUFtQixPQUFPTSxPQUExQjtBQUF6QixTQUFMO0FBQXlFO0FBQUE7QUFBQSxZQUFRLFNBQVNQLGNBQWNELFFBQWQsRUFBd0JFLEVBQXhCLENBQWpCO0FBQUE7QUFBQTtBQUF6RSxPQUFqQjtBQUFBLEtBQWI7QUFGTCxHQURpQjtBQUFBLENBQXJCOztBQU1BLElBQU1PLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENKLGNBQVVJLE1BQU1DLGVBQU4sQ0FBc0JMO0FBREUsR0FBWjtBQUFBLENBQXhCOztBQUlBRCxpQkFBaUIseUJBQVFJLGVBQVIsRUFBeUJKLGNBQXpCLENBQWpCOztrQkFFZUEsYyIsImZpbGUiOiI0MzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGFkZEV4YW1wbGUsIGRlbGV0ZUNvbW1tYW5kRXhhbXBsZSB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5jb25zdCBhZGRFeGFtcGxlQnV0dG9uID0gKGRpc3BhdGNoKSA9PlxuICAoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkRXhhbXBsZSgpKTtcbiAgfTtcblxuY29uc3Qgb25DbGlja0RlbGV0ZSA9IChkaXNwYXRjaCwgaWQpID0+XG4gICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImF0dGVtcHRpbmdcIiwgaWQpO1xuICAgIGNvbnNvbGUubG9nKGRpc3BhdGNoKTtcbiAgICBjb25zb2xlLmxvZyhkZWxldGVDb21tbWFuZEV4YW1wbGUsIGFkZEV4YW1wbGUpO1xuICAgIGNvbnNvbGUubG9nKGRlbGV0ZUNvbW1tYW5kRXhhbXBsZShpZCkpO1xuICAgIGRpc3BhdGNoKGRlbGV0ZUNvbW1tYW5kRXhhbXBsZShpZCkpO1xuICB9O1xuXG5sZXQgRXhhbXBsZXNFZGl0b3IgPSAoeyBkaXNwYXRjaCwgZXhhbXBsZXMgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZXhhbXBsZXNcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRFeGFtcGxlQnV0dG9uKGRpc3BhdGNoKX0+QWRkIEV4YW1wbGU8L2J1dHRvbj5cbiAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaWQpID0+IDxkaXY+PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2V4YW1wbGV9IC8+PC9kaXY+PGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrRGVsZXRlKGRpc3BhdGNoLCBpZCl9PkRlbGV0ZTwvYnV0dG9uPjwvZGl2Pil9XG4gICAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGV4YW1wbGVzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuZXhhbXBsZXMsXG59KTtcblxuRXhhbXBsZXNFZGl0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXhhbXBsZXNFZGl0b3IpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlc0VkaXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0V4YW1wbGVzRWRpdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})