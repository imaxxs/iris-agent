webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1100);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _index = __webpack_require__(69);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(516);\n\n__webpack_require__(517);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar onChange = function onChange(dispatch, name) {\n  (function (value) {\n    dispatch((0, _index.updateCodeEditor)(name, value));\n  });\n};\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0;\n\nvar runTest = function runTest() {\n  console.log(command_name.value);\n  console.log(args_editor);\n  console.log(args_editor.editor.getValue());\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_editor.editor.getValue(),\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange('name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange('title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'args'),\n              name: 'command_editor',\n              ref: function ref(node) {\n                args_editor = node;\n              }\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange('testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Code preview:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              name: 'code_preview',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest(_this);\n                } },\n              'Run'\n            )\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJuYW1lIiwidmFsdWUiLCJjb21tYW5kX25hbWUiLCJjb21tYW5kX3RpdGxlIiwidGVzdF9pbnB1dHMiLCJhcmdzX2VkaXRvciIsImNvbW1hbmRfZWRpdG9yIiwiZXhwbGFuYXRpb25fZWRpdG9yIiwicnVuVGVzdCIsImNvbnNvbGUiLCJsb2ciLCJlZGl0b3IiLCJnZXRWYWx1ZSIsInRpdGxlIiwiYXJncyIsImNvbW1hbmQiLCJleHBsYW5hdGlvbiIsIkNvbW1hbmRFZGl0IiwicmVuZGVyIiwibm9kZSIsInByb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tYW5kRWRpdFBhbmUiLCJ0ZXN0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFvQjtBQUNuQyxhQUFDQyxLQUFELEVBQVc7QUFDVEYsYUFBUyw2QkFBaUJDLElBQWpCLEVBQXVCQyxLQUF2QixDQUFUO0FBQ0QsR0FGRDtBQUdELENBSkQ7O0FBTUEsSUFBSUMscUJBQUo7QUFBQSxJQUFrQkMsc0JBQWxCO0FBQUEsSUFBaUNDLG9CQUFqQztBQUFBLElBQThDQyxvQkFBOUM7QUFBQSxJQUEyREMsdUJBQTNEO0FBQUEsSUFBMkVDLDJCQUEzRTs7QUFHQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkMsVUFBUUMsR0FBUixDQUFZUixhQUFhRCxLQUF6QjtBQUNBUSxVQUFRQyxHQUFSLENBQVlMLFdBQVo7QUFDQUksVUFBUUMsR0FBUixDQUFZTCxZQUFZTSxNQUFaLENBQW1CQyxRQUFuQixFQUFaO0FBQ0EsNEJBQWE7QUFDVFosVUFBTUUsYUFBYUQsS0FEVjtBQUVUWSxXQUFNVixjQUFjRixLQUZYO0FBR1RhLFVBQU1ULFlBQVlNLE1BQVosQ0FBbUJDLFFBQW5CLEVBSEc7QUFJVEcsYUFBUVQsZUFBZUssTUFBZixDQUFzQkMsUUFBdEIsRUFKQztBQUtUSSxpQkFBWVQsbUJBQW1CSSxNQUFuQixDQUEwQkMsUUFBMUI7QUFMSCxHQUFiO0FBT0QsQ0FYRDs7SUFhTUssVzs7Ozs7Ozs7Ozs7Ozs7Z01BRUZDLE0sR0FBUztBQUFBLGFBQ0g7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVcsV0FBVSxVQUFyQixFQUFnQyxPQUFNLFVBQXRDLEVBQWlELGFBQVksS0FBN0Q7QUFDQTtBQUFBO0FBQUEsY0FBSyxTQUFNLFVBQVg7QUFDQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEscURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksdUJBQS9CLEVBQXVELFVBQVVwQixTQUFTLE1BQVQsQ0FBakUsRUFBbUYsS0FBSyxtQkFBUTtBQUFDSSwrQkFBZWlCLElBQWY7QUFBcUIsZUFBdEgsR0FGQTtBQUdBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBSEE7QUFJQSxxREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSx1QkFBL0IsRUFBdUQsVUFBVXJCLFNBQVMsT0FBVCxDQUFqRSxFQUFvRixLQUFLLG1CQUFRO0FBQUNLLGdDQUFnQmdCLElBQWhCO0FBQXNCLGVBQXhILEdBSkE7QUFLQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQUxBO0FBTUE7QUFDRSxvQkFBSyxRQURQO0FBRUUscUJBQU0sTUFGUjtBQUdFLHNCQUFPLE9BSFQ7QUFJRSx3Q0FBeUIsTUFKM0I7QUFLRSx3QkFBUyxJQUxYO0FBTUUscUJBQU0sUUFOUjtBQU9FLHdCQUFVckIsU0FBUyxNQUFLc0IsS0FBTCxDQUFXckIsUUFBcEIsRUFBOEIsTUFBOUIsQ0FQWjtBQVFFLG9CQUFLLGdCQVJQO0FBU0UsbUJBQUssbUJBQVE7QUFBQ00sOEJBQWNjLElBQWQ7QUFBb0I7QUFUcEMsY0FOQTtBQWlCQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQWpCQTtBQWtCQTtBQUNFLG9CQUFLLFFBRFA7QUFFRSxxQkFBTSxNQUZSO0FBR0Usc0JBQU8sT0FIVDtBQUlFLHdDQUF5QixNQUozQjtBQUtFLHdCQUFTLElBTFg7QUFNRSxxQkFBTSxRQU5SO0FBT0Usd0JBQVVyQixTQUFTLE1BQUtzQixLQUFMLENBQVdyQixRQUFwQixFQUE4QixTQUE5QixDQVBaO0FBUUUsb0JBQUssZ0JBUlA7QUFTRSxtQkFBSyxtQkFBUTtBQUFDTyxpQ0FBaUJhLElBQWpCO0FBQXVCOztBQVR2QyxjQWxCQTtBQThCQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQTlCQTtBQStCQTtBQUNFLG9CQUFLLFFBRFA7QUFFRSxxQkFBTSxNQUZSO0FBR0Usd0JBQVMsSUFIWDtBQUlFLHdDQUF5QixNQUozQjtBQUtFLHNCQUFPLE9BTFQ7QUFNRSxxQkFBTSxRQU5SO0FBT0Usd0JBQVVyQixTQUFTLE1BQUtzQixLQUFMLENBQVdyQixRQUFwQixFQUE4QixhQUE5QixDQVBaO0FBUUUsb0JBQUssb0JBUlA7QUFTRSxtQkFBSyxtQkFBUTtBQUFDUSxxQ0FBcUJZLElBQXJCO0FBQTJCO0FBVDNDO0FBL0JBLFdBREE7QUE0Q0Y7QUFBQTtBQUFBLGNBQUssV0FBVSxnQ0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBREY7QUFFRSxxREFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVXJCLFNBQVMsWUFBVCxDQUE3QixFQUFxRCxLQUFLLG1CQUFRO0FBQUNNLDhCQUFjZSxJQUFkO0FBQW9CLGVBQXZGLEdBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQUhGO0FBSUU7QUFDRSxvQkFBSyxRQURQO0FBRUUscUJBQU0sTUFGUjtBQUdFLHdCQUFTLElBSFg7QUFJRSx3Q0FBeUIsTUFKM0I7QUFLRSxzQkFBTyxPQUxUO0FBTUUscUJBQU0sUUFOUjtBQU9FLHdCQUFVckIsU0FBUyxNQUFLc0IsS0FBTCxDQUFXckIsUUFBcEIsRUFBOEIsYUFBOUIsQ0FQWjtBQVFFLG9CQUFLLGNBUlA7QUFTRSxtQkFBSyxtQkFBUTtBQUFDUSxxQ0FBcUJZLElBQXJCO0FBQTJCO0FBVDNDLGNBSkY7QUFlRTtBQUFBO0FBQUEsZ0JBQVEsU0FBUztBQUFBLHlCQUFNWCxjQUFOO0FBQUEsaUJBQWpCO0FBQUE7QUFBQTtBQWZGO0FBNUNFO0FBREYsT0FERztBQUFBLEs7Ozs7OztBQXFFYixJQUFNYSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDVCxXQUFPUyxNQUFNQyxlQUFOLENBQXNCVixLQURHO0FBRWhDYixVQUFNc0IsTUFBTUMsZUFBTixDQUFzQnZCLElBRkk7QUFHaENjLFVBQU1RLE1BQU1DLGVBQU4sQ0FBc0JULElBSEk7QUFJaENDLGFBQVNPLE1BQU1DLGVBQU4sQ0FBc0JSLE9BSkM7QUFLaENDLGlCQUFhTSxNQUFNQyxlQUFOLENBQXNCUCxXQUxIO0FBTWhDUSxnQkFBWUYsTUFBTUMsZUFBTixDQUFzQkM7QUFORixHQUFaO0FBQUEsQ0FBeEI7O0FBU0FQLGNBQWMseUJBQVFJLGVBQVIsRUFBeUJKLFdBQXpCLENBQWQ7O2tCQUVlQSxXIiwiZmlsZSI6IjQzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYnJhY2UgZnJvbSAnYnJhY2UnO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tICdyZWFjdC1hY2UnO1xuaW1wb3J0IHsgdXBkYXRlQ29kZUVkaXRvciB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgZG9TZWFyY2gsIHVwZGF0ZUhpbnQsIHVwZGF0ZURvY3MsIHRlc3RGdW5jdGlvbiB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tICdyZWFjdC1zcGxpdC1wYW5lJztcblxuaW1wb3J0ICdicmFjZS9tb2RlL3B5dGhvbic7XG5pbXBvcnQgJ2JyYWNlL3RoZW1lL2dpdGh1Yic7XG5cbmNvbnN0IG9uQ2hhbmdlID0gKGRpc3BhdGNoLCBuYW1lKSA9PiB7XG4gICh2YWx1ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHVwZGF0ZUNvZGVFZGl0b3IobmFtZSwgdmFsdWUpKTtcbiAgfVxufTtcblxubGV0IGNvbW1hbmRfbmFtZSwgY29tbWFuZF90aXRsZSwgdGVzdF9pbnB1dHMsIGFyZ3NfZWRpdG9yLCBjb21tYW5kX2VkaXRvciwgZXhwbGFuYXRpb25fZWRpdG9yO1xuXG5cbmNvbnN0IHJ1blRlc3QgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbW1hbmRfbmFtZS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKGFyZ3NfZWRpdG9yKTtcbiAgY29uc29sZS5sb2coYXJnc19lZGl0b3IuZWRpdG9yLmdldFZhbHVlKCkpO1xuICB0ZXN0RnVuY3Rpb24oe1xuICAgICAgbmFtZTogY29tbWFuZF9uYW1lLnZhbHVlLFxuICAgICAgdGl0bGU6Y29tbWFuZF90aXRsZS52YWx1ZSxcbiAgICAgIGFyZ3M6IGFyZ3NfZWRpdG9yLmVkaXRvci5nZXRWYWx1ZSgpLFxuICAgICAgY29tbWFuZDpjb21tYW5kX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKSxcbiAgICAgIGV4cGxhbmF0aW9uOmV4cGxhbmF0aW9uX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKVxuICB9KTtcbn07XG5cbmNsYXNzIENvbW1hbmRFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXRcIj5cbiAgICAgICAgICAgIDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwiY29kZXBhbmVcIiBzcGxpdD1cInZlcnRpY2FsXCIgZGVmYXVsdFNpemU9XCI2NiVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgbmFtZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkX3R3b19udW1iZXJzXCIgb25DaGFuZ2U9e29uQ2hhbmdlKCduYW1lJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF9uYW1lID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgdGl0bGU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZCB7eH0gYW5kIHt5fVwiIG9uQ2hhbmdlPXtvbkNoYW5nZSgndGl0bGUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX3RpdGxlID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkFyZ3VtZW50czo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnYXJncycpfVxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWFuZF9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2FyZ3NfZWRpdG9yID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgcHl0aG9uIGNvbW1hbmQ6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2NvbW1hbmQnKX1cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRfZWRpdG9yXCJcbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtjb21tYW5kX2VkaXRvciA9IG5vZGU7fX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgZXhwbGFuYXRpb246PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2V4cGxhbmF0aW9uJyl9XG4gICAgICAgICAgICAgIG5hbWU9XCJleHBsYW5hdGlvbl9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2V4cGxhbmF0aW9uX2VkaXRvciA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXQgdGVzdHBhbmUgb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UZXN0IGlucHV0czo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZSgndGVzdElucHV0cycpfSByZWY9e25vZGUgPT4ge3Rlc3RfaW5wdXRzID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvZGUgcHJldmlldzo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnZXhwbGFuYXRpb24nKX1cbiAgICAgICAgICAgICAgbmFtZT1cImNvZGVfcHJldmlld1wiXG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7ZXhwbGFuYXRpb25fZWRpdG9yID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcnVuVGVzdCh0aGlzKX0+UnVuPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgICAgPC9kaXY+XG5cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdGl0bGU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50aXRsZSxcbiAgICBuYW1lOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUubmFtZSxcbiAgICBhcmdzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuYXJncyxcbiAgICBjb21tYW5kOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuY29tbWFuZCxcbiAgICBleHBsYW5hdGlvbjogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmV4cGxhbmF0aW9uLFxuICAgIHRlc3RJbnB1dHM6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50ZXN0SW5wdXRzXG59KTtcblxuQ29tbWFuZEVkaXQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWFuZEVkaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tYW5kRWRpdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbW1hbmRFZGl0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})