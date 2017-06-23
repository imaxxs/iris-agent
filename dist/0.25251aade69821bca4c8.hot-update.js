webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(1302);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nvar _index = __webpack_require__(167);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar minimize = function minimize(dispatch, minimizeState) {\n  console.log(\"clicked\");\n  dispatch((0, _index.toggleDocs)(minimizeState));\n};\n\nvar _handleSplitPaneOnDragFinished = function _handleSplitPaneOnDragFinished(splitPane) {\n  console.log(splitPane);\n  var draggedSize = splitPane.props.draggedSize;\n  // ↓ this is what does the trick\n  splitPane.setState({\n    resized: false,\n    defaultSize: draggedSize,\n    draggedSize: undefined\n  });\n};\n\nvar RightPane = function RightPane(_ref) {\n  var dispatch = _ref.dispatch,\n      variables = _ref.variables,\n      doc = _ref.doc,\n      minimizeState = _ref.minimizeState;\n\n  var sizeP = void 0;\n  if (minimizeState.docs === true) {\n    sizeP = \"100%\";\n  } else {\n    sizeP = \"50%\";\n  }\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactSplitPane2.default,\n      { split: 'horizontal', defaultSize: '30%' },\n      _react2.default.createElement(\n        'div',\n        { className: 'variableTable' },\n        _react2.default.createElement(\n          'div',\n          { className: 'title' },\n          'Current Variables'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          _.map(_.sortBy(variables, function (v) {\n            return v.order;\n          }), function (x) {\n            return _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'span',\n                { className: 'three_quarter name' },\n                x.name\n              ),\n              _react2.default.createElement(\n                'span',\n                { className: 'quarter' },\n                x.value\n              )\n            );\n          })\n        )\n      ),\n      _react2.default.createElement(\n        _reactSplitPane2.default,\n        { className: 'secondSplit', split: 'horizontal', size: sizeP, allowResize: true },\n        _react2.default.createElement(_FunctionSearch2.default, null),\n        _react2.default.createElement(_FunctionInfo2.default, null)\n      )\n    ),\n    _react2.default.createElement(\n      'button',\n      { className: 'minButton', onClick: function onClick() {\n          return minimize(dispatch, minimizeState);\n        } },\n      'Minimize'\n    )\n  );\n};\n\nRightPane.propTypes = {\n  variables: _react.PropTypes.arrayOf(_react.PropTypes.any),\n  doc: _react.PropTypes.any,\n  minimizeState: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    variables: state.variables,\n    doc: state.docs,\n    minimizeState: state.minimizeState\n  };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwibWluaW1pemUiLCJkaXNwYXRjaCIsIm1pbmltaXplU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiX2hhbmRsZVNwbGl0UGFuZU9uRHJhZ0ZpbmlzaGVkIiwic3BsaXRQYW5lIiwiZHJhZ2dlZFNpemUiLCJwcm9wcyIsInNldFN0YXRlIiwicmVzaXplZCIsImRlZmF1bHRTaXplIiwidW5kZWZpbmVkIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwic2l6ZVAiLCJkb2NzIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsQzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsYUFBWCxFQUE2QjtBQUM1Q0MsVUFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQUgsV0FBUyx1QkFBV0MsYUFBWCxDQUFUO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxpQ0FBaUMsU0FBakNBLDhCQUFpQyxDQUFDQyxTQUFELEVBQWU7QUFDcERILFVBQVFDLEdBQVIsQ0FBWUUsU0FBWjtBQUNFLE1BQU1DLGNBQWNELFVBQVVFLEtBQVYsQ0FBZ0JELFdBQXBDO0FBQ0E7QUFDQUQsWUFBVUcsUUFBVixDQUFtQjtBQUNqQkMsYUFBUyxLQURRO0FBRWpCQyxpQkFBWUosV0FGSztBQUdqQkEsaUJBQWFLO0FBSEksR0FBbkI7QUFLRCxDQVRIOztBQVlBLElBQUlDLFlBQVkseUJBQWlEO0FBQUEsTUFBOUNaLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQXBDYSxTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QkMsR0FBeUIsUUFBekJBLEdBQXlCO0FBQUEsTUFBcEJiLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFDL0QsTUFBSWMsY0FBSjtBQUNBLE1BQUlkLGNBQWNlLElBQWQsS0FBdUIsSUFBM0IsRUFBZ0M7QUFDOUJELFlBQVEsTUFBUjtBQUNELEdBRkQsTUFHSTtBQUNGQSxZQUFRLEtBQVI7QUFDRDtBQUNELFNBQVE7QUFBQTtBQUFBO0FBQ1I7QUFBQTtBQUFBLFFBQVcsT0FBTSxZQUFqQixFQUE4QixhQUFZLEtBQTFDO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0lqQixZQUFFbUIsR0FBRixDQUFNbkIsRUFBRW9CLE1BQUYsQ0FBU0wsU0FBVCxFQUFvQixVQUFDTSxDQUFELEVBQU87QUFDL0IsbUJBQU9BLEVBQUVDLEtBQVQ7QUFDSCxXQUZPLENBQU4sRUFHQSxVQUFDQyxDQUFELEVBQU87QUFDSCxtQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxvQkFBaEI7QUFBdUNBLGtCQUFFQztBQUF6QyxlQUFKO0FBQTBEO0FBQUE7QUFBQSxrQkFBTSxXQUFVLFNBQWhCO0FBQTRCRCxrQkFBRUU7QUFBOUI7QUFBMUQsYUFBUDtBQUNILFdBTEQ7QUFESjtBQUZKLE9BREY7QUFZRTtBQUFBO0FBQUEsVUFBVyxXQUFVLGFBQXJCLEVBQW1DLE9BQU0sWUFBekMsRUFBc0QsTUFBTVIsS0FBNUQsRUFBbUUsYUFBYSxJQUFoRjtBQUNFLHFFQURGO0FBRUU7QUFGRjtBQVpGLEtBRFE7QUFrQlI7QUFBQTtBQUFBLFFBQVEsV0FBVSxXQUFsQixFQUE4QixTQUFTO0FBQUEsaUJBQU1oQixTQUFTQyxRQUFULEVBQW1CQyxhQUFuQixDQUFOO0FBQUEsU0FBdkM7QUFBQTtBQUFBO0FBbEJRLEdBQVI7QUFvQkQsQ0E1QkQ7O0FBK0JBVyxVQUFVWSxTQUFWLEdBQXNCO0FBQ2xCWCxhQUFXLGlCQUFVWSxPQUFWLENBQWtCLGlCQUFVQyxHQUE1QixDQURPO0FBRWxCWixPQUFLLGlCQUFVWSxHQUZHO0FBR2xCekIsaUJBQWUsaUJBQVV5QjtBQUhQLENBQXRCOztBQU1BLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENmLGVBQVdlLE1BQU1mLFNBRGU7QUFFaENDLFNBQUtjLE1BQU1aLElBRnFCO0FBR2hDZixtQkFBZTJCLE1BQU0zQjtBQUhXLEdBQVo7QUFBQSxDQUF4Qjs7QUFNQVcsWUFBWSx5QkFBUWUsZUFBUixFQUF5QmYsU0FBekIsQ0FBWjs7a0JBRWVBLFMiLCJmaWxlIjoiNDI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRnVuY3Rpb25TZWFyY2ggZnJvbSAnLi9GdW5jdGlvblNlYXJjaCc7XG5pbXBvcnQgRnVuY3Rpb25JbmZvIGZyb20gJy4vRnVuY3Rpb25JbmZvJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5pbXBvcnQgeyB0b2dnbGVEb2NzIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cbmNvbnN0IG1pbmltaXplID0gKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgZGlzcGF0Y2godG9nZ2xlRG9jcyhtaW5pbWl6ZVN0YXRlKSk7XG59XG5cbmNvbnN0IF9oYW5kbGVTcGxpdFBhbmVPbkRyYWdGaW5pc2hlZCA9IChzcGxpdFBhbmUpID0+IHtcbiAgY29uc29sZS5sb2coc3BsaXRQYW5lKTtcbiAgICBjb25zdCBkcmFnZ2VkU2l6ZSA9IHNwbGl0UGFuZS5wcm9wcy5kcmFnZ2VkU2l6ZTtcbiAgICAvLyDihpMgdGhpcyBpcyB3aGF0IGRvZXMgdGhlIHRyaWNrXG4gICAgc3BsaXRQYW5lLnNldFN0YXRlKHtcbiAgICAgIHJlc2l6ZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdFNpemU6ZHJhZ2dlZFNpemUsXG4gICAgICBkcmFnZ2VkU2l6ZTogdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9O1xuXG5cbmxldCBSaWdodFBhbmUgPSAoeyBkaXNwYXRjaCwgdmFyaWFibGVzLCBkb2MsIG1pbmltaXplU3RhdGUgfSkgPT4ge1xuICBsZXQgc2l6ZVA7XG4gIGlmIChtaW5pbWl6ZVN0YXRlLmRvY3MgPT09IHRydWUpe1xuICAgIHNpemVQID0gXCIxMDAlXCI7XG4gIH1cbiAgZWxzZXtcbiAgICBzaXplUCA9IFwiNTAlXCI7XG4gIH1cbiAgcmV0dXJuICg8ZGl2PlxuICA8U3BsaXRQYW5lIHNwbGl0PVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTaXplPVwiMzAlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYWJsZVRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXJyZW50IFZhcmlhYmxlczwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgeyBfLm1hcChfLnNvcnRCeSh2YXJpYWJsZXMsICh2KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2Lm9yZGVyO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKHgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxzcGFuIGNsYXNzTmFtZT1cInRocmVlX3F1YXJ0ZXIgbmFtZVwiPnsgeC5uYW1lIH08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicXVhcnRlclwiPnsgeC52YWx1ZSB9PC9zcGFuPjwvbGk+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPFNwbGl0UGFuZSBjbGFzc05hbWU9XCJzZWNvbmRTcGxpdFwiIHNwbGl0PVwiaG9yaXpvbnRhbFwiIHNpemU9e3NpemVQfSBhbGxvd1Jlc2l6ZT17dHJ1ZX0+XG4gICAgICA8RnVuY3Rpb25TZWFyY2ggLz5cbiAgICAgIDxGdW5jdGlvbkluZm8gLz5cbiAgICA8L1NwbGl0UGFuZT5cbiAgPC9TcGxpdFBhbmU+XG4gIDxidXR0b24gY2xhc3NOYW1lPVwibWluQnV0dG9uXCIgb25DbGljaz17KCkgPT4gbWluaW1pemUoZGlzcGF0Y2gsIG1pbmltaXplU3RhdGUpfT5NaW5pbWl6ZTwvYnV0dG9uPlxuICA8L2Rpdj4pO1xufTtcblxuXG5SaWdodFBhbmUucHJvcFR5cGVzID0ge1xuICAgIHZhcmlhYmxlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgZG9jOiBQcm9wVHlwZXMuYW55LFxuICAgIG1pbmltaXplU3RhdGU6IFByb3BUeXBlcy5hbnlcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHN0YXRlLnZhcmlhYmxlcyxcbiAgICBkb2M6IHN0YXRlLmRvY3MsXG4gICAgbWluaW1pemVTdGF0ZTogc3RhdGUubWluaW1pemVTdGF0ZVxufSk7XG5cblJpZ2h0UGFuZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSaWdodFBhbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodFBhbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})