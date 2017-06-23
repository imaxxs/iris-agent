webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n    var variables = _ref.variables,\n        doc = _ref.doc;\n    return _react2.default.createElement(\n        _reactSplitPane2.default,\n        { split: 'horizontal', defaultSize: '30%' },\n        _react2.default.createElement(\n            'div',\n            { className: 'variableTable' },\n            _react2.default.createElement(\n                'div',\n                { className: 'title' },\n                'Current Variables'\n            ),\n            _react2.default.createElement(\n                'ul',\n                null,\n                _.map(_.sortBy(variables, function (v) {\n                    return v.order;\n                }), function (x) {\n                    return _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'three_quarter name' },\n                            x.name\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'quarter' },\n                            x.value\n                        )\n                    );\n                })\n            )\n        ),\n        _react2.default.createElement(\n            _reactSplitPane2.default,\n            { split: 'horizontal', defaultSize: '50%' },\n            _react2.default.createElement(\n                'div',\n                null,\n                'two'\n            ),\n            _react2.default.createElement(\n                'div',\n                null,\n                'three'\n            )\n        )\n    );\n};\n\nRightPane.propTypes = {\n    variables: _react.PropTypes.arrayOf(_react.PropTypes.any)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables,\n        doc: state.docs\n    };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFJQyxZQUFZO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsUUFBY0MsR0FBZCxRQUFjQSxHQUFkO0FBQUEsV0FDUjtBQUFBO0FBQUEsVUFBVyxPQUFNLFlBQWpCLEVBQThCLGFBQVksS0FBMUM7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0lILGtCQUFFSSxHQUFGLENBQU1KLEVBQUVLLE1BQUYsQ0FBU0gsU0FBVCxFQUFvQixVQUFDSSxDQUFELEVBQU87QUFDL0IsMkJBQU9BLEVBQUVDLEtBQVQ7QUFDSCxpQkFGTyxDQUFOLEVBR0EsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0gsMkJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDhCQUFNLFdBQVUsb0JBQWhCO0FBQXVDQSw4QkFBRUM7QUFBekMseUJBQUo7QUFBMEQ7QUFBQTtBQUFBLDhCQUFNLFdBQVUsU0FBaEI7QUFBNEJELDhCQUFFRTtBQUE5QjtBQUExRCxxQkFBUDtBQUNILGlCQUxEO0FBREo7QUFGSixTQURGO0FBWUU7QUFBQTtBQUFBLGNBQVcsT0FBTSxZQUFqQixFQUE4QixhQUFZLEtBQTFDO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBWkYsS0FEUTtBQUFBLENBQWhCOztBQW1CQVQsVUFBVVUsU0FBVixHQUFzQjtBQUNsQlQsZUFBVyxpQkFBVVUsT0FBVixDQUFrQixpQkFBVUMsR0FBNUI7QUFETyxDQUF0Qjs7QUFJQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQ2hDYixtQkFBV2EsTUFBTWIsU0FEZTtBQUVoQ0MsYUFBS1ksTUFBTUM7QUFGcUIsS0FBWjtBQUFBLENBQXhCOztBQUtBZixZQUFZLHlCQUFRYSxlQUFSLEVBQXlCYixTQUF6QixDQUFaOztrQkFFZUEsUyIsImZpbGUiOiI0MjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBGdW5jdGlvblNlYXJjaCBmcm9tICcuL0Z1bmN0aW9uU2VhcmNoJ1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tICdyZWFjdC1zcGxpdC1wYW5lJztcblxuXG5sZXQgUmlnaHRQYW5lID0gKHsgdmFyaWFibGVzLCBkb2MgfSkgPT5cbiAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjMwJVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q3VycmVudCBWYXJpYWJsZXM8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHsgXy5tYXAoXy5zb3J0QnkodmFyaWFibGVzLCAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5vcmRlcjtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3BhbiBjbGFzc05hbWU9XCJ0aHJlZV9xdWFydGVyIG5hbWVcIj57IHgubmFtZSB9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInF1YXJ0ZXJcIj57IHgudmFsdWUgfTwvc3Bhbj48L2xpPjtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCI1MCVcIj5cbiAgICAgICAgICAgIDxkaXY+dHdvPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PnRocmVlPC9kaXY+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgIDwvU3BsaXRQYW5lPjtcblxuUmlnaHRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICB2YXJpYWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhcmlhYmxlczogc3RhdGUudmFyaWFibGVzLFxuICAgIGRvYzogc3RhdGUuZG9jc1xufSk7XG5cblJpZ2h0UGFuZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSaWdodFBhbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodFBhbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})