webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1100);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _index = __webpack_require__(69);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(516);\n\n__webpack_require__(517);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar onChange = function onChange(dispatch, name) {\n  (function (value) {\n    dispatch((0, _index.updateCodeEditor)(name, value));\n  });\n};\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar runTest = function runTest() {\n  console.log(command_name.value);\n  console.log(args_editor);\n  console.log(args_editor.editor.getValue());\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_editor.editor.getValue(),\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange('name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange('title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'args'),\n              name: 'command_editor',\n              value: _this.props.args,\n              ref: function ref(node) {\n                args_editor = node;\n              }\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange('testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Code preview:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              name: 'code_preview',\n              value: _this.props.preview,\n              ref: function ref(node) {\n                code_preview = node;\n              }\n            }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest(_this);\n                } },\n              'Run'\n            )\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJuYW1lIiwidmFsdWUiLCJjb21tYW5kX25hbWUiLCJjb21tYW5kX3RpdGxlIiwidGVzdF9pbnB1dHMiLCJhcmdzX2VkaXRvciIsImNvbW1hbmRfZWRpdG9yIiwiZXhwbGFuYXRpb25fZWRpdG9yIiwiY29kZV9wcmV2aWV3IiwicnVuVGVzdCIsImNvbnNvbGUiLCJsb2ciLCJlZGl0b3IiLCJnZXRWYWx1ZSIsInRpdGxlIiwiYXJncyIsImNvbW1hbmQiLCJleHBsYW5hdGlvbiIsIkNvbW1hbmRFZGl0IiwicmVuZGVyIiwibm9kZSIsInByb3BzIiwicHJldmlldyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29tbWFuZEVkaXRQYW5lIiwidGVzdElucHV0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQVdDLElBQVgsRUFBb0I7QUFDbkMsYUFBQ0MsS0FBRCxFQUFXO0FBQ1RGLGFBQVMsNkJBQWlCQyxJQUFqQixFQUF1QkMsS0FBdkIsQ0FBVDtBQUNELEdBRkQ7QUFHRCxDQUpEOztBQU1BLElBQUlDLHFCQUFKO0FBQUEsSUFBa0JDLHNCQUFsQjtBQUFBLElBQWlDQyxvQkFBakM7QUFBQSxJQUE4Q0Msb0JBQTlDO0FBQUEsSUFBMkRDLHVCQUEzRDtBQUFBLElBQTJFQywyQkFBM0U7QUFBQSxJQUErRkMscUJBQS9GOztBQUdBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCQyxVQUFRQyxHQUFSLENBQVlULGFBQWFELEtBQXpCO0FBQ0FTLFVBQVFDLEdBQVIsQ0FBWU4sV0FBWjtBQUNBSyxVQUFRQyxHQUFSLENB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RjtBQUdFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUNFLG9CQUFLLFFBRFA7QUFFRSxxQkFBTSxNQUZSO0FBR0Usd0JBQVMsSUFIWDtBQUlFLHdDQUF5QixNQUozQjtBQUtFLHNCQUFPLE9BTFQ7QUFNRSxxQkFBTSxRQU5SO0FBT0Usb0JBQUssY0FQUDtBQVFFLHFCQUFPLE1BQUtDLEtBQUwsQ0FBV0MsT0FScEI7QUFTRSxtQkFBSyxtQkFBUTtBQUFDZCwrQkFBZVksSUFBZjtBQUFxQjtBQVRyQyxjQUpGO0FBZUU7QUFBQTtBQUFBLGdCQUFRLFNBQVM7QUFBQSx5QkFBTVgsY0FBTjtBQUFBLGlCQUFqQjtBQUFBO0FBQUE7QUFmRjtBQTdDRTtBQURGLE9BREc7QUFBQSxLOzs7Ozs7QUFzRWIsSUFBTWMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ1YsV0FBT1UsTUFBTUMsZUFBTixDQUFzQlgsS0FERztBQUVoQ2QsVUFBTXdCLE1BQU1DLGVBQU4sQ0FBc0J6QixJQUZJO0FBR2hDZSxVQUFNUyxNQUFNQyxlQUFOLENBQXNCVixJQUhJO0FBSWhDQyxhQUFTUSxNQUFNQyxlQUFOLENBQXNCVCxPQUpDO0FBS2hDQyxpQkFBYU8sTUFBTUMsZUFBTixDQUFzQlIsV0FMSDtBQU1oQ1MsZ0JBQVlGLE1BQU1DLGVBQU4sQ0FBc0JDLFVBTkY7QUFPaENKLGFBQVNFLE1BQU1DLGVBQU4sQ0FBc0JIO0FBUEMsR0FBWjtBQUFBLENBQXhCOztBQVVBSixjQUFjLHlCQUFRSyxlQUFSLEVBQXlCTCxXQUF6QixDQUFkOztrQkFFZUEsVyIsImZpbGUiOiI0MzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGJyYWNlIGZyb20gJ2JyYWNlJztcbmltcG9ydCBBY2VFZGl0b3IgZnJvbSAncmVhY3QtYWNlJztcbmltcG9ydCB7IHVwZGF0ZUNvZGVFZGl0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGRvU2VhcmNoLCB1cGRhdGVIaW50LCB1cGRhdGVEb2NzLCB0ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cbmltcG9ydCAnYnJhY2UvbW9kZS9weXRob24nO1xuaW1wb3J0ICdicmFjZS90aGVtZS9naXRodWInO1xuXG5jb25zdCBvbkNoYW5nZSA9IChkaXNwYXRjaCwgbmFtZSkgPT4ge1xuICAodmFsdWUpID0+IHtcbiAgICBkaXNwYXRjaCh1cGRhdGVDb2RlRWRpdG9yKG5hbWUsIHZhbHVlKSk7XG4gIH1cbn07XG5cbmxldCBjb21tYW5kX25hbWUsIGNvbW1hbmRfdGl0bGUsIHRlc3RfaW5wdXRzLCBhcmdzX2VkaXRvciwgY29tbWFuZF9lZGl0b3IsIGV4cGxhbmF0aW9uX2VkaXRvciwgY29kZV9wcmV2aWV3O1xuXG5cbmNvbnN0IHJ1blRlc3QgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbW1hbmRfbmFtZS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKGFyZ3NfZWRpdG9yKTtcbiAgY29uc29sZS5sb2coYXJnc19lZGl0b3IuZWRpdG9yLmdldFZhbHVlKCkpO1xuICB0ZXN0RnVuY3Rpb24oe1xuICAgICAgbmFtZTogY29tbWFuZF9uYW1lLnZhbHVlLFxuICAgICAgdGl0bGU6Y29tbWFuZF90aXRsZS52YWx1ZSxcbiAgICAgIGFyZ3M6IGFyZ3NfZWRpdG9yLmVkaXRvci5nZXRWYWx1ZSgpLFxuICAgICAgY29tbWFuZDpjb21tYW5kX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKSxcbiAgICAgIGV4cGxhbmF0aW9uOmV4cGxhbmF0aW9uX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKVxuICB9KTtcbn07XG5cbmNsYXNzIENvbW1hbmRFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXRcIj5cbiAgICAgICAgICAgIDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwiY29kZXBhbmVcIiBzcGxpdD1cInZlcnRpY2FsXCIgZGVmYXVsdFNpemU9XCI2NiVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgbmFtZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkX3R3b19udW1iZXJzXCIgb25DaGFuZ2U9e29uQ2hhbmdlKCduYW1lJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF9uYW1lID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgdGl0bGU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZCB7eH0gYW5kIHt5fVwiIG9uQ2hhbmdlPXtvbkNoYW5nZSgndGl0bGUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX3RpdGxlID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkFyZ3VtZW50czo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnYXJncycpfVxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWFuZF9lZGl0b3JcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hcmdzfVxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2FyZ3NfZWRpdG9yID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgcHl0aG9uIGNvbW1hbmQ6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2NvbW1hbmQnKX1cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRfZWRpdG9yXCJcbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtjb21tYW5kX2VkaXRvciA9IG5vZGU7fX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgZXhwbGFuYXRpb246PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2V4cGxhbmF0aW9uJyl9XG4gICAgICAgICAgICAgIG5hbWU9XCJleHBsYW5hdGlvbl9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2V4cGxhbmF0aW9uX2VkaXRvciA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXQgdGVzdHBhbmUgb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UZXN0IGlucHV0czo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZSgndGVzdElucHV0cycpfSByZWY9e25vZGUgPT4ge3Rlc3RfaW5wdXRzID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvZGUgcHJldmlldzo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjb2RlX3ByZXZpZXdcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5wcmV2aWV3fVxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2NvZGVfcHJldmlldyA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJ1blRlc3QodGhpcyl9PlJ1bjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgIDwvZGl2PlxuXG5cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHRpdGxlOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUudGl0bGUsXG4gICAgbmFtZTogc3RhdGUuY29tbWFuZEVkaXRQYW5lLm5hbWUsXG4gICAgYXJnczogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmFyZ3MsXG4gICAgY29tbWFuZDogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmNvbW1hbmQsXG4gICAgZXhwbGFuYXRpb246IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5leHBsYW5hdGlvbixcbiAgICB0ZXN0SW5wdXRzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUudGVzdElucHV0cyxcbiAgICBwcmV2aWV3OiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUucHJldmlld1xufSk7XG5cbkNvbW1hbmRFZGl0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1hbmRFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEVkaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})