webpackHotUpdate(0,{

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar arg_name = void 0,\n    arg_type = void 0,\n    arg_string = void 0;\n\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  console.log(\"change \" + id);\n  var new_values = {\n    arg_name: arg_name.value,\n    arg_type: arg_type.value,\n    arg_string: arg_string.value\n  };\n  dispatch((0, _index.updateCommandArg)(id, new_values));\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  console.log(\"delete \" + id);\n  dispatch((0, _index.deleteCommandArg)(id));\n};\n\nvar ArgumentAnnotation = function ArgumentAnnotation(_ref) {\n  var dispatch = _ref.dispatch,\n      id = _ref.id,\n      name = _ref.name;\n  return _react2.default.createElement(\n    'div',\n    { className: 'arg_annotation' },\n    _react2.default.createElement('input', { type: 'text', name: 'arg_name', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_name = node;\n      }, value: name }),\n    _react2.default.createElement(\n      'select',\n      { name: 'arg_type', onChange: function onChange() {\n          return onChangeInput(dispatch, id);\n        }, ref: function ref(node) {\n          arg_type = node;\n        } },\n      _react2.default.createElement(\n        'option',\n        null,\n        'Int'\n      ),\n      _react2.default.createElement(\n        'option',\n        null,\n        'String'\n      )\n    ),\n    _react2.default.createElement('input', { type: 'text', placeholder: 'Message to request this argument from user...', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_string = node;\n      } }),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return onClickDelete(dispatch, id);\n        } },\n      'Delete'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nArgumentAnnotation = (0, _reactRedux.connect)(mapStateToProps)(ArgumentAnnotation);\n\nexports.default = ArgumentAnnotation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanM/MzM3NCJdLCJuYW1lcyI6WyJhcmdfbmFtZSIsImFyZ190eXBlIiwiYXJnX3N0cmluZyIsIm9uQ2hhbmdlSW5wdXQiLCJkaXNwYXRjaCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5ld192YWx1ZXMiLCJ2YWx1ZSIsIm9uQ2xpY2tEZWxldGUiLCJBcmd1bWVudEFubm90YXRpb24iLCJuYW1lIiwibm9kZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBR0EsSUFBSUEsaUJBQUo7QUFBQSxJQUFjQyxpQkFBZDtBQUFBLElBQXdCQyxtQkFBeEI7O0FBRUEsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxRQUFELEVBQVdDLEVBQVgsRUFBa0I7QUFDdENDLFVBQVFDLEdBQVIsQ0FBWSxZQUFVRixFQUF0QjtBQUNBLE1BQU1HLGFBQWE7QUFDakJSLGNBQVVBLFNBQVNTLEtBREY7QUFFakJSLGNBQVVBLFNBQVNRLEtBRkY7QUFHakJQLGdCQUFZQSxXQUFXTztBQUhOLEdBQW5CO0FBS0FMLFdBQVMsNkJBQWlCQyxFQUFqQixFQUFxQkcsVUFBckIsQ0FBVDtBQUNELENBUkQ7O0FBVUEsSUFBTUUsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDTixRQUFELEVBQVdDLEVBQVgsRUFBa0I7QUFDdENDLFVBQVFDLEdBQVIsQ0FBWSxZQUFVRixFQUF0QjtBQUNBRCxXQUFTLDZCQUFpQkMsRUFBakIsQ0FBVDtBQUNELENBSEQ7O0FBS0EsSUFBSU0scUJBQXFCO0FBQUEsTUFBR1AsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsRUFBYixRQUFhQSxFQUFiO0FBQUEsTUFBaUJPLElBQWpCLFFBQWlCQSxJQUFqQjtBQUFBLFNBQ3JCO0FBQUE7QUFBQSxNQUFLLFdBQVUsZ0JBQWY7QUFDSSw2Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QixFQUFtQyxVQUFVO0FBQUEsZUFBTVQsY0FBY0MsUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLE9BQTdDLEVBQWdGLEtBQUssbUJBQVE7QUFBQ0wsbUJBQVdhLElBQVg7QUFBaUIsT0FBL0csRUFBaUgsT0FBT0QsSUFBeEgsR0FESjtBQUVJO0FBQUE7QUFBQSxRQUFRLE1BQUssVUFBYixFQUF3QixVQUFVO0FBQUEsaUJBQU1ULGNBQWNDLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxTQUFsQyxFQUFxRSxLQUFLLG1CQUFRO0FBQUNKLHFCQUFXWSxJQUFYO0FBQWlCLFNBQXBHO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLEtBRko7QUFNSSw2Q0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSwrQ0FBL0IsRUFBK0UsVUFBVTtBQUFBLGVBQU1WLGNBQWNDLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxPQUF6RixFQUE0SCxLQUFLLG1CQUFRO0FBQUNILHFCQUFhVyxJQUFiO0FBQW1CLE9BQTdKLEdBTko7QUFPSTtBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsaUJBQU1ILGNBQWNOLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFQSixHQURxQjtBQUFBLENBQXpCOztBQVdBLElBQU1TLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVksRUFBWjtBQUFBLENBQXhCOztBQUVBSixxQkFBcUIseUJBQVFHLGVBQVIsRUFBeUJILGtCQUF6QixDQUFyQjs7a0JBRWVBLGtCIiwiZmlsZSI6IjQzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlQ29tbWFuZEFyZywgZGVsZXRlQ29tbWFuZEFyZyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5cbmxldCBhcmdfbmFtZSwgYXJnX3R5cGUsIGFyZ19zdHJpbmc7XG5cbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY2hhbmdlIFwiK2lkKTtcbiAgY29uc3QgbmV3X3ZhbHVlcyA9IHtcbiAgICBhcmdfbmFtZTogYXJnX25hbWUudmFsdWUsXG4gICAgYXJnX3R5cGU6IGFyZ190eXBlLnZhbHVlLFxuICAgIGFyZ19zdHJpbmc6IGFyZ19zdHJpbmcudmFsdWVcbiAgfTtcbiAgZGlzcGF0Y2godXBkYXRlQ29tbWFuZEFyZyhpZCwgbmV3X3ZhbHVlcykpO1xufTtcblxuY29uc3Qgb25DbGlja0RlbGV0ZSA9IChkaXNwYXRjaCwgaWQpID0+IHtcbiAgY29uc29sZS5sb2coXCJkZWxldGUgXCIraWQpO1xuICBkaXNwYXRjaChkZWxldGVDb21tYW5kQXJnKGlkKSk7XG59O1xuXG5sZXQgQXJndW1lbnRBbm5vdGF0aW9uID0gKHsgZGlzcGF0Y2gsIGlkLCBuYW1lIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcmdfYW5ub3RhdGlvblwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYXJnX25hbWVcIiBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCwgaWQpfSByZWY9e25vZGUgPT4ge2FyZ19uYW1lID0gbm9kZTt9fSB2YWx1ZT17bmFtZX0vPlxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJhcmdfdHlwZVwiIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHJlZj17bm9kZSA9PiB7YXJnX3R5cGUgPSBub2RlO319PlxuICAgICAgICAgIDxvcHRpb24+SW50PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbj5TdHJpbmc8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSB0byByZXF1ZXN0IHRoaXMgYXJndW1lbnQgZnJvbSB1c2VyLi4uXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfc3RyaW5nID0gbm9kZTt9fS8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGlja0RlbGV0ZShkaXNwYXRjaCwgaWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICA8L2Rpdj47XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHt9KTtcblxuQXJndW1lbnRBbm5vdGF0aW9uID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFyZ3VtZW50QW5ub3RhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFyZ3VtZW50QW5ub3RhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0FyZ3VtZW50QW5ub3RhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})