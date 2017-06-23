webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n  var variables = _ref.variables,\n      doc = _ref.doc;\n  return _react2.default.createElement(\n    _reactSplitPane2.default,\n    { split: 'horizontal', defaultSize: '30%' },\n    _react2.default.createElement(\n      'div',\n      { className: 'variableTable' },\n      _react2.default.createElement(\n        'div',\n        { className: 'title' },\n        'Current Variables'\n      ),\n      _react2.default.createElement(\n        'ul',\n        null,\n        _.map(_.sortBy(variables, function (v) {\n          return v.order;\n        }), function (x) {\n          return _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'span',\n              { className: 'three_quarter name' },\n              x.name\n            ),\n            _react2.default.createElement(\n              'span',\n              { className: 'quarter' },\n              x.value\n            )\n          );\n        })\n      )\n    ),\n    _react2.default.createElement(\n      _reactSplitPane2.default,\n      { split: 'horizontal', defaultSize: '50%' },\n      _react2.default.createElement(_FunctionSearch2.default, null),\n      _react2.default.createElement(\n        'div',\n        { className: 'func_info' },\n        _react2.default.createElement(\n          'div',\n          { className: 'func_title' },\n          doc.title\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'func_description' },\n          doc.description.map(function (p) {\n            return _react2.default.createElement(\n              'div',\n              null,\n              p\n            );\n          })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'examples' },\n          _react2.default.createElement(\n            'div',\n            { className: 'head' },\n            'EXAMPLES:'\n          ),\n          doc.examples.map(function (ex) {\n            return _react2.default.createElement(\n              'div',\n              { className: 'example' },\n              ex\n            );\n          })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'func_code' },\n          _react2.default.createElement(\n            'div',\n            { className: 'head' },\n            'CODE:'\n          ),\n          _react2.default.createElement(\n            'pre',\n            null,\n            'def add_two_numbers(x,y): return x + y'\n          )\n        )\n      )\n    )\n  );\n};\n\nRightPane.propTypes = {\n  variables: _react.PropTypes.arrayOf(_react.PropTypes.any)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    variables: state.variables,\n    doc: state.docs\n  };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwIiwiZXhhbXBsZXMiLCJleCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFJQyxZQUFZO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsR0FBZCxRQUFjQSxHQUFkO0FBQUEsU0FDUjtBQUFBO0FBQUEsTUFBVyxPQUFNLFlBQWpCLEVBQThCLGFBQVksS0FBMUM7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLE9BREo7QUFFSTtBQUFBO0FBQUE7QUFDSUgsVUFBRUksR0FBRixDQUFNSixFQUFFSyxNQUFGLENBQVNILFNBQVQsRUFBb0IsVUFBQ0ksQ0FBRCxFQUFPO0FBQy9CLGlCQUFPQSxFQUFFQyxLQUFUO0FBQ0gsU0FGTyxDQUFOLEVBR0EsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0gsaUJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGdCQUFNLFdBQVUsb0JBQWhCO0FBQXVDQSxnQkFBRUM7QUFBekMsYUFBSjtBQUEwRDtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxTQUFoQjtBQUE0QkQsZ0JBQUVFO0FBQTlCO0FBQTFELFdBQVA7QUFDSCxTQUxEO0FBREo7QUFGSixLQURGO0FBWUU7QUFBQTtBQUFBLFFBQVcsT0FBTSxZQUFqQixFQUE4QixhQUFZLEtBQTFDO0FBQ0UsbUVBREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFBNkJQLGNBQUlRO0FBQWpDLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQ0dSLGNBQUlTLFdBQUosQ0FBZ0JSLEdBQWhCLENBQW9CO0FBQUEsbUJBQUs7QUFBQTtBQUFBO0FBQU1TO0FBQU4sYUFBTDtBQUFBLFdBQXBCO0FBREgsU0FGRjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUFBO0FBQUEsV0FERjtBQUVHVixjQUFJVyxRQUFKLENBQWFWLEdBQWIsQ0FBaUI7QUFBQSxtQkFBTTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxTQUFmO0FBQTBCVztBQUExQixhQUFOO0FBQUEsV0FBakI7QUFGSCxTQUxGO0FBU0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBVEY7QUFGRjtBQVpGLEdBRFE7QUFBQSxDQUFoQjs7QUFrQ0FkLFVBQVVlLFNBQVYsR0FBc0I7QUFDbEJkLGFBQVcsaUJBQVVlLE9BQVYsQ0FBa0IsaUJBQVVDLEdBQTVCO0FBRE8sQ0FBdEI7O0FBSUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ2xCLGVBQVdrQixNQUFNbEIsU0FEZTtBQUVoQ0MsU0FBS2lCLE1BQU1DO0FBRnFCLEdBQVo7QUFBQSxDQUF4Qjs7QUFLQXBCLFlBQVkseUJBQVFrQixlQUFSLEVBQXlCbEIsU0FBekIsQ0FBWjs7a0JBRWVBLFMiLCJmaWxlIjoiNDI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRnVuY3Rpb25TZWFyY2ggZnJvbSAnLi9GdW5jdGlvblNlYXJjaCdcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cblxubGV0IFJpZ2h0UGFuZSA9ICh7IHZhcmlhYmxlcywgZG9jIH0pID0+XG4gICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCIzMCVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhYmxlVGFibGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1cnJlbnQgVmFyaWFibGVzPC9kaXY+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7IF8ubWFwKF8uc29ydEJ5KHZhcmlhYmxlcywgKHYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYub3JkZXI7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PHNwYW4gY2xhc3NOYW1lPVwidGhyZWVfcXVhcnRlciBuYW1lXCI+eyB4Lm5hbWUgfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJxdWFydGVyXCI+eyB4LnZhbHVlIH08L3NwYW4+PC9saT47XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTaXplPVwiNTAlXCI+XG4gICAgICAgICAgICA8RnVuY3Rpb25TZWFyY2ggLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY19pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY190aXRsZVwiPntkb2MudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIHtkb2MuZGVzY3JpcHRpb24ubWFwKHAgPT4gPGRpdj57cH08L2Rpdj4pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPkVYQU1QTEVTOjwvZGl2PlxuICAgICAgICAgICAgICAgIHtkb2MuZXhhbXBsZXMubWFwKGV4ID0+IDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPntleH08L2Rpdj4pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jX2NvZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5DT0RFOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgZGVmIGFkZF90d29fbnVtYmVycyh4LHkpOiByZXR1cm4geCArIHlcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgPC9TcGxpdFBhbmU+O1xuXG5SaWdodFBhbmUucHJvcFR5cGVzID0ge1xuICAgIHZhcmlhYmxlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFyaWFibGVzOiBzdGF0ZS52YXJpYWJsZXMsXG4gICAgZG9jOiBzdGF0ZS5kb2NzXG59KTtcblxuUmlnaHRQYW5lID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJpZ2h0UGFuZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0UGFuZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1JpZ2h0UGFuZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})