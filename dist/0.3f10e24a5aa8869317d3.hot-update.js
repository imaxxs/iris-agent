webpackHotUpdate(0,{

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1101);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _ArgumentAnnotation = __webpack_require__(432);\n\nvar _ArgumentAnnotation2 = _interopRequireDefault(_ArgumentAnnotation);\n\nvar _index = __webpack_require__(48);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(517);\n\n__webpack_require__(518);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar runTest = function runTest(args_obj) {\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_obj,\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar onChange = function onChange(dispatch, name) {\n  return function (value) {\n    console.log(\"setting\", name, value);\n    dispatch((0, _index.updateCodeEditor)(name, value));\n    runTest();\n  };\n};\n\nvar addArgument = function addArgument(dispatch) {\n  return function () {\n    dispatch((0, _index.addCommandArg)());\n  };\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange(_this.props.dispatch, 'name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange(_this.props.dispatch, 'title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: addArgument(_this.props.dispatch) },\n              'Add Argument'\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'arguments', onChange: function onChange() {\n                  return runTest(_this.props.args);\n                } },\n              _this.props.args.map(function (arg, i) {\n                return _react2.default.createElement(_ArgumentAnnotation2.default, { id: i, name: arg.arg_name });\n              })\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              value: _this.props.command,\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              value: _this.props.explanation,\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Code preview:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              name: 'code_preview',\n              value: _this.props.preview,\n              contentEditable: false,\n              ref: function ref(node) {\n                code_preview = node;\n              }\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange(_this.props.dispatch, 'testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest(_this.props.args);\n                } },\n              'Run'\n            )\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log(\"setting values\", this.props.command);\n      code_preview.editor.setOptions({\n        readOnly: true,\n        highlightActiveLine: false,\n        highlightGutterLine: false\n      });\n      // command_editor.editor.setValue(this.props.command);\n      // args_editor.editor.setValue(this.props.args);\n      // explanation_editor.editor.setValue(this.props.explanation);\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbImNvbW1hbmRfbmFtZSIsImNvbW1hbmRfdGl0bGUiLCJ0ZXN0X2lucHV0cyIsImFyZ3NfZWRpdG9yIiwiY29tbWFuZF9lZGl0b3IiLCJleHBsYW5hdGlvbl9lZGl0b3IiLCJjb2RlX3ByZXZpZXciLCJydW5UZXN0IiwiYXJnc19vYmoiLCJuYW1lIiwidmFsdWUiLCJ0aXRsZSIsImFyZ3MiLCJjb21tYW5kIiwiZWRpdG9yIiwiZ2V0VmFsdWUiLCJleHBsYW5hdGlvbiIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYWRkQXJndW1lbnQiLCJDb21tYW5kRWRpdCIsInJlbmRlciIsInByb3BzIiwibm9kZSIsIm1hcCIsImFyZyIsImkiLCJhcmdfbmFtZSIsInByZXZpZXciLCJzZXRPcHRpb25zIiwicmVhZE9ubHkiLCJoaWdobGlnaHRBY3RpdmVMaW5lIiwiaGlnaGxpZ2h0R3V0dGVyTGluZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29tbWFuZEVkaXRQYW5lIiwidGVzdElucHV0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQSxJQUFJQSxxQkFBSjtBQUFBLElBQWtCQyxzQkFBbEI7QUFBQSxJQUFpQ0Msb0JBQWpDO0FBQUEsSUFBOENDLG9CQUE5QztBQUFBLElBQTJEQyx1QkFBM0Q7QUFBQSxJQUEyRUMsMkJBQTNFO0FBQUEsSUFBK0ZDLHFCQUEvRjs7QUFHQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsUUFBRCxFQUFjO0FBQzVCLDRCQUFhO0FBQ1RDLFVBQU1ULGFBQWFVLEtBRFY7QUFFVEMsV0FBTVYsY0FBY1MsS0FGWDtBQUdURSxVQUFNSixRQUhHO0FBSVRLLGFBQVFULGVBQWVVLE1BQWYsQ0FBc0JDLFFBQXRCLEVBSkM7QUFLVEMsaUJBQVlYLG1CQUFtQlMsTUFBbkIsQ0FBMEJDLFFBQTFCO0FBTEgsR0FBYjtBQU9ELENBUkQ7O0FBVUEsSUFBTUUsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV1QsSUFBWDtBQUFBLFNBQ2YsVUFBQ0MsS0FBRCxFQUFXO0FBQ1RTLFlBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCWCxJQUF0QixFQUEyQkMsS0FBM0I7QUFDQVEsYUFBUyw2QkFBaUJULElBQWpCLEVBQXVCQyxLQUF2QixDQUFUO0FBQ0FIO0FBQ0QsR0FMYztBQUFBLENBQWpCOztBQU9BLElBQU1jLGNBQWMsU0FBZEEsV0FBYyxDQUFDSCxRQUFEO0FBQUEsU0FDbEIsWUFBTTtBQUNKQSxhQUFTLDJCQUFUO0FBQ0QsR0FIaUI7QUFBQSxDQUFwQjs7SUFLTUksVzs7Ozs7Ozs7Ozs7Ozs7Z01BY0ZDLE0sR0FBUztBQUFBLGFBQ0g7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVcsV0FBVSxVQUFyQixFQUFnQyxPQUFNLFVBQXRDLEVBQWlELGFBQVksS0FBN0Q7QUFDQTtBQUFBO0FBQUEsY0FBSyxTQUFNLFVBQVg7QUFDQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEscURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksdUJBQS9CLEVBQXVELFVBQVVOLFNBQVMsTUFBS08sS0FBTCxDQUFXTixRQUFwQixFQUE4QixNQUE5QixDQUFqRSxFQUF3RyxLQUFLLG1CQUFRO0FBQUNsQiwrQkFBZXlCLElBQWY7QUFBcUIsZUFBM0ksR0FGQTtBQUdBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBSEE7QUFJQSxxREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSx1QkFBL0IsRUFBdUQsVUFBVVIsU0FBUyxNQUFLTyxLQUFMLENBQVdOLFFBQXBCLEVBQThCLE9BQTlCLENBQWpFLEVBQXlHLEtBQUssbUJBQVE7QUFBQ2pCLGdDQUFnQndCLElBQWhCO0FBQXNCLGVBQTdJLEdBSkE7QUFLQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQUxBO0FBTUE7QUFBQTtBQUFBLGdCQUFRLFNBQVNKLFlBQVksTUFBS0csS0FBTCxDQUFXTixRQUF2QixDQUFqQjtBQUFBO0FBQUEsYUFOQTtBQU9BO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFdBQWYsRUFBMkIsVUFBVTtBQUFBLHlCQUFNWCxRQUFRLE1BQUtpQixLQUFMLENBQVdaLElBQW5CLENBQU47QUFBQSxpQkFBckM7QUFDRyxvQkFBS1ksS0FBTCxDQUFXWixJQUFYLENBQWdCYyxHQUFoQixDQUFvQixVQUFDQyxHQUFELEVBQUtDLENBQUw7QUFBQSx1QkFBVyw4REFBb0IsSUFBSUEsQ0FBeEIsRUFBMkIsTUFBTUQsSUFBSUUsUUFBckMsR0FBWDtBQUFBLGVBQXBCO0FBREgsYUFQQTtBQVVBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBVkE7QUFXQTtBQUNFLG9CQUFLLFFBRFA7QUFFRSxxQkFBTSxNQUZSO0FBR0Usc0JBQU8sT0FIVDtBQUlFLHdDQUF5QixNQUozQjtBQUtFLHdCQUFTLElBTFg7QUFNRSxxQkFBTSxRQU5SO0FBT0Usd0JBQVVaLFNBQVMsTUFBS08sS0FBTCxDQUFXTixRQUFwQixFQUE4QixTQUE5QixDQVBaO0FBUUUscUJBQU8sTUFBS00sS0FBTCxDQUFXWCxPQVJwQjtBQVNFLG9CQUFLLGdCQVRQO0FBVUUsbUJBQUssbUJBQVE7QUFBQ1QsaUNBQWlCcUIsSUFBakI7QUFBdUI7O0FBVnZDLGNBWEE7QUF3QkE7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsYUF4QkE7QUF5QkE7QUFDRSxvQkFBSyxRQURQO0FBRUUscUJBQU0sTUFGUjtBQUdFLHdCQUFTLElBSFg7QUFJRSx3Q0FBeUIsTUFKM0I7QUFLRSxzQkFBTyxPQUxUO0FBTUUscUJBQU0sUUFOUjtBQU9FLHdCQUFVUixTQUFTLE1BQUtPLEtBQUwsQ0FBV04sUUFBcEIsRUFBOEIsYUFBOUIsQ0FQWjtBQVFFLHFCQUFPLE1BQUtNLEtBQUwsQ0FBV1IsV0FScEI7QUFTRSxvQkFBSyxvQkFUUDtBQVVFLG1CQUFLLG1CQUFRO0FBQUNYLHFDQUFxQm9CLElBQXJCO0FBQTJCO0FBVjNDO0FBekJBLFdBREE7QUF1Q0Y7QUFBQTtBQUFBLGNBQUssV0FBVSxnQ0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUNFLG9CQUFLLFFBRFA7QUFFRSxxQkFBTSxNQUZSO0FBR0Usd0JBQVMsSUFIWDtBQUlFLHdDQUF5QixNQUozQjtBQUtFLHNCQUFPLE9BTFQ7QUFNRSxxQkFBTSxRQU5SO0FBT0Usb0JBQUssY0FQUDtBQVFFLHFCQUFPLE1BQUtELEtBQUwsQ0FBV00sT0FScEI7QUFTRSwrQkFBbUIsS0FUckI7QUFVRSxtQkFBSyxtQkFBUTtBQUFDeEIsK0JBQWVtQixJQUFmO0FBQXFCO0FBVnJDLGNBRkY7QUFjRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQWRGO0FBZUUscURBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVVSLFNBQVMsTUFBS08sS0FBTCxDQUFXTixRQUFwQixFQUE4QixZQUE5QixDQUE3QixFQUEwRSxLQUFLLG1CQUFRO0FBQUNoQiw4QkFBY3VCLElBQWQ7QUFBb0IsZUFBNUcsR0FmRjtBQWdCRTtBQUFBO0FBQUEsZ0JBQVEsU0FBUztBQUFBLHlCQUFNbEIsUUFBUSxNQUFLaUIsS0FBTCxDQUFXWixJQUFuQixDQUFOO0FBQUEsaUJBQWpCO0FBQUE7QUFBQTtBQWhCRjtBQXZDRTtBQURGLE9BREc7QUFBQSxLOzs7Ozt5Q0FaWTtBQUNqQk8sY0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtJLEtBQUwsQ0FBV1gsT0FBekM7QUFDQVAsbUJBQWFRLE1BQWIsQ0FBb0JpQixVQUFwQixDQUErQjtBQUMzQkMsa0JBQVUsSUFEaUI7QUFFM0JDLDZCQUFxQixLQUZNO0FBRzNCQyw2QkFBcUI7QUFITSxPQUEvQjtBQUtBO0FBQ0E7QUFDQTtBQUNIOzs7Ozs7QUFtRUwsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ3pCLFdBQU95QixNQUFNQyxlQUFOLENBQXNCMUIsS0FERztBQUVoQ0YsVUFBTTJCLE1BQU1DLGVBQU4sQ0FBc0I1QixJQUZJO0FBR2hDRyxVQUFNd0IsTUFBTUMsZUFBTixDQUFzQnpCLElBSEk7QUFJaENDLGFBQVN1QixNQUFNQyxlQUFOLENBQXNCeEIsT0FKQztBQUtoQ0csaUJBQWFvQixNQUFNQyxlQUFOLENBQXNCckIsV0FMSDtBQU1oQ3NCLGdCQUFZRixNQUFNQyxlQUFOLENBQXNCQyxVQU5GO0FBT2hDUixhQUFTTSxNQUFNQyxlQUFOLENBQXNCUDtBQVBDLEdBQVo7QUFBQSxDQUF4Qjs7QUFVQVIsY0FBYyx5QkFBUWEsZUFBUixFQUF5QmIsV0FBekIsQ0FBZDs7a0JBRWVBLFciLCJmaWxlIjoiNDM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBicmFjZSBmcm9tICdicmFjZSc7XG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJ3JlYWN0LWFjZSc7XG5pbXBvcnQgQXJndW1lbnRBbm5vdGF0aW9uIGZyb20gJy4vQXJndW1lbnRBbm5vdGF0aW9uJztcbmltcG9ydCB7IHVwZGF0ZUNvZGVFZGl0b3IsIGFkZENvbW1hbmRBcmcgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGRvU2VhcmNoLCB1cGRhdGVIaW50LCB1cGRhdGVEb2NzLCB0ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cbmltcG9ydCAnYnJhY2UvbW9kZS9weXRob24nO1xuaW1wb3J0ICdicmFjZS90aGVtZS9naXRodWInO1xuXG5cbmxldCBjb21tYW5kX25hbWUsIGNvbW1hbmRfdGl0bGUsIHRlc3RfaW5wdXRzLCBhcmdzX2VkaXRvciwgY29tbWFuZF9lZGl0b3IsIGV4cGxhbmF0aW9uX2VkaXRvciwgY29kZV9wcmV2aWV3O1xuXG5cbmNvbnN0IHJ1blRlc3QgPSAoYXJnc19vYmopID0+IHtcbiAgdGVzdEZ1bmN0aW9uKHtcbiAgICAgIG5hbWU6IGNvbW1hbmRfbmFtZS52YWx1ZSxcbiAgICAgIHRpdGxlOmNvbW1hbmRfdGl0bGUudmFsdWUsXG4gICAgICBhcmdzOiBhcmdzX29iaixcbiAgICAgIGNvbW1hbmQ6Y29tbWFuZF9lZGl0b3IuZWRpdG9yLmdldFZhbHVlKCksXG4gICAgICBleHBsYW5hdGlvbjpleHBsYW5hdGlvbl9lZGl0b3IuZWRpdG9yLmdldFZhbHVlKClcbiAgfSk7XG59O1xuXG5jb25zdCBvbkNoYW5nZSA9IChkaXNwYXRjaCwgbmFtZSkgPT5cbiAgKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5nXCIsbmFtZSx2YWx1ZSk7XG4gICAgZGlzcGF0Y2godXBkYXRlQ29kZUVkaXRvcihuYW1lLCB2YWx1ZSkpO1xuICAgIHJ1blRlc3QoKTtcbiAgfTtcblxuY29uc3QgYWRkQXJndW1lbnQgPSAoZGlzcGF0Y2gpID0+XG4gICgpID0+IHtcbiAgICBkaXNwYXRjaChhZGRDb21tYW5kQXJnKCkpO1xuICB9O1xuXG5jbGFzcyBDb21tYW5kRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyB2YWx1ZXNcIiwgdGhpcy5wcm9wcy5jb21tYW5kKTtcbiAgICAgICAgY29kZV9wcmV2aWV3LmVkaXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0QWN0aXZlTGluZTogZmFsc2UsXG4gICAgICAgICAgICBoaWdobGlnaHRHdXR0ZXJMaW5lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29tbWFuZF9lZGl0b3IuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMuY29tbWFuZCk7XG4gICAgICAgIC8vIGFyZ3NfZWRpdG9yLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLmFyZ3MpO1xuICAgICAgICAvLyBleHBsYW5hdGlvbl9lZGl0b3IuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMuZXhwbGFuYXRpb24pO1xuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXRcIj5cbiAgICAgICAgICAgIDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwiY29kZXBhbmVcIiBzcGxpdD1cInZlcnRpY2FsXCIgZGVmYXVsdFNpemU9XCI2NiVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgbmFtZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkX3R3b19udW1iZXJzXCIgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICduYW1lJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF9uYW1lID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgdGl0bGU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZCB7eH0gYW5kIHt5fVwiIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAndGl0bGUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX3RpdGxlID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkFyZ3VtZW50czo8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkQXJndW1lbnQodGhpcy5wcm9wcy5kaXNwYXRjaCl9PkFkZCBBcmd1bWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHNcIiBvbkNoYW5nZT17KCkgPT4gcnVuVGVzdCh0aGlzLnByb3BzLmFyZ3MpfT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXJncy5tYXAoKGFyZyxpKSA9PiA8QXJndW1lbnRBbm5vdGF0aW9uIGlkPXtpfSBuYW1lPXthcmcuYXJnX25hbWV9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIHB5dGhvbiBjb21tYW5kOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdjb21tYW5kJyl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNvbW1hbmR9XG4gICAgICAgICAgICAgIG5hbWU9XCJjb21tYW5kX2VkaXRvclwiXG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7Y29tbWFuZF9lZGl0b3IgPSBub2RlO319XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIGV4cGxhbmF0aW9uOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdleHBsYW5hdGlvbicpfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5leHBsYW5hdGlvbn1cbiAgICAgICAgICAgICAgbmFtZT1cImV4cGxhbmF0aW9uX2VkaXRvclwiXG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7ZXhwbGFuYXRpb25fZWRpdG9yID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZWRpdCB0ZXN0cGFuZSBvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvZGUgcHJldmlldzo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjb2RlX3ByZXZpZXdcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5wcmV2aWV3fVxuICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGUgPSB7ZmFsc2V9XG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7Y29kZV9wcmV2aWV3ID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UZXN0IGlucHV0czo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAndGVzdElucHV0cycpfSByZWY9e25vZGUgPT4ge3Rlc3RfaW5wdXRzID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBydW5UZXN0KHRoaXMucHJvcHMuYXJncyl9PlJ1bjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgIDwvZGl2PlxuXG5cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHRpdGxlOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUudGl0bGUsXG4gICAgbmFtZTogc3RhdGUuY29tbWFuZEVkaXRQYW5lLm5hbWUsXG4gICAgYXJnczogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmFyZ3MsXG4gICAgY29tbWFuZDogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmNvbW1hbmQsXG4gICAgZXhwbGFuYXRpb246IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5leHBsYW5hdGlvbixcbiAgICB0ZXN0SW5wdXRzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUudGVzdElucHV0cyxcbiAgICBwcmV2aWV3OiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUucHJldmlld1xufSk7XG5cbkNvbW1hbmRFZGl0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1hbmRFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEVkaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})