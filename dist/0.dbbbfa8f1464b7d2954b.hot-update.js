webpackHotUpdate(0,{

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InputBox = __webpack_require__(168);\n\nvar _python = __webpack_require__(126);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar file_input = void 0;\n\nvar onChangeFile = function onChangeFile(dispatch) {\n    _InputBox.input.value = file_input.files[0].path;\n    (0, _python.updateHint)(_InputBox.input.value);\n    // updateDocs(input.value);\n};\n\nvar FilePickMessage = function FilePickMessage(_ref) {\n    var dispatch = _ref.dispatch,\n        origin = _ref.origin,\n        text = _ref.text,\n        hidden = _ref.hidden;\n    return _react2.default.createElement(\n        'div',\n        { className: origin === 'iris' ? 'message left' : 'message right', style: hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n            'div',\n            { className: 'bubble' },\n            text,\n            _react2.default.createElement('input', { type: 'file', onChange: function onChange() {\n                    return onChangeFile(dispatch);\n                }, ref: function ref(node) {\n                    file_input = node;\n                } })\n        )\n    );\n};\n\nexports.default = FilePickMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GaWxlUGlja01lc3NhZ2UuanM/MjEwYSJdLCJuYW1lcyI6WyJmaWxlX2lucHV0Iiwib25DaGFuZ2VGaWxlIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsImZpbGVzIiwicGF0aCIsIkZpbGVQaWNrTWVzc2FnZSIsIm9yaWdpbiIsInRleHQiLCJoaWRkZW4iLCJkaXNwbGF5Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQUlBLG1CQUFKOztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQWM7QUFDL0Isb0JBQU1DLEtBQU4sR0FBY0gsV0FBV0ksS0FBWCxDQUFpQixDQUFqQixFQUFvQkMsSUFBbEM7QUFDQSw0QkFBVyxnQkFBTUYsS0FBakI7QUFDQTtBQUNILENBSkQ7O0FBTUEsSUFBTUcsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFFBQUdKLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFFBQWFLLE1BQWIsUUFBYUEsTUFBYjtBQUFBLFFBQXFCQyxJQUFyQixRQUFxQkEsSUFBckI7QUFBQSxRQUEyQkMsTUFBM0IsUUFBMkJBLE1BQTNCO0FBQUEsV0FDcEI7QUFBQTtBQUFBLFVBQUssV0FBYUYsV0FBVyxNQUFYLEdBQW9CLGNBQXBCLEdBQXFDLGVBQXZELEVBQXdFLE9BQU9FLFdBQVcsSUFBWCxHQUFrQixFQUFDQyxTQUFTLE1BQVYsRUFBbEIsR0FBc0MsRUFBckg7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFZLFFBQWpCO0FBQ0dGLGdCQURIO0FBRUEscURBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVU7QUFBQSwyQkFBTVAsYUFBYUMsUUFBYixDQUFOO0FBQUEsaUJBQTdCLEVBQTJELEtBQUssbUJBQVE7QUFBQ0YsaUNBQWFXLElBQWI7QUFBbUIsaUJBQTVGO0FBRkE7QUFESixLQURvQjtBQUFBLENBQXhCOztrQkFRZUwsZSIsImZpbGUiOiIxMzAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi4vY29udGFpbmVycy9JbnB1dEJveCc7XG5pbXBvcnQgeyB1cGRhdGVIaW50IH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5cbmxldCBmaWxlX2lucHV0O1xuXG5jb25zdCBvbkNoYW5nZUZpbGUgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICBpbnB1dC52YWx1ZSA9IGZpbGVfaW5wdXQuZmlsZXNbMF0ucGF0aDtcbiAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGVEb2NzKGlucHV0LnZhbHVlKTtcbn07XG5cbmNvbnN0IEZpbGVQaWNrTWVzc2FnZSA9ICh7IGRpc3BhdGNoLCBvcmlnaW4sIHRleHQsIGhpZGRlbiB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lID0ge29yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXtoaWRkZW4gPT09IHRydWUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHt9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ1YmJsZVwiPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlRmlsZShkaXNwYXRjaCl9IHJlZj17bm9kZSA9PiB7ZmlsZV9pbnB1dCA9IG5vZGU7fX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVQaWNrTWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0ZpbGVQaWNrTWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})