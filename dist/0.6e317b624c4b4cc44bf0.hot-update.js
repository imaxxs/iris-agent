webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(63);\n\nvar _index = __webpack_require__(264);\n\nvar _python = __webpack_require__(166);\n\nvar _lodash = __webpack_require__(154);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar input = void 0;\n\nvar notNull = function notNull(inputHistory) {\n    return inputHistory.currId !== null;\n};\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return _.reverse(inputHistory.history.slice())[inputHistory.currId];\n};\n\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e) {\n    var keyCode = e.keyCode || e.which;\n    console.log(keyCode);\n    if (keyCode === 38) {\n        // up arrow\n        console.log('up arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('diplay', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        console.log('down arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('display', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n};\n\n// input goes here\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value] }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } })\n        )\n    );\n};\n\nInputBox.propTypes = {\n    dispatch: _react.PropTypes.func,\n    inputHistory: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsIm5vdE51bGwiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsInJldmVyc2UiLCJoaXN0b3J5Iiwic2xpY2UiLCJvbktleURvd24iLCJkaXNwYXRjaCIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJvbkNoYW5nZUlucHV0IiwiSW5wdXRCb3giLCJwcmV2ZW50RGVmYXVsdCIsIm5vZGUiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYW55IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxDOzs7Ozs7QUFHWixJQUFJQyxjQUFKOztBQUVBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxZQUFEO0FBQUEsV0FBa0JBLGFBQWFDLE1BQWIsS0FBd0IsSUFBMUM7QUFBQSxDQUFoQjtBQUNBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNGLFlBQUQ7QUFBQSxXQUFrQkgsRUFBRU0sT0FBRixDQUFVSCxhQUFhSSxPQUFiLENBQXFCQyxLQUFyQixFQUFWLEVBQXdDTCxhQUFhQyxNQUFyRCxDQUFsQjtBQUFBLENBQTFCOztBQUVBLElBQU1LLGFBQVksU0FBWkEsVUFBWSxDQUFDQyxRQUFELEVBQVdQLFlBQVgsRUFBeUJRLENBQXpCLEVBQStCO0FBQzdDLFFBQU1DLFVBQVVELEVBQUVDLE9BQUYsSUFBYUQsRUFBRUUsS0FBL0I7QUFDQUMsWUFBUUMsR0FBUixDQUFZSCxPQUFaO0FBQ0EsUUFBSUEsWUFBWSxFQUFoQixFQUFvQjtBQUFFO0FBQ2xCRSxnQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQUwsaUJBQVMsNkJBQWlCLEVBQUMsYUFBYSxJQUFkLEVBQWpCLENBQVQ7QUFDQUksZ0JBQVFDLEdBQVIsQ0FBWVosWUFBWjtBQUNBLFlBQUlELFFBQVFDLFlBQVIsQ0FBSixFQUEyQjtBQUN2Qlcsb0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCVixrQkFBa0JGLFlBQWxCLENBQXRCO0FBQ0FGLGtCQUFNZSxLQUFOLEdBQWNYLGtCQUFrQkYsWUFBbEIsQ0FBZDtBQUNIO0FBQ0osS0FSRCxNQVFPLElBQUdTLFlBQVksRUFBZixFQUFtQjtBQUFFO0FBQ3hCRSxnQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDQUwsaUJBQVMsNkJBQWlCLEVBQUMsYUFBYSxNQUFkLEVBQWpCLENBQVQ7QUFDQUksZ0JBQVFDLEdBQVIsQ0FBWVosWUFBWjtBQUNBLFlBQUlELFFBQVFDLFlBQVIsQ0FBSixFQUEyQjtBQUN2Qlcsb0JBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCVixrQkFBa0JGLFlBQWxCLENBQXZCO0FBQ0FGLGtCQUFNZSxLQUFOLEdBQWNYLGtCQUFrQkYsWUFBbEIsQ0FBZDtBQUNIO0FBQ0o7QUFDSixDQXBCRDs7QUFzQkEsSUFBTWMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDUCxRQUFELEVBQWM7QUFDaENBLGFBQVMsOEJBQWtCVCxNQUFNZSxLQUF4QixDQUFUO0FBQ0EsNEJBQVdmLE1BQU1lLEtBQWpCO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBLElBQUlFLFdBQVc7QUFBQSxRQUFHUixRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFhUCxZQUFiLFFBQWFBLFlBQWI7QUFBQSxXQUNYO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSxjQUFNLFVBQVUscUJBQUs7QUFDakJRLHNCQUFFUSxjQUFGO0FBQ0FULDZCQUFTLHVCQUFXLEVBQUMsVUFBVSxNQUFYLEVBQW1CLFFBQVEsQ0FBQ1QsTUFBTWUsS0FBUCxDQUEzQixFQUFYLENBQVQ7QUFDQU4sNkJBQVMsNEJBQWdCLEVBQUMsV0FBV1QsTUFBTWUsS0FBbEIsRUFBaEIsQ0FBVDtBQUNBZiwwQkFBTWUsS0FBTixHQUFjLEVBQWQ7QUFDSCxpQkFMRDtBQU1JLHFEQUFPLFVBQVU7QUFBQSwyQkFBTUMsY0FBY1AsUUFBZCxDQUFOO0FBQUEsaUJBQWpCLEVBQWdELFdBQVcsbUJBQUNDLENBQUQ7QUFBQSwyQkFBT0YsV0FBVUMsUUFBVixFQUFvQlAsWUFBcEIsRUFBa0NRLENBQWxDLENBQVA7QUFBQSxpQkFBM0QsRUFBd0csTUFBSyxNQUE3RyxFQUFvSCxhQUFZLG1CQUFoSSxFQUFvSixLQUFLLG1CQUFRO0FBQUMsNEJBZTVKVixLQWY0SixXQUFRbUIsSUFBUjtBQUFjLGlCQUFoTDtBQU5KO0FBREosS0FEVztBQUFBLENBQWY7O0FBWUFGLFNBQVNHLFNBQVQsR0FBcUI7QUFDakJYLGNBQVUsaUJBQVVZLElBREg7QUFFakJuQixrQkFBYyxpQkFBVW9CO0FBRlAsQ0FBckI7O0FBS0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ3RCLHNCQUFjc0IsTUFBTXRCO0FBRFksS0FBWjtBQUFBLENBQXhCOztBQUlBLFFBRVFlLFFBRlIsY0FBVyx5QkFBUU0sZUFBUixFQUF5Qk4sUUFBekIsQ0FBWDs7UUFFUUEsUSxHQUFBQSxRO1FBQVVqQixLLEdBQUFBLEsiLCJmaWxlIjoiMjY2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyB1cGRhdGVIaW50IH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cblxubGV0IGlucHV0O1xuXG5jb25zdCBub3ROdWxsID0gKGlucHV0SGlzdG9yeSkgPT4gaW5wdXRIaXN0b3J5LmN1cnJJZCAhPT0gbnVsbDtcbmNvbnN0IGdldEN1cnJlbnRIaXN0b3J5ID0gKGlucHV0SGlzdG9yeSkgPT4gXy5yZXZlcnNlKGlucHV0SGlzdG9yeS5oaXN0b3J5LnNsaWNlKCkpW2lucHV0SGlzdG9yeS5jdXJySWRdO1xuXG5jb25zdCBvbktleURvd24gPSAoZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSkgPT4ge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUgfHwgZS53aGljaDtcbiAgICBjb25zb2xlLmxvZyhrZXlDb2RlKTtcbiAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3dcbiAgICAgICAgY29uc29sZS5sb2coJ3VwIGFycm93Jyk7XG4gICAgICAgIGRpc3BhdGNoKG1vdmVJbnB1dEhpc3RvcnkoeydkaXJlY3Rpb24nOiAndXAnfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlwbGF5JywgZ2V0Q3VycmVudEhpc3RvcnkoaW5wdXRIaXN0b3J5KSk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoa2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvd1xuICAgICAgICBjb25zb2xlLmxvZygnZG93biBhcnJvdycpO1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ2Rvd24nfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheScsIGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSkpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHN0b3JlQ3VycmVudElucHV0KGlucHV0LnZhbHVlKSk7XG4gICAgdXBkYXRlSGludChpbnB1dC52YWx1ZSk7XG59O1xuXG4vLyBpbnB1dCBnb2VzIGhlcmVcbmxldCBJbnB1dEJveCA9ICh7IGRpc3BhdGNoLCBpbnB1dEhpc3RvcnkgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2JveFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRNZXNzYWdlKHsnb3JpZ2luJzogJ3VzZXInLCAndGV4dCc6IFtpbnB1dC52YWx1ZV0gfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goYWRkSW5wdXRIaXN0b3J5KHsnbWVzc2FnZSc6IGlucHV0LnZhbHVlfSkpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gpfSBvbktleURvd249eyhlKSA9PiBvbktleURvd24oZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ5b3VyIG1lc3NhZ2UgaGVyZVwiIHJlZj17bm9kZSA9PiB7aW5wdXQgPSBub2RlO319PjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj47XG5cbklucHV0Qm94LnByb3BUeXBlcyA9IHtcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRIaXN0b3J5OiBQcm9wVHlwZXMuYW55XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgaW5wdXRIaXN0b3J5OiBzdGF0ZS5pbnB1dEhpc3Rvcnlcbn0pO1xuXG5JbnB1dEJveCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbnB1dEJveCk7XG5cbmV4cG9ydCB7SW5wdXRCb3gsIGlucHV0fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0lucHV0Qm94LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})