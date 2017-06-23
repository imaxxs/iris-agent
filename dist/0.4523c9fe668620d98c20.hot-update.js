webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(54);\n\nvar _python = __webpack_require__(80);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar input = void 0;\n\nvar notNull = function notNull(inputHistory) {\n    return inputHistory.currId !== null;\n};\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return _.reverse(inputHistory.history.slice())[inputHistory.currId];\n};\n\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    console.log(keyCode);\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0) {\n            var stripText = predictions[0].text.replace(/{/g, '').replace(/}/g, '');\n            input.value = stripText;\n            (0, _python.updateHint)(input.value);\n        }\n        e.preventDefault();\n    }\n    if (keyCode === 38) {\n        // up arrow\n        console.log('up arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('diplay', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        console.log('down arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('display', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n// canal artefact wood angle coffee february media aunt tail load weapon jazz\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    // updateDocs(input.value);\n};\n\nvar lookup_func = function lookup_func(dispatch, minimizeState) {\n    dispatch((0, _index.setDocs)({ docs: !minimizeState.docs }));\n    (0, _python.updateDocs)(input.value);\n};\n\n// input goes here\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions,\n        minimizeState = _ref.minimizeState;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value] }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    dispatch((0, _index.storeCurrentInput)(''));\n                    // dispatch(updateDocEvent({'doc':{'title':''}}));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } }),\n            _react2.default.createElement('img', { className: 'hintButton', width: '21px', src: 'http://0.0.0.0:8000/static/noun_89606.svg', onClick: function onClick() {\n                    return lookup_func(dispatch, minimizeState);\n                } })\n        )\n    );\n};\n\nInputBox.propTypes = {\n    dispatch: _react.PropTypes.func,\n    inputHistory: _react.PropTypes.any,\n    predictions: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory,\n        predictions: state.predictions,\n        minimizeState: state.minimizeState\n\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsIm5vdE51bGwiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsInJldmVyc2UiLCJoaXN0b3J5Iiwic2xpY2UiLCJvbktleURvd24iLCJkaXNwYXRjaCIsImUiLCJwcmVkaWN0aW9ucyIsImtleUNvZGUiLCJ3aGljaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJzdHJpcFRleHQiLCJ0ZXh0IiwicmVwbGFjZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZUlucHV0IiwibG9va3VwX2Z1bmMiLCJtaW5pbWl6ZVN0YXRlIiwiZG9jcyIsIklucHV0Qm94Iiwibm9kZSIsInByb3BUeXBlcyIsImZ1bmMiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0lBQVlBLEM7Ozs7OztBQUdaLElBQUlDLGNBQUo7O0FBRUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLFlBQUQ7QUFBQSxXQUFrQkEsYUFBYUMsTUFBYixLQUF3QixJQUExQztBQUFBLENBQWhCO0FBQ0EsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0YsWUFBRDtBQUFBLFdBQWtCSCxFQUFFTSxPQUFGLENBQVVILGFBQWFJLE9BQWIsQ0FBcUJDLEtBQXJCLEVBQVYsRUFBd0NMLGFBQWFDLE1BQXJELENBQWxCO0FBQUEsQ0FBMUI7O0FBRUEsSUFBTUssYUFBWSxTQUFaQSxVQUFZLENBQUNDLFFBQUQsRUFBV1AsWUFBWCxFQUF5QlEsQ0FBekIsRUFBNEJDLFdBQTVCLEVBQTRDO0FBQzFELFFBQU1DLFVBQVVGLEVBQUVFLE9BQUYsSUFBYUYsRUFBRUcsS0FBL0I7QUFDQUMsWUFBUUMsR0FBUixDQUFZSCxPQUFaO0FBQ0Es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SUFBUjtBQUFjLGlCQUE3TCxHQVJKO0FBU0ksbURBQUssV0FBVSxZQUFmLEVBQTRCLE9BQU0sTUFBbEMsRUFBeUMsS0FBSSwyQ0FBN0MsRUFBeUYsU0FBUztBQUFBLDJCQUFNSixZQUFZZCxRQUFaLEVBQXNCZSxhQUF0QixDQUFOO0FBQUEsaUJBQWxHO0FBVEo7QUFESixLQURXO0FBQUEsQ0FBZjs7QUFlQUUsU0FBU0UsU0FBVCxHQUFxQjtBQUNqQm5CLGNBQVUsaUJBQVVvQixJQURIO0FBRWpCM0Isa0JBQWMsaUJBQVU0QixHQUZQO0FBR2pCbkIsaUJBQWEsaUJBQVVtQjtBQUhOLENBQXJCOztBQU1BLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDaEM5QixzQkFBYzhCLE1BQU05QixZQURZO0FBRWhDUyxxQkFBYXFCLE1BQU1yQixXQUZhO0FBR2hDYSx1QkFBZVEsTUFBTVI7O0FBSFcsS0FBWjtBQUFBLENBQXhCOztBQU9BLFFBRVFFLFFBRlIsY0FBVyx5QkFBUUssZUFBUixFQUF5QkwsUUFBekIsQ0FBWDs7UUFFUUEsUSxHQUFBQSxRO1FBQVUxQixLLEdBQUFBLEsiLCJmaWxlIjoiMTMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0LCB1cGRhdGVEb2NFdmVudCwgc2V0RG9jcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCwgdXBkYXRlRG9jcyB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cblxubGV0IGlucHV0O1xuXG5jb25zdCBub3ROdWxsID0gKGlucHV0SGlzdG9yeSkgPT4gaW5wdXRIaXN0b3J5LmN1cnJJZCAhPT0gbnVsbDtcbmNvbnN0IGdldEN1cnJlbnRIaXN0b3J5ID0gKGlucHV0SGlzdG9yeSkgPT4gXy5yZXZlcnNlKGlucHV0SGlzdG9yeS5oaXN0b3J5LnNsaWNlKCkpW2lucHV0SGlzdG9yeS5jdXJySWRdO1xuXG5jb25zdCBvbktleURvd24gPSAoZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSwgcHJlZGljdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XG4gICAgY29uc29sZS5sb2coa2V5Q29kZSk7XG4gICAgaWYgKGtleUNvZGUgPT09IDkpeyAvLyB0YWJcbiAgICAgIGlmKHByZWRpY3Rpb25zLmxlbmd0aCA+IDApe1xuICAgICAgICBsZXQgc3RyaXBUZXh0ID0gcHJlZGljdGlvbnNbMF0udGV4dC5yZXBsYWNlKC97L2csICcnKS5yZXBsYWNlKC99L2csICcnKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBzdHJpcFRleHQ7XG4gICAgICAgIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3dcbiAgICAgICAgY29uc29sZS5sb2coJ3VwIGFycm93Jyk7XG4gICAgICAgIGRpc3BhdGNoKG1vdmVJbnB1dEhpc3RvcnkoeydkaXJlY3Rpb24nOiAndXAnfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlwbGF5JywgZ2V0Q3VycmVudEhpc3RvcnkoaW5wdXRIaXN0b3J5KSk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoa2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvd1xuICAgICAgICBjb25zb2xlLmxvZygnZG93biBhcnJvdycpO1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ2Rvd24nfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheScsIGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSkpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIGNhbmFsIGFydGVmYWN0IHdvb2QgYW5nbGUgY29mZmVlIGZlYnJ1YXJ5IG1lZGlhIGF1bnQgdGFpbCBsb2FkIHdlYXBvbiBqYXp6XG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGVEb2NzKGlucHV0LnZhbHVlKTtcbn07XG5cbmNvbnN0IGxvb2t1cF9mdW5jID0gKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKHNldERvY3Moe2RvY3M6IW1pbmltaXplU3RhdGUuZG9jc30pKVxuICB1cGRhdGVEb2NzKGlucHV0LnZhbHVlKTtcbn1cblxuLy8gaW5wdXQgZ29lcyBoZXJlXG5sZXQgSW5wdXRCb3ggPSAoeyBkaXNwYXRjaCwgaW5wdXRIaXN0b3J5LCBwcmVkaWN0aW9ucywgbWluaW1pemVTdGF0ZSB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfYm94XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZE1lc3NhZ2UoeydvcmlnaW4nOiAndXNlcicsICd0ZXh0JzogW2lucHV0LnZhbHVlXSB9KSk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRJbnB1dEhpc3RvcnkoeydtZXNzYWdlJzogaW5wdXQudmFsdWV9KSk7XG4gICAgICAgICAgICBkaXNwYXRjaChzdG9yZUN1cnJlbnRJbnB1dCgnJykpO1xuICAgICAgICAgICAgLy8gZGlzcGF0Y2godXBkYXRlRG9jRXZlbnQoeydkb2MnOnsndGl0bGUnOicnfX0pKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoKX0gb25LZXlEb3duPXsoZSkgPT4gb25LZXlEb3duKGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIGUsIHByZWRpY3Rpb25zKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgbWVzc2FnZSBoZXJlXCIgcmVmPXtub2RlID0+IHtpbnB1dCA9IG5vZGU7fX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGludEJ1dHRvblwiIHdpZHRoPVwiMjFweFwiIHNyYz1cImh0dHA6Ly8wLjAuMC4wOjgwMDAvc3RhdGljL25vdW5fODk2MDYuc3ZnXCIgb25DbGljaz17KCkgPT4gbG9va3VwX2Z1bmMoZGlzcGF0Y2gsIG1pbmltaXplU3RhdGUpfT48L2ltZz5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PjtcblxuSW5wdXRCb3gucHJvcFR5cGVzID0ge1xuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dEhpc3Rvcnk6IFByb3BUeXBlcy5hbnksXG4gICAgcHJlZGljdGlvbnM6IFByb3BUeXBlcy5hbnlcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBpbnB1dEhpc3Rvcnk6IHN0YXRlLmlucHV0SGlzdG9yeSxcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnMsXG4gICAgbWluaW1pemVTdGF0ZTogc3RhdGUubWluaW1pemVTdGF0ZVxuXG59KTtcblxuSW5wdXRCb3ggPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5wdXRCb3gpO1xuXG5leHBvcnQge0lucHV0Qm94LCBpbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})