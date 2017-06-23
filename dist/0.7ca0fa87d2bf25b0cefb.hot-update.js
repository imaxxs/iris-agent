webpackHotUpdate(0,{

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1101);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _ArgumentAnnotation = __webpack_require__(432);\n\nvar _ArgumentAnnotation2 = _interopRequireDefault(_ArgumentAnnotation);\n\nvar _index = __webpack_require__(48);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(517);\n\n__webpack_require__(518);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar runTest = function runTest(x) {\n  console.log(x);\n  console.log(command_name.value);\n  console.log(args_editor);\n  console.log(args_editor.editor.getValue());\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_editor.editor.getValue(),\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar onChange = function onChange(dispatch, name) {\n  return function (value) {\n    console.log(\"setting\", name, value);\n    dispatch((0, _index.updateCodeEditor)(name, value));\n    runTest();\n  };\n};\n\nvar addArgument = function addArgument(dispatch) {\n  return function () {\n    dispatch((0, _index.addCommandArg)());\n  };\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange(_this.props.dispatch, 'name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange(_this.props.dispatch, 'title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: addArgument(_this.props.dispatch) },\n              'Add Argument'\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'arguments' },\n              _this.props.args.map(function (arg, i) {\n                return _react2.default.createElement(_ArgumentAnnotation2.default, { id: i, name: arg.arg_name });\n              })\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              value: _this.props.command,\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              value: _this.props.explanation,\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Code preview:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              name: 'code_preview',\n              value: _this.props.preview,\n              contentEditable: false,\n              ref: function ref(node) {\n                code_preview = node;\n              }\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange(_this.props.dispatch, 'testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest(_this.props.args);\n                } },\n              'Run'\n            )\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log(\"setting values\", this.props.command);\n      code_preview.editor.setOptions({\n        readOnly: true,\n        highlightActiveLine: false,\n        highlightGutterLine: false\n      });\n      // command_editor.editor.setValue(this.props.command);\n      // args_editor.editor.setValue(this.props.args);\n      // explanation_editor.editor.setValue(this.props.explanation);\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbImNvbW1hbmRfbmFtZSIsImNvbW1hbmRfdGl0bGUiLCJ0ZXN0X2lucHV0cyIsImFyZ3NfZWRpdG9yIiwiY29tbWFuZF9lZGl0b3IiLCJleHBsYW5hdGlvbl9lZGl0b3IiLCJjb2RlX3ByZXZpZXciLCJydW5UZXN0IiwieCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImVkaXRvciIsImdldFZhbHVlIiwibmFtZSIsInRpdGxlIiwiYXJncyIsImNvbW1hbmQiLCJleHBsYW5hdGlvbiIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJhZGRBcmd1bWVudCIsIkNvbW1hbmRFZGl0IiwicmVuZGVyIiwicHJvcHMiLCJub2RlIiwibWFwIiwiYXJnIiwiaSIsImFyZ19uYW1lIiwicHJldmlldyIsInNldE9wdGlvbnMiLCJyZWFkT25seSIsImhpZ2hsaWdodEFjdGl2ZUxpbmUiLCJoaWdobGlnaHRHdXR0ZXJMaW5lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tYW5kRWRpdFBhbmUiLCJ0ZXN0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUdBLElBQUlBLHFCQUFKO0FBQUEsSUFBa0JDLHNCQUFsQjtBQUFBLElBQWlDQyxvQkFBakM7QUFBQSxJQUE4Q0Msb0JBQTlDO0FBQUEsSUFBMkRDLHVCQUEzRDtBQUFBLElBQTJFQywyQkFBM0U7QUFBQSxJQUErRkMscUJBQS9GOztBQUdBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxDQUFELEVBQU87QUFDckJDLFVBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBQyxVQUFRQyxHQUFSLENBQVlWLGFBQWFXLEtBQXpCO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWVAsV0FB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YyxLQUFMLENBQVdQLE9BQXpDO0FBQ0FYLG1CQUFhTSxNQUFiLENBQW9CbUIsVUFBcEIsQ0FBK0I7QUFDM0JDLGtCQUFVLElBRGlCO0FBRTNCQyw2QkFBcUIsS0FGTTtBQUczQkMsNkJBQXFCO0FBSE0sT0FBL0I7QUFLQTtBQUNBO0FBQ0E7QUFDSDs7Ozs7O0FBbUVMLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENyQixXQUFPcUIsTUFBTUMsZUFBTixDQUFzQnRCLEtBREc7QUFFaENELFVBQU1zQixNQUFNQyxlQUFOLENBQXNCdkIsSUFGSTtBQUdoQ0UsVUFBTW9CLE1BQU1DLGVBQU4sQ0FBc0JyQixJQUhJO0FBSWhDQyxhQUFTbUIsTUFBTUMsZUFBTixDQUFzQnBCLE9BSkM7QUFLaENDLGlCQUFha0IsTUFBTUMsZUFBTixDQUFzQm5CLFdBTEg7QUFNaENvQixnQkFBWUYsTUFBTUMsZUFBTixDQUFzQkMsVUFORjtBQU9oQ1IsYUFBU00sTUFBTUMsZUFBTixDQUFzQlA7QUFQQyxHQUFaO0FBQUEsQ0FBeEI7O0FBVUFSLGNBQWMseUJBQVFhLGVBQVIsRUFBeUJiLFdBQXpCLENBQWQ7O2tCQUVlQSxXIiwiZmlsZSI6IjQzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYnJhY2UgZnJvbSAnYnJhY2UnO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tICdyZWFjdC1hY2UnO1xuaW1wb3J0IEFyZ3VtZW50QW5ub3RhdGlvbiBmcm9tICcuL0FyZ3VtZW50QW5ub3RhdGlvbic7XG5pbXBvcnQgeyB1cGRhdGVDb2RlRWRpdG9yLCBhZGRDb21tYW5kQXJnIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBkb1NlYXJjaCwgdXBkYXRlSGludCwgdXBkYXRlRG9jcywgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gJ3JlYWN0LXNwbGl0LXBhbmUnO1xuXG5pbXBvcnQgJ2JyYWNlL21vZGUvcHl0aG9uJztcbmltcG9ydCAnYnJhY2UvdGhlbWUvZ2l0aHViJztcblxuXG5sZXQgY29tbWFuZF9uYW1lLCBjb21tYW5kX3RpdGxlLCB0ZXN0X2lucHV0cywgYXJnc19lZGl0b3IsIGNvbW1hbmRfZWRpdG9yLCBleHBsYW5hdGlvbl9lZGl0b3IsIGNvZGVfcHJldmlldztcblxuXG5jb25zdCBydW5UZXN0ID0gKHgpID0+IHtcbiAgY29uc29sZS5sb2coeCk7XG4gIGNvbnNvbGUubG9nKGNvbW1hbmRfbmFtZS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKGFyZ3NfZWRpdG9yKTtcbiAgY29uc29sZS5sb2coYXJnc19lZGl0b3IuZWRpdG9yLmdldFZhbHVlKCkpO1xuICB0ZXN0RnVuY3Rpb24oe1xuICAgICAgbmFtZTogY29tbWFuZF9uYW1lLnZhbHVlLFxuICAgICAgdGl0bGU6Y29tbWFuZF90aXRsZS52YWx1ZSxcbiAgICAgIGFyZ3M6IGFyZ3NfZWRpdG9yLmVkaXRvci5nZXRWYWx1ZSgpLFxuICAgICAgY29tbWFuZDpjb21tYW5kX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKSxcbiAgICAgIGV4cGxhbmF0aW9uOmV4cGxhbmF0aW9uX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKVxuICB9KTtcbn07XG5cbmNvbnN0IG9uQ2hhbmdlID0gKGRpc3BhdGNoLCBuYW1lKSA9PlxuICAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmdcIixuYW1lLHZhbHVlKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVDb2RlRWRpdG9yKG5hbWUsIHZhbHVlKSk7XG4gICAgcnVuVGVzdCgpO1xuICB9O1xuXG5jb25zdCBhZGRBcmd1bWVudCA9IChkaXNwYXRjaCkgPT5cbiAgKCkgPT4ge1xuICAgIGRpc3BhdGNoKGFkZENvbW1hbmRBcmcoKSk7XG4gIH07XG5cbmNsYXNzIENvbW1hbmRFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIHZhbHVlc1wiLCB0aGlzLnByb3BzLmNvbW1hbmQpO1xuICAgICAgICBjb2RlX3ByZXZpZXcuZWRpdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICBoaWdobGlnaHRBY3RpdmVMaW5lOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZ2hsaWdodEd1dHRlckxpbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb21tYW5kX2VkaXRvci5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy5jb21tYW5kKTtcbiAgICAgICAgLy8gYXJnc19lZGl0b3IuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMuYXJncyk7XG4gICAgICAgIC8vIGV4cGxhbmF0aW9uX2VkaXRvci5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy5leHBsYW5hdGlvbik7XG4gICAgfVxuXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZWRpdFwiPlxuICAgICAgICAgICAgPFNwbGl0UGFuZSBjbGFzc05hbWU9XCJjb2RlcGFuZVwiIHNwbGl0PVwidmVydGljYWxcIiBkZWZhdWx0U2l6ZT1cIjY2JVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJmbG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+Q29tbWFuZCBuYW1lOjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlLmcuLCBhZGRfdHdvX251bWJlcnNcIiBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ25hbWUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX25hbWUgPSBub2RlO319IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+Q29tbWFuZCB0aXRsZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkIHt4fSBhbmQge3l9XCIgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICd0aXRsZScpfSByZWY9e25vZGUgPT4ge2NvbW1hbmRfdGl0bGUgPSBub2RlO319IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+QXJndW1lbnRzOjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRBcmd1bWVudCh0aGlzLnByb3BzLmRpc3BhdGNoKX0+QWRkIEFyZ3VtZW50PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZ3VtZW50c1wiPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hcmdzLm1hcCgoYXJnLGkpID0+IDxBcmd1bWVudEFubm90YXRpb24gaWQ9e2l9IG5hbWU9e2FyZy5hcmdfbmFtZX0vPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgcHl0aG9uIGNvbW1hbmQ6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2NvbW1hbmQnKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuY29tbWFuZH1cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRfZWRpdG9yXCJcbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtjb21tYW5kX2VkaXRvciA9IG5vZGU7fX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgZXhwbGFuYXRpb246PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2V4cGxhbmF0aW9uJyl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmV4cGxhbmF0aW9ufVxuICAgICAgICAgICAgICBuYW1lPVwiZXhwbGFuYXRpb25fZWRpdG9yXCJcbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtleHBsYW5hdGlvbl9lZGl0b3IgPSBub2RlO319XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9lZGl0IHRlc3RwYW5lIG92ZXJmbG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+Q29kZSBwcmV2aWV3OjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvZGVfcHJldmlld1wiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZXZpZXd9XG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZSA9IHtmYWxzZX1cbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtjb2RlX3ByZXZpZXcgPSBub2RlO319XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRlc3QgaW5wdXRzOjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICd0ZXN0SW5wdXRzJyl9IHJlZj17bm9kZSA9PiB7dGVzdF9pbnB1dHMgPSBub2RlO319IC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJ1blRlc3QodGhpcy5wcm9wcy5hcmdzKX0+UnVuPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgICAgPC9kaXY+XG5cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdGl0bGU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50aXRsZSxcbiAgICBuYW1lOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUubmFtZSxcbiAgICBhcmdzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuYXJncyxcbiAgICBjb21tYW5kOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuY29tbWFuZCxcbiAgICBleHBsYW5hdGlvbjogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmV4cGxhbmF0aW9uLFxuICAgIHRlc3RJbnB1dHM6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50ZXN0SW5wdXRzLFxuICAgIHByZXZpZXc6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5wcmV2aWV3XG59KTtcblxuQ29tbWFuZEVkaXQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWFuZEVkaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tYW5kRWRpdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbW1hbmRFZGl0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})