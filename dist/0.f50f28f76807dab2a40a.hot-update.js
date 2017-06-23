webpackHotUpdate(0,{

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar arg_name = void 0,\n    arg_type = void 0,\n    arg_string = void 0;\n\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  console.log(\"change \" + id);\n  var new_values = {\n    arg_name: arg_name.value,\n    arg_type: arg_type.value,\n    art_string: arg_string.value\n  };\n  dispatch((0, _index.updateCommandArg)(id, new_values));\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  console.log(\"delete \" + id);\n  dispatch((0, _index.deleteCommandArg)(id));\n};\n\nvar ArgumentAnnotation = function ArgumentAnnotation(_ref) {\n  var dispatch = _ref.dispatch,\n      id = _ref.id,\n      name = _ref.name;\n  return _react2.default.createElement(\n    'div',\n    { className: 'arg_annotation' },\n    _react2.default.createElement('input', { type: 'text', name: 'arg_name', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_name = node;\n      }, value: name }),\n    _react2.default.createElement(\n      'select',\n      { name: 'arg_type', onChange: function onChange() {\n          return onChangeInput(dispatch, id);\n        }, ref: function ref(node) {\n          arg_type = node;\n        } },\n      _react2.default.createElement(\n        'option',\n        null,\n        'Int'\n      ),\n      _react2.default.createElement(\n        'option',\n        null,\n        'String'\n      )\n    ),\n    _react2.default.createElement('input', { type: 'text', placeholder: 'Message to request this argument from user...', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_string = node;\n      } }),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return onClickDelete(dispatch, id);\n        } },\n      'Delete'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nArgumentAnnotation = (0, _reactRedux.connect)(mapStateToProps)(ArgumentAnnotation);\n\nexports.default = ArgumentAnnotation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanM/MzM3NCJdLCJuYW1lcyI6WyJhcmdfbmFtZSIsImFyZ190eXBlIiwiYXJnX3N0cmluZyIsIm9uQ2hhbmdlSW5wdXQiLCJkaXNwYXRjaCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5ld192YWx1ZXMiLCJ2YWx1ZSIsImFydF9zdHJpbmciLCJvbkNsaWNrRGVsZXRlIiwiQXJndW1lbnRBbm5vdGF0aW9uIiwibmFtZSIsIm5vZGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUdBLElBQUlBLGlCQUFKO0FBQUEsSUFBY0MsaUJBQWQ7QUFBQSxJQUF3QkMsbUJBQXhCOztBQUVBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDQyxVQUFRQyxHQUFSLENBQVksWUFBVUYsRUFBdEI7QUFDQSxNQUFNRyxhQUFhO0FBQ2pCUixjQUFVQSxTQUFTUyxLQURGO0FBRWpCUixjQUFVQSxTQUFTUSxLQUZGO0FBR2pCQyxnQkFBWVIsV0FBV087QUFITixHQUFuQjtBQUtBTCxXQUFTLDZCQUFpQkMsRUFBakIsRUFBcUJHLFVBQXJCLENBQVQ7QUFDRCxDQVJEOztBQVVBLElBQU1HLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ1AsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDQyxVQUFRQyxHQUFSLENBQVksWUFBVUYsRUFBdEI7QUFDQUQsV0FBUyw2QkFBaUJDLEVBQWpCLENBQVQ7QUFDRCxDQUhEOztBQUtBLElBQUlPLHFCQUFxQjtBQUFBLE1BQUdSLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLE1BQWlCUSxJQUFqQixRQUFpQkEsSUFBakI7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGdCQUFmO0FBQ0ksNkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssVUFBeEIsRUFBbUMsVUFBVTtBQUFBLGVBQU1WLGNBQWNDLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxPQUE3QyxFQUFnRixLQUFLLG1CQUFRO0FBQUNMLG1CQUFXYyxJQUFYO0FBQWlCLE9BQS9HLEVBQWlILE9BQU9ELElBQXhILEdBREo7QUFFSTtBQUFBO0FBQUEsUUFBUSxNQUFLLFVBQWIsRUFBd0IsVUFBVTtBQUFBLGlCQUFNVixjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsU0FBbEMsRUFBcUUsS0FBSyxtQkFBUTtBQUFDSixxQkFBV2EsSUFBWDtBQUFpQixTQUFwRztBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixLQUZKO0FBTUksNkNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksK0NBQS9CLEVBQStFLFVBQVU7QUFBQSxlQUFNWCxjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsT0FBekYsRUFBNEgsS0FBSyxtQkFBUTtBQUFDSCxxQkFBYVksSUFBYjtBQUFtQixPQUE3SixHQU5KO0FBT0k7QUFBQTtBQUFBLFFBQVEsU0FBUztBQUFBLGlCQUFNSCxjQUFjUCxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBUEosR0FEcUI7QUFBQSxDQUF6Qjs7QUFXQSxJQUFNVSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZLEVBQVo7QUFBQSxDQUF4Qjs7QUFFQUoscUJBQXFCLHlCQUFRRyxlQUFSLEVBQXlCSCxrQkFBekIsQ0FBckI7O2tCQUVlQSxrQiIsImZpbGUiOiI0MzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVwZGF0ZUNvbW1hbmRBcmcsIGRlbGV0ZUNvbW1hbmRBcmcgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcblxuXG5sZXQgYXJnX25hbWUsIGFyZ190eXBlLCBhcmdfc3RyaW5nO1xuXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoLCBpZCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImNoYW5nZSBcIitpZCk7XG4gIGNvbnN0IG5ld192YWx1ZXMgPSB7XG4gICAgYXJnX25hbWU6IGFyZ19uYW1lLnZhbHVlLFxuICAgIGFyZ190eXBlOiBhcmdfdHlwZS52YWx1ZSxcbiAgICBhcnRfc3RyaW5nOiBhcmdfc3RyaW5nLnZhbHVlXG4gIH07XG4gIGRpc3BhdGNoKHVwZGF0ZUNvbW1hbmRBcmcoaWQsIG5ld192YWx1ZXMpKTtcbn07XG5cbmNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiZGVsZXRlIFwiK2lkKTtcbiAgZGlzcGF0Y2goZGVsZXRlQ29tbWFuZEFyZyhpZCkpO1xufTtcblxubGV0IEFyZ3VtZW50QW5ub3RhdGlvbiA9ICh7IGRpc3BhdGNoLCBpZCwgbmFtZSB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJnX2Fubm90YXRpb25cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFyZ19uYW1lXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfbmFtZSA9IG5vZGU7fX0gdmFsdWU9e25hbWV9Lz5cbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiYXJnX3R5cGVcIiBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCwgaWQpfSByZWY9e25vZGUgPT4ge2FyZ190eXBlID0gbm9kZTt9fT5cbiAgICAgICAgICA8b3B0aW9uPkludDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24+U3RyaW5nPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UgdG8gcmVxdWVzdCB0aGlzIGFyZ3VtZW50IGZyb20gdXNlci4uLlwiIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHJlZj17bm9kZSA9PiB7YXJnX3N0cmluZyA9IG5vZGU7fX0vPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEZWxldGUoZGlzcGF0Y2gsIGlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7fSk7XG5cbkFyZ3VtZW50QW5ub3RhdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcmd1bWVudEFubm90YXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBBcmd1bWVudEFubm90YXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})