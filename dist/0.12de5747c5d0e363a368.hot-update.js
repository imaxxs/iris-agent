webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1100);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _ArgumentAnnotation = __webpack_require__(1316);\n\nvar _ArgumentAnnotation2 = _interopRequireDefault(_ArgumentAnnotation);\n\nvar _index = __webpack_require__(69);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(516);\n\n__webpack_require__(517);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar runTest = function runTest() {\n  console.log(command_name.value);\n  console.log(args_editor);\n  console.log(args_editor.editor.getValue());\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_editor.editor.getValue(),\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar onChange = function onChange(dispatch, name) {\n  return function (value) {\n    console.log(\"setting\", name, value);\n    dispatch((0, _index.updateCodeEditor)(name, value));\n    runTest();\n  };\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange(_this.props.dispatch, 'name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange(_this.props.dispatch, 'title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return addArgument(_this.props.dispatch);\n                } },\n              'Add Argument'\n            ),\n            _this.props.args.map(function (arg, i) {\n              return _react2.default.createElement(_ArgumentAnnotation2.default, { id: i });\n            }),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'args'),\n              name: 'command_editor',\n              value: _this.props.args,\n              ref: function ref(node) {\n                args_editor = node;\n              }\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              value: _this.props.command,\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              value: _this.props.explanation,\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Code preview:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              name: 'code_preview',\n              value: _this.props.preview,\n              contentEditable: false,\n              ref: function ref(node) {\n                code_preview = node;\n              }\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange(_this.props.dispatch, 'testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest();\n                } },\n              'Run'\n            )\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log(\"setting values\", this.props.command);\n      code_preview.editor.setOptions({\n        readOnly: true,\n        highlightActiveLine: false,\n        highlightGutterLine: false\n      });\n      // command_editor.editor.setValue(this.props.command);\n      // args_editor.editor.setValue(this.props.args);\n      // explanation_editor.editor.setValue(this.props.explanation);\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbImNvbW1hbmRfbmFtZSIsImNvbW1hbmRfdGl0bGUiLCJ0ZXN0X2lucHV0cyIsImFyZ3NfZWRpdG9yIiwiY29tbWFuZF9lZGl0b3IiLCJleHBsYW5hdGlvbl9lZGl0b3IiLCJjb2RlX3ByZXZpZXciLCJydW5UZXN0IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiZWRpdG9yIiwiZ2V0VmFsdWUiLCJuYW1lIiwidGl0bGUiLCJhcmdzIiwiY29tbWFuZCIsImV4cGxhbmF0aW9uIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkNvbW1hbmRFZGl0IiwicmVuZGVyIiwicHJvcHMiLCJub2RlIiwiYWRkQXJndW1lbnQiLCJtYXAiLCJhcmciLCJpIiwicHJldmlldyIsInNldE9wdGlvbnMiLCJyZWFkT25seSIsImhpZ2hsaWdodEFjdGl2ZUxpbmUiLCJoaWdobGlnaHRHdXR0ZXJMaW5lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tYW5kRWRpdFBhbmUiLCJ0ZXN0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUdBLElBQUlBLHFCQUFKO0FBQUEsSUFBa0JDLHNCQUFsQjtBQUFBLElBQWlDQyxvQkFBakM7QUFBQSxJQUE4Q0Msb0JBQTlDO0FBQUEsSUFBMkRDLHVCQUEzRDtBQUFBLElBQTJFQywyQkFBM0U7QUFBQSxJQUErRkMscUJBQS9GOztBQUdBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCQyxVQUFRQyxHQUFSLENBQVlULGFBQWFVLEtBQXpCO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWU4sV0FBWjtBQUNBSyxVQUFRQyxHQUFSLENBQVlOLFlBQVlRLE1BQVosQ0FBbUJDLFFBQW5CLEVBQVo7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QSxLOzs7Ozt5Q0FaWTtBQUNqQkMsY0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUthLEtBQUwsQ0FBV04sT0FBekM7QUFDQVYsbUJBQWFLLE1BQWIsQ0FBb0JrQixVQUFwQixDQUErQjtBQUMzQkMsa0JBQVUsSUFEaUI7QUFFM0JDLDZCQUFxQixLQUZNO0FBRzNCQyw2QkFBcUI7QUFITSxPQUEvQjtBQUtBO0FBQ0E7QUFDQTtBQUNIOzs7Ozs7QUE2RUwsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ3BCLFdBQU9vQixNQUFNQyxlQUFOLENBQXNCckIsS0FERztBQUVoQ0QsVUFBTXFCLE1BQU1DLGVBQU4sQ0FBc0J0QixJQUZJO0FBR2hDRSxVQUFNbUIsTUFBTUMsZUFBTixDQUFzQnBCLElBSEk7QUFJaENDLGFBQVNrQixNQUFNQyxlQUFOLENBQXNCbkIsT0FKQztBQUtoQ0MsaUJBQWFpQixNQUFNQyxlQUFOLENBQXNCbEIsV0FMSDtBQU1oQ21CLGdCQUFZRixNQUFNQyxlQUFOLENBQXNCQyxVQU5GO0FBT2hDUixhQUFTTSxNQUFNQyxlQUFOLENBQXNCUDtBQVBDLEdBQVo7QUFBQSxDQUF4Qjs7QUFVQVIsY0FBYyx5QkFBUWEsZUFBUixFQUF5QmIsV0FBekIsQ0FBZDs7a0JBRWVBLFciLCJmaWxlIjoiNDM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBicmFjZSBmcm9tICdicmFjZSc7XG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJ3JlYWN0LWFjZSc7XG5pbXBvcnQgQXJndW1lbnRBbm5vdGF0aW9uIGZyb20gJy4vQXJndW1lbnRBbm5vdGF0aW9uJztcbmltcG9ydCB7IHVwZGF0ZUNvZGVFZGl0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGRvU2VhcmNoLCB1cGRhdGVIaW50LCB1cGRhdGVEb2NzLCB0ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cbmltcG9ydCAnYnJhY2UvbW9kZS9weXRob24nO1xuaW1wb3J0ICdicmFjZS90aGVtZS9naXRodWInO1xuXG5cbmxldCBjb21tYW5kX25hbWUsIGNvbW1hbmRfdGl0bGUsIHRlc3RfaW5wdXRzLCBhcmdzX2VkaXRvciwgY29tbWFuZF9lZGl0b3IsIGV4cGxhbmF0aW9uX2VkaXRvciwgY29kZV9wcmV2aWV3O1xuXG5cbmNvbnN0IHJ1blRlc3QgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbW1hbmRfbmFtZS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKGFyZ3NfZWRpdG9yKTtcbiAgY29uc29sZS5sb2coYXJnc19lZGl0b3IuZWRpdG9yLmdldFZhbHVlKCkpO1xuICB0ZXN0RnVuY3Rpb24oe1xuICAgICAgbmFtZTogY29tbWFuZF9uYW1lLnZhbHVlLFxuICAgICAgdGl0bGU6Y29tbWFuZF90aXRsZS52YWx1ZSxcbiAgICAgIGFyZ3M6IGFyZ3NfZWRpdG9yLmVkaXRvci5nZXRWYWx1ZSgpLFxuICAgICAgY29tbWFuZDpjb21tYW5kX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKSxcbiAgICAgIGV4cGxhbmF0aW9uOmV4cGxhbmF0aW9uX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKVxuICB9KTtcbn07XG5cbmNvbnN0IG9uQ2hhbmdlID0gKGRpc3BhdGNoLCBuYW1lKSA9PlxuICAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmdcIixuYW1lLHZhbHVlKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVDb2RlRWRpdG9yKG5hbWUsIHZhbHVlKSk7XG4gICAgcnVuVGVzdCgpO1xuICB9O1xuXG5jbGFzcyBDb21tYW5kRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyB2YWx1ZXNcIiwgdGhpcy5wcm9wcy5jb21tYW5kKTtcbiAgICAgICAgY29kZV9wcmV2aWV3LmVkaXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0QWN0aXZlTGluZTogZmFsc2UsXG4gICAgICAgICAgICBoaWdobGlnaHRHdXR0ZXJMaW5lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29tbWFuZF9lZGl0b3IuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMuY29tbWFuZCk7XG4gICAgICAgIC8vIGFyZ3NfZWRpdG9yLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLmFyZ3MpO1xuICAgICAgICAvLyBleHBsYW5hdGlvbl9lZGl0b3IuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMuZXhwbGFuYXRpb24pO1xuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXRcIj5cbiAgICAgICAgICAgIDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwiY29kZXBhbmVcIiBzcGxpdD1cInZlcnRpY2FsXCIgZGVmYXVsdFNpemU9XCI2NiVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgbmFtZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkX3R3b19udW1iZXJzXCIgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICduYW1lJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF9uYW1lID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgdGl0bGU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZCB7eH0gYW5kIHt5fVwiIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAndGl0bGUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX3RpdGxlID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkFyZ3VtZW50czo8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQXJndW1lbnQodGhpcy5wcm9wcy5kaXNwYXRjaCl9PkFkZCBBcmd1bWVudDwvYnV0dG9uPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuYXJncy5tYXAoKGFyZywgaSkgPT4gPEFyZ3VtZW50QW5ub3RhdGlvbiBpZD17aX0vPil9XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2FyZ3MnKX1cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRfZWRpdG9yXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYXJnc31cbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHthcmdzX2VkaXRvciA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIHB5dGhvbiBjb21tYW5kOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdjb21tYW5kJyl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNvbW1hbmR9XG4gICAgICAgICAgICAgIG5hbWU9XCJjb21tYW5kX2VkaXRvclwiXG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7Y29tbWFuZF9lZGl0b3IgPSBub2RlO319XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIGV4cGxhbmF0aW9uOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdleHBsYW5hdGlvbicpfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5leHBsYW5hdGlvbn1cbiAgICAgICAgICAgICAgbmFtZT1cImV4cGxhbmF0aW9uX2VkaXRvclwiXG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7ZXhwbGFuYXRpb25fZWRpdG9yID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZWRpdCB0ZXN0cGFuZSBvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvZGUgcHJldmlldzo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjb2RlX3ByZXZpZXdcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5wcmV2aWV3fVxuICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGUgPSB7ZmFsc2V9XG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7Y29kZV9wcmV2aWV3ID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UZXN0IGlucHV0czo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAndGVzdElucHV0cycpfSByZWY9e25vZGUgPT4ge3Rlc3RfaW5wdXRzID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBydW5UZXN0KCl9PlJ1bjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgIDwvZGl2PlxuXG5cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHRpdGxlOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUudGl0bGUsXG4gICAgbmFtZTogc3RhdGUuY29tbWFuZEVkaXRQYW5lLm5hbWUsXG4gICAgYXJnczogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmFyZ3MsXG4gICAgY29tbWFuZDogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmNvbW1hbmQsXG4gICAgZXhwbGFuYXRpb246IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5leHBsYW5hdGlvbixcbiAgICB0ZXN0SW5wdXRzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUudGVzdElucHV0cyxcbiAgICBwcmV2aWV3OiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUucHJldmlld1xufSk7XG5cbkNvbW1hbmRFZGl0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1hbmRFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEVkaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})