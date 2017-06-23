webpackHotUpdate(0,{

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(23);\n\nvar _index = __webpack_require__(42);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar arg_name = {},\n    arg_type = {},\n    arg_string = {};\n\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  console.log(\"change \" + id);\n  var new_values = {\n    arg_name: arg_name[id].value,\n    arg_type: arg_type[id].value,\n    arg_string: arg_string[id].value\n  };\n  dispatch((0, _index.updateCommandArg)(id, new_values));\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  console.log(\"delete \" + id);\n  dispatch((0, _index.deleteCommandArg)(id));\n};\n\nvar ArgumentAnnotation = function ArgumentAnnotation(_ref) {\n  var dispatch = _ref.dispatch,\n      id = _ref.id,\n      name = _ref.name,\n      string = _ref.string,\n      arg_t = _ref.arg_t;\n  return _react2.default.createElement(\n    'div',\n    { className: 'arg_annotation' },\n    _react2.default.createElement('input', { type: 'text', className: 'arg_name', placeholder: 'name of arg', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_name[id] = node;\n      }, value: name }),\n    _react2.default.createElement(\n      'select',\n      { className: 'arg_type', value: arg_t, onChange: function onChange() {\n          return onChangeInput(dispatch, id);\n        }, ref: function ref(node) {\n          arg_type[id] = node;\n        } },\n      _react2.default.createElement(\n        'option',\n        null,\n        'Int'\n      ),\n      _react2.default.createElement(\n        'option',\n        null,\n        'String'\n      ),\n      _react2.default.createElement(\n        'option',\n        null,\n        'Array'\n      )\n    ),\n    _react2.default.createElement('input', { type: 'text', className: 'arg_string', placeholder: 'Message to request this argument from user...', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_string[id] = node;\n      }, value: string }),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return onClickDelete(dispatch, id);\n        } },\n      'Delete'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nArgumentAnnotation = (0, _reactRedux.connect)(mapStateToProps)(ArgumentAnnotation);\n\nexports.default = ArgumentAnnotation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanM/MzM3NCJdLCJuYW1lcyI6WyJhcmdfbmFtZSIsImFyZ190eXBlIiwiYXJnX3N0cmluZyIsIm9uQ2hhbmdlSW5wdXQiLCJkaXNwYXRjaCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5ld192YWx1ZXMiLCJ2YWx1ZSIsIm9uQ2xpY2tEZWxldGUiLCJBcmd1bWVudEFubm90YXRpb24iLCJuYW1lIiwic3RyaW5nIiwiYXJnX3QiLCJub2RlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxJQUFJQSxXQUFXLEVBQWY7QUFBQSxJQUFtQkMsV0FBVyxFQUE5QjtBQUFBLElBQWtDQyxhQUFhLEVBQS9DOztBQUVBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDQyxVQUFRQyxHQUFSLENBQVksWUFBVUYsRUFBdEI7QUFDQSxNQUFNRyxhQUFhO0FBQ2pCUixjQUFVQSxTQUFTSyxFQUFULEVBQWFJLEtBRE47QUFFakJSLGNBQVVBLFNBQVNJLEVBQVQsRUFBYUksS0FGTjtBQUdqQlAsZ0JBQVlBLFdBQVdHLEVBQVgsRUFBZUk7QUFIVixHQUFuQjtBQUtBTCxXQUFTLDZCQUFpQkMsRUFBakIsRUFBcUJHLFVBQXJCLENBQVQ7QUFDRCxDQVJEOztBQVVBLElBQU1FLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ04sUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDQyxVQUFRQyxHQUFSLENBQVksWUFBVUYsRUFBdEI7QUFDQUQsV0FBUyw2QkFBaUJDLEVBQWpCLENBQVQ7QUFDRCxDQUhEOztBQUtBLElBQUlNLHFCQUFxQjtBQUFBLE1BQUdQLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLE1BQWlCTyxJQUFqQixRQUFpQkEsSUFBakI7QUFBQSxNQUF1QkMsTUFBdkIsUUFBdUJBLE1BQXZCO0FBQUEsTUFBK0JDLEtBQS9CLFFBQStCQSxLQUEvQjtBQUFBLFNBQ3JCO0FBQUE7QUFBQSxNQUFLLFdBQVUsZ0JBQWY7QUFDSSw2Q0FBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxVQUE3QixFQUF3QyxhQUFZLGFBQXBELEVBQWtFLFVBQVU7QUFBQSxlQUFNWCxjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsT0FBNUUsRUFBK0csS0FBSyxtQkFBUTtBQUFDTCxpQkFBU0ssRUFBVCxJQUFlVSxJQUFmO0FBQXFCLE9BQWxKLEVBQW9KLE9BQU9ILElBQTNKLEdBREo7QUFFSTtBQUFBO0FBQUEsUUFBUSxXQUFVLFVBQWxCLEVBQTZCLE9BQU9FLEtBQXBDLEVBQTJDLFVBQVU7QUFBQSxpQkFBTVgsY0FBY0MsUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLFNBQXJELEVBQXdGLEtBQUssbUJBQVE7QUFBQ0osbUJBQVNJLEVBQVQsSUFBZVUsSUFBZjtBQUFxQixTQUEzSDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixLQUZKO0FBT0ksNkNBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsWUFBN0IsRUFBMEMsYUFBWSwrQ0FBdEQsRUFBc0csVUFBVTtBQUFBLGVBQU1aLGNBQWNDLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxPQUFoSCxFQUFtSixLQUFLLG1CQUFRO0FBQUNILG1CQUFXRyxFQUFYLElBQWlCVSxJQUFqQjtBQUF1QixPQUF4TCxFQUEwTCxPQUFPRixNQUFqTSxHQVBKO0FBUUk7QUFBQTtBQUFBLFFBQVEsU0FBUztBQUFBLGlCQUFNSCxjQUFjTixRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBUkosR0FEcUI7QUFBQSxDQUF6Qjs7QUFZQSxJQUFNVyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZLEVBQVo7QUFBQSxDQUF4Qjs7QUFFQU4scUJBQXFCLHlCQUFRSyxlQUFSLEVBQXlCTCxrQkFBekIsQ0FBckI7O2tCQUVlQSxrQiIsImZpbGUiOiI0MzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVwZGF0ZUNvbW1hbmRBcmcsIGRlbGV0ZUNvbW1hbmRBcmcgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcblxuXG5sZXQgYXJnX25hbWUgPSB7fSwgYXJnX3R5cGUgPSB7fSwgYXJnX3N0cmluZyA9IHt9O1xuXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoLCBpZCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImNoYW5nZSBcIitpZCk7XG4gIGNvbnN0IG5ld192YWx1ZXMgPSB7XG4gICAgYXJnX25hbWU6IGFyZ19uYW1lW2lkXS52YWx1ZSxcbiAgICBhcmdfdHlwZTogYXJnX3R5cGVbaWRdLnZhbHVlLFxuICAgIGFyZ19zdHJpbmc6IGFyZ19zdHJpbmdbaWRdLnZhbHVlXG4gIH07XG4gIGRpc3BhdGNoKHVwZGF0ZUNvbW1hbmRBcmcoaWQsIG5ld192YWx1ZXMpKTtcbn07XG5cbmNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiZGVsZXRlIFwiK2lkKTtcbiAgZGlzcGF0Y2goZGVsZXRlQ29tbWFuZEFyZyhpZCkpO1xufTtcblxubGV0IEFyZ3VtZW50QW5ub3RhdGlvbiA9ICh7IGRpc3BhdGNoLCBpZCwgbmFtZSwgc3RyaW5nLCBhcmdfdCB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJnX2Fubm90YXRpb25cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXJnX25hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWUgb2YgYXJnXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfbmFtZVtpZF0gPSBub2RlO319IHZhbHVlPXtuYW1lfS8+XG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYXJnX3R5cGVcIiB2YWx1ZT17YXJnX3R9IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHJlZj17bm9kZSA9PiB7YXJnX3R5cGVbaWRdID0gbm9kZTt9fT5cbiAgICAgICAgICA8b3B0aW9uPkludDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24+U3RyaW5nPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbj5BcnJheTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXJnX3N0cmluZ1wiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSB0byByZXF1ZXN0IHRoaXMgYXJndW1lbnQgZnJvbSB1c2VyLi4uXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfc3RyaW5nW2lkXSA9IG5vZGU7fX0gdmFsdWU9e3N0cmluZ30vPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEZWxldGUoZGlzcGF0Y2gsIGlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7fSk7XG5cbkFyZ3VtZW50QW5ub3RhdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcmd1bWVudEFubm90YXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBBcmd1bWVudEFubm90YXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})