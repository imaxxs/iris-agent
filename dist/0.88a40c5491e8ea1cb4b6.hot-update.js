webpackHotUpdate(0,{

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(23);\n\nvar _index = __webpack_require__(42);\n\nvar _lodash = __webpack_require__(160);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar examples_ref = {};\n\nvar exampleValues = function exampleValues() {\n  return _.map(examples_ref, function (value, key) {\n    return value.value;\n  });\n};\n\nvar addExampleButton = function addExampleButton(dispatch) {\n  return function () {\n    dispatch((0, _index.addExample)());\n  };\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  return function () {\n    dispatch((0, _index.deleteCommandExample)(id));\n  };\n};\n\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  return function () {\n    dispatch((0, _index.updateCommandExample)(id, examples_ref[id].value));\n  };\n};\n\nvar ExamplesEditor = function ExamplesEditor(_ref) {\n  var dispatch = _ref.dispatch,\n      examples = _ref.examples;\n  return _react2.default.createElement(\n    'div',\n    { className: 'command_examples' },\n    _react2.default.createElement(\n      'button',\n      { onClick: addExampleButton(dispatch) },\n      'Add Example'\n    ),\n    examples.map(function (example, id) {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'example' },\n          _react2.default.createElement('input', { type: 'text', ref: function ref(node) {\n              examples_ref[id] = node;\n            }, onChange: onChangeInput(dispatch, id), value: example })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: onClickDelete(dispatch, id) },\n          'Delete'\n        )\n      );\n    })\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    examples: state.commandEditPane.examples\n  };\n};\n\nExamplesEditor = (0, _reactRedux.connect)(mapStateToProps)(ExamplesEditor);\n\nexports.default = { exampleValues: exampleValues, ExamplesEditor: ExamplesEditor };//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcz82NWIwIl0sIm5hbWVzIjpbIl8iLCJleGFtcGxlc19yZWYiLCJleGFtcGxlVmFsdWVzIiwibWFwIiwidmFsdWUiLCJrZXkiLCJhZGRFeGFtcGxlQnV0dG9uIiwiZGlzcGF0Y2giLCJvbkNsaWNrRGVsZXRlIiwiaWQiLCJvbkNoYW5nZUlucHV0IiwiRXhhbXBsZXNFZGl0b3IiLCJleGFtcGxlcyIsImV4YW1wbGUiLCJub2RlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tYW5kRWRpdFBhbmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7Ozs7OztBQUVaLElBQUlDLGVBQWUsRUFBbkI7O0FBRUEsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBQU1GLEVBQUVHLEdBQUYsQ0FBTUYsWUFBTixFQUFvQixVQUFDRyxLQUFELEVBQVFDLEdBQVI7QUFBQSxXQUFnQkQsTUFBTUEsS0FBdEI7QUFBQSxHQUFwQixDQUFOO0FBQUEsQ0FBdEI7O0FBRUEsSUFBTUUsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQ3ZCLFlBQU07QUFDSkEsYUFBUyx3QkFBVDtBQUNELEdBSHNCO0FBQUEsQ0FBekI7O0FBS0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDRCxRQUFELEVBQVdFLEVBQVg7QUFBQSxTQUNwQixZQUFNO0FBQ0pGLGFBQVMsaUNBQXFCRSxFQUFyQixDQUFUO0FBQ0QsR0FIbUI7QUFBQSxDQUF0Qjs7QUFLQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNILFFBQUQsRUFBV0UsRUFBWDtBQUFBLFNBQ3BCLFlBQU07QUFDSkYsYUFBUyxpQ0FBcUJFLEVBQXJCLEVBQXlCUixhQUFhUSxFQUFiLEVBQWlCTCxLQUExQyxDQUFUO0FBQ0QsR0FIbUI7QUFBQSxDQUF0Qjs7QUFLQSxJQUFJTyxpQkFBaUI7QUFBQSxNQUFHSixRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhSyxRQUFiLFFBQWFBLFFBQWI7QUFBQSxTQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0k7QUFBQTtBQUFBLFFBQVEsU0FBU04saUJBQWlCQyxRQUFqQixDQUFqQjtBQUFBO0FBQUEsS0FESjtBQUVLSyxhQUFTVCxHQUFULENBQWEsVUFBQ1UsT0FBRCxFQUFVSixFQUFWO0FBQUEsYUFBaUI7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQXlCLG1EQUFPLE1BQUssTUFBWixFQUFtQixLQUFLLG1CQUFRO0FBQUNSLDJCQUFhUSxFQUFiLElBQW1CSyxJQUFuQjtBQUF5QixhQUExRCxFQUE0RCxVQUFVSixjQUFjSCxRQUFkLEVBQXdCRSxFQUF4QixDQUF0RSxFQUFtRyxPQUFPSSxPQUExRztBQUF6QixTQUFMO0FBQXlKO0FBQUE7QUFBQSxZQUFRLFNBQVNMLGNBQWNELFFBQWQsRUFBd0JFLEVBQXhCLENBQWpCO0FBQUE7QUFBQTtBQUF6SixPQUFqQjtBQUFBLEtBQWI7QUFGTCxHQURpQjtBQUFBLENBQXJCOztBQU1BLElBQU1NLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENKLGNBQVVJLE1BQU1DLGVBQU4sQ0FBc0JMO0FBREUsR0FBWjtBQUFBLENBQXhCOztBQUlBRCxpQkFBaUIseUJBQVFJLGVBQVIsRUFBeUJKLGNBQXpCLENBQWpCOztrQkFFZSxFQUFDVCw0QkFBRCxFQUFnQlMsOEJBQWhCLEUiLCJmaWxlIjoiNDM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRFeGFtcGxlLCBkZWxldGVDb21tYW5kRXhhbXBsZSwgdXBkYXRlQ29tbWFuZEV4YW1wbGUgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxubGV0IGV4YW1wbGVzX3JlZiA9IHt9O1xuXG5jb25zdCBleGFtcGxlVmFsdWVzID0gKCkgPT4gXy5tYXAoZXhhbXBsZXNfcmVmLCAodmFsdWUsIGtleSkgPT4gdmFsdWUudmFsdWUpO1xuXG5jb25zdCBhZGRFeGFtcGxlQnV0dG9uID0gKGRpc3BhdGNoKSA9PlxuICAoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkRXhhbXBsZSgpKTtcbiAgfTtcblxuY29uc3Qgb25DbGlja0RlbGV0ZSA9IChkaXNwYXRjaCwgaWQpID0+XG4gICgpID0+IHtcbiAgICBkaXNwYXRjaChkZWxldGVDb21tYW5kRXhhbXBsZShpZCkpO1xuICB9O1xuXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoLCBpZCkgPT5cbiAgKCkgPT4ge1xuICAgIGRpc3BhdGNoKHVwZGF0ZUNvbW1hbmRFeGFtcGxlKGlkLCBleGFtcGxlc19yZWZbaWRdLnZhbHVlKSk7XG4gIH07XG5cbmxldCBFeGFtcGxlc0VkaXRvciA9ICh7IGRpc3BhdGNoLCBleGFtcGxlcyB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9leGFtcGxlc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEV4YW1wbGVCdXR0b24oZGlzcGF0Y2gpfT5BZGQgRXhhbXBsZTwvYnV0dG9uPlxuICAgICAgICB7ZXhhbXBsZXMubWFwKChleGFtcGxlLCBpZCkgPT4gPGRpdj48ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj48aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e25vZGUgPT4ge2V4YW1wbGVzX3JlZltpZF0gPSBub2RlO319IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHZhbHVlPXtleGFtcGxlfSAvPjwvZGl2PjxidXR0b24gb25DbGljaz17b25DbGlja0RlbGV0ZShkaXNwYXRjaCwgaWQpfT5EZWxldGU8L2J1dHRvbj48L2Rpdj4pfVxuICAgIDwvZGl2PjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBleGFtcGxlczogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmV4YW1wbGVzLFxufSk7XG5cbkV4YW1wbGVzRWRpdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEV4YW1wbGVzRWRpdG9yKTtcblxuZXhwb3J0IGRlZmF1bHQge2V4YW1wbGVWYWx1ZXMsIEV4YW1wbGVzRWRpdG9yfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0V4YW1wbGVzRWRpdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})