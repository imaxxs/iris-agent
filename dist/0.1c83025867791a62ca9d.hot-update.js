webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1100);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _index = __webpack_require__(69);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(516);\n\n__webpack_require__(517);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar onChange = function onChange(dispatch, name) {\n  (function (value) {\n    dispatch((0, _index.updateCodeEditor)(name, value));\n  });\n};\n\nvar runTest = function runTest() {\n  console.log(command_name.value);\n  console.log(args_editor);\n  console.log(args_editor.editor.getValue());\n  (0, _python.testFunction)({ name: command_name.value, title: command_title.value, explanation: args_editor.value });\n};\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0;\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange('name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange('title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'args'),\n              name: 'command_editor',\n              ref: function ref(node) {\n                args_editor = node;\n              }\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange('testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest(_this);\n                } },\n              'Run'\n            )\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJuYW1lIiwidmFsdWUiLCJydW5UZXN0IiwiY29uc29sZSIsImxvZyIsImNvbW1hbmRfbmFtZSIsImFyZ3NfZWRpdG9yIiwiZWRpdG9yIiwiZ2V0VmFsdWUiLCJ0aXRsZSIsImNvbW1hbmRfdGl0bGUiLCJleHBsYW5hdGlvbiIsInRlc3RfaW5wdXRzIiwiQ29tbWFuZEVkaXQiLCJyZW5kZXIiLCJub2RlIiwicHJvcHMiLCJjb21tYW5kX2VkaXRvciIsImV4cGxhbmF0aW9uX2VkaXRvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29tbWFuZEVkaXRQYW5lIiwiYXJncyIsImNvbW1hbmQiLCJ0ZXN0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFvQjtBQUNuQyxhQUFDQyxLQUFELEVBQVc7QUFDVEYsYUFBUyw2QkFBaUJDLElBQWpCLEVBQXVCQyxLQUF2QixDQUFUO0FBQ0QsR0FGRDtBQUdELENBSkQ7O0FBTUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDcEJDLFVBQVFDLEdBQVIsQ0FBWUMsYUFBYUosS0FBekI7QUFDQUUsVUFBUUMsR0FBUixDQUFZRSxXQUFaO0FBQ0FILFVBQVFDLEdBQVIsQ0FBWUUsWUFBWUMsTUFBWixDQUFtQkMsUUFBbkIsRUFBWjtBQUNBLDRCQUFhLEVBQUNSLE1BQU1LLGFBQWFKLEtBQXBCLEVBQTJCUSxPQUFNQyxjQUFjVCxLQUEvQyxFQUFzRFUsYUFBWUwsWUFBWUwsS0FBOUUsRUFBYjtBQUNELENBTEQ7O0FBT0EsSUFBSUkscUJBQUo7QUFBQSxJ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QXNCckIsSUFGSTtBQUdoQ3NCLFVBQU1GLE1BQU1DLGVBQU4sQ0FBc0JDLElBSEk7QUFJaENDLGFBQVNILE1BQU1DLGVBQU4sQ0FBc0JFLE9BSkM7QUFLaENaLGlCQUFhUyxNQUFNQyxlQUFOLENBQXNCVixXQUxIO0FBTWhDYSxnQkFBWUosTUFBTUMsZUFBTixDQUFzQkc7QUFORixHQUFaO0FBQUEsQ0FBeEI7O0FBU0FYLGNBQWMseUJBQVFNLGVBQVIsRUFBeUJOLFdBQXpCLENBQWQ7O2tCQUVlQSxXIiwiZmlsZSI6IjQzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYnJhY2UgZnJvbSAnYnJhY2UnO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tICdyZWFjdC1hY2UnO1xuaW1wb3J0IHsgdXBkYXRlQ29kZUVkaXRvciB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgZG9TZWFyY2gsIHVwZGF0ZUhpbnQsIHVwZGF0ZURvY3MsIHRlc3RGdW5jdGlvbiB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tICdyZWFjdC1zcGxpdC1wYW5lJztcblxuaW1wb3J0ICdicmFjZS9tb2RlL3B5dGhvbic7XG5pbXBvcnQgJ2JyYWNlL3RoZW1lL2dpdGh1Yic7XG5cbmNvbnN0IG9uQ2hhbmdlID0gKGRpc3BhdGNoLCBuYW1lKSA9PiB7XG4gICh2YWx1ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHVwZGF0ZUNvZGVFZGl0b3IobmFtZSwgdmFsdWUpKTtcbiAgfVxufTtcblxuY29uc3QgcnVuVGVzdCA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coY29tbWFuZF9uYW1lLnZhbHVlKTtcbiAgY29uc29sZS5sb2coYXJnc19lZGl0b3IpO1xuICBjb25zb2xlLmxvZyhhcmdzX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKSk7XG4gIHRlc3RGdW5jdGlvbih7bmFtZTogY29tbWFuZF9uYW1lLnZhbHVlLCB0aXRsZTpjb21tYW5kX3RpdGxlLnZhbHVlLCBleHBsYW5hdGlvbjphcmdzX2VkaXRvci52YWx1ZX0pO1xufTtcblxubGV0IGNvbW1hbmRfbmFtZSwgY29tbWFuZF90aXRsZSwgdGVzdF9pbnB1dHMsIGFyZ3NfZWRpdG9yO1xuXG5jbGFzcyBDb21tYW5kRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9lZGl0XCI+XG4gICAgICAgICAgICA8U3BsaXRQYW5lIGNsYXNzTmFtZT1cImNvZGVwYW5lXCIgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIGRlZmF1bHRTaXplPVwiNjYlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db21tYW5kIG5hbWU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZF90d29fbnVtYmVyc1wiIG9uQ2hhbmdlPXtvbkNoYW5nZSgnbmFtZScpfSByZWY9e25vZGUgPT4ge2NvbW1hbmRfbmFtZSA9IG5vZGU7fX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db21tYW5kIHRpdGxlOjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlLmcuLCBhZGQge3h9IGFuZCB7eX1cIiBvbkNoYW5nZT17b25DaGFuZ2UoJ3RpdGxlJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF90aXRsZSA9IG5vZGU7fX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Bcmd1bWVudHM6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2FyZ3MnKX1cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRfZWRpdG9yXCJcbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHthcmdzX2VkaXRvciA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIHB5dGhvbiBjb21tYW5kOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdjb21tYW5kJyl9XG4gICAgICAgICAgICAgIG5hbWU9XCJjb21tYW5kX2VkaXRvclwiXG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7Y29tbWFuZF9lZGl0b3IgPSBub2RlO319XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIGV4cGxhbmF0aW9uOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdleHBsYW5hdGlvbicpfVxuICAgICAgICAgICAgICBuYW1lPVwiZXhwbGFuYXRpb25fZWRpdG9yXCJcbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtleHBsYW5hdGlvbl9lZGl0b3IgPSBub2RlO319XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9lZGl0IHRlc3RwYW5lIG92ZXJmbG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGVzdCBpbnB1dHM6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17b25DaGFuZ2UoJ3Rlc3RJbnB1dHMnKX0gcmVmPXtub2RlID0+IHt0ZXN0X2lucHV0cyA9IG5vZGU7fX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcnVuVGVzdCh0aGlzKX0+UnVuPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgICAgPC9kaXY+XG5cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdGl0bGU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50aXRsZSxcbiAgICBuYW1lOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUubmFtZSxcbiAgICBhcmdzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuYXJncyxcbiAgICBjb21tYW5kOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuY29tbWFuZCxcbiAgICBleHBsYW5hdGlvbjogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmV4cGxhbmF0aW9uLFxuICAgIHRlc3RJbnB1dHM6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50ZXN0SW5wdXRzXG59KTtcblxuQ29tbWFuZEVkaXQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWFuZEVkaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tYW5kRWRpdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbW1hbmRFZGl0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})