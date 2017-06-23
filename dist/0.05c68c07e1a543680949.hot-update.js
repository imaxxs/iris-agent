webpackHotUpdate(0,{

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(394);\n\nvar _redux = __webpack_require__(267);\n\nvar _types = __webpack_require__(274);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(160);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\nvar appendMessages = function appendMessages(oldMessages, action) {\n    // text, origin = 'user', type = null, arg = null) => {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: '', title: '', args: '', command: '', explanation: '', testInput: '' };\n    var action = arguments[1];\n\n    return state;\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJjb2RlX2VkaXQiLCJjb21tYW5kRWRpdFBhbmUiLCJuYW1lIiwiY29tbWFuZCIsImV4cGxhbmF0aW9uIiwidGVzdElucHV0IiwiaW5wdXRIaXN0b3J5IiwibmV3SWQiLCJBRERfSU5QVVRfSElTVE9SWSIsImN1cnJJZCIsIm1lc3NhZ2UiLCJNT1ZFX0lOUFVUX0hJU1RPUlkiLCJkaXJlY3Rpb24iLCJyb290UmVkdWNlciIsInJvdXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLEM7Ozs7OztBQUVaLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0IsUUFBSUEsVUFBVUMsU0FBZCxFQUF5QjtBQUNyQixlQUFPRCxLQUFQO0FBQ0g7QUFDRCxXQUFPLElBQVA7QUFDSCxDQUxEOztBQU9BLElBQU1FLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFjQyxNQUFkLEVBQXlCO0FBQUU7QUFDOUMsUUFBTUMsY0FBYyxFQUFwQjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7QUFDQSxRQUFJSCxZQUFZSSxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJYLEVBQUVZLEdBQUYsQ0FBTVAsV0FBTixFQUFtQixVQUFTUSxDQUFULEVBQVk7QUFBRSxtQkFBT0EsRUFBRUMsRUFBVDtBQUFjLFNBQS9DLENBQW5CO0FBQ0FOLHFCQUFhUixFQUFFZSxHQUFGLENBQU1mLEVBQUVZLEdBQUYsQ0FBTVAsV0FBTixFQUFtQixVQUFTUSxDQUFULEVBQVk7QUFBRSxtQkFBT0EsRUFBRUMsRUFBVDtBQUFjLFNBQS9DLENBQU4sQ0FBYjtBQUNIO0FBTjJDO0FBQUE7QUFBQTs7QUFBQTtBQU81Qyw2QkFBZ0JSLE9BQU9VLElBQXZCLDhIQUE2QjtBQUFBLGdCQUFsQkgsQ0FBa0I7O0FBQ3pCTDtBQUNBRCx3QkFBWVUsSUFBWixDQUFpQixFQUFDLFVBQVVYLE9BQU9ZLE1BQWxCLEVBQTBCLFFBQVFMLENBQWxDLEVBQXFDLE1BQU1MLFVBQTNDO0FBQ0MseUJBQVNQLFlBQVlLLE9BQU9hLEtBQW5CLENBRFYsRUFDcUMsT0FBT2xCLFlBQVlLLE9BQU9jLEdBQW5CLENBRDVDLEVBQWpCO0FBRUg7QUFYMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZNUMsV0FBT2YsWUFBWWdCLE1BQVosQ0FBbUJkLFdBQW5CLENBQVA7QUFDSCxDQWJEOztBQWVBLElBQU1lLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBUWpCLE1BQVIsRUFBbUI7QUFBQSxRQUNuQ2tCLFFBRG1DLEdBQ3RCRCxLQURzQixDQUNuQ0MsUUFEbUM7O0FBRTNDLHdCQUFZRCxLQUFaLElBQW1CQyxVQUFVcEIsZUFBZW9CLFFBQWYsRUFBeUJsQixNQUF6QixDQUE3QixFQUErRG1CLE1BQU1uQixPQUFPb0IsT0FBNUU7QUFDSCxDQUhEOztBQUtBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxHQUFnSjtBQUFBLFFBQS9JUixLQUErSSx1RUFBdkksRUFBQyxXQUFXLEVBQVosRUFBZ0IsZ0JBQWdCLEVBQUUsWUFBWSxFQUFkLEVBQWtCLFNBQVMsSUFBM0IsRUFBaUMsVUFBVSxLQUEzQyxFQUFrRCxNQUFNLENBQXhELEVBQTJELFFBQVEsRUFBbkUsRUFBaEMsRUFBeUcsU0FBUyxPQUFsSCxFQUF1STtBQUFBLFFBQVhiLE1BQVc7QUFBQSxRQUN6SnNCLE9BRHlKLEdBQy9IVCxLQUQrSCxDQUN6SlMsT0FEeUo7QUFBQSxRQUNoSkMsWUFEZ0osR0FDL0hWLEtBRCtILENBQ2hKVSxZQURnSjs7QUFFakssUUFBSUMsaUJBQUo7QUFDQSxZQUFReEIsT0FBT3lCLElBQWY7QUFDSSxhQUFLaEMsTUFBTWlDLGNBQVg7QUFDSXRCLG9CQUFRQyxHQUFSLENBQVlMLE9BQU9xQixZQUFQLENBQW9CRSxZQUFoQztBQUNBLG1CQUFPLEVBQUVELFNBQVN0QixPQUFPcUIsWUFBUCxDQUFvQkMsT0FBL0IsRUFBd0NDLGNBQWN2QixPQUFPcUIsWUFBUCxDQUFvQkUsWUFBMUUsRUFBd0YsU0FBU1YsTUFBTUEsS0FBdkcsRUFBUDtBQUNKLGFBQUtwQixNQUFNa0MsV0FBWDtBQUNJLG1CQUFPLEVBQUVMLGdCQUFGLEVBQVdDLGNBQWNQLG9CQUFvQk8sWUFBcEIsRUFBa0N2QixNQUFsQyxDQUF6QixFQUFvRSxTQUFTYSxNQUFNQSxLQUFuRixFQUFQO0FBQ0osYUFBS3BCLE1BQU1tQyxrQkFBWDtBQUNJLGdCQUFJNUIsT0FBT1UsSUFBUCxDQUFZUCxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLHVCQUFPVSxLQUFQO0FBQ0g7QUFDRFcsdUJBQVdSLG9CQUFvQk8sWUFBcEIsRUFBa0N2QixNQUFsQyxDQUFYO0FBQ0EsZ0JBQUlBLE9BQU9hLEtBQVAsS0FBaUIsT0FBckIsRUFBOEI7QUFDMUI7QUFDQTtBQUNBLG9CQUFJZ0IsUUFBUTdCLE9BQU9zQixPQUFQLENBQWVuQixNQUEzQjtBQUNBcUIsd0NBQWVBLFFBQWYsSUFBeUJNLE9BQU85QixPQUFPK0IsS0FBdkMsRUFBOEN2QixJQUFJcUIsS0FBbEQ7QUFDQSx1QkFBTyxFQUFFUCxTQUFTdEIsT0FBT3NCLE9BQVAsQ0FBZVAsTUFBZixDQUFzQixDQUFDUyxRQUFELENBQXRCLENBQVgsRUFBOEMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFkLEVBQWtCLFNBQVMsSUFBM0IsRUFBaUMsVUFBVSxLQUEzQyxFQUFrRCxNQUFNQSxTQUFTaEIsRUFBVCxHQUFjLENBQXRFLEVBQXlFLFFBQVEsRUFBakYsRUFBOUQsRUFBcUpLLE9BQU8sT0FBNUosRUFBUDtBQUNIO0FBQ0QsbUJBQU8sRUFBRVMsZ0JBQUYsRUFBV0MsY0FBY0MsUUFBekIsRUFBbUNYLE9BQU9iLE9BQU9hLEtBQWpELEVBQVA7QUFDSixhQUFLcEIsTUFBTXVDLGlCQUFYO0FBQ0ksZ0JBQU1DLGFBQWF2QyxFQUFFWSxHQUFGLENBQU1nQixPQUFOLEVBQWUsZ0JBQVE7QUFDdEMsb0JBQU1ZLG1CQUFVQyxJQUFWLENBQU47QUFDQSxvQkFBSUEsS0FBSzNCLEVBQUwsS0FBWVIsT0FBT1EsRUFBdkIsRUFBMkI7QUFDdkIwQix3QkFBSUUsTUFBSixHQUFhLENBQUNGLElBQUlFLE1BQWxCO0FBQ0g7QUFDRCx1QkFBT0YsR0FBUDtBQUNILGFBTmtCLENBQW5CO0FBT0FWLG9DQUFlRCxZQUFmO0FBQ0EsZ0JBQUlDLFNBQVNoQixFQUFULEtBQWdCUixPQUFPUSxFQUEzQixFQUErQjtBQUMzQmdCLHlCQUFTWSxNQUFULEdBQWtCLENBQUNaLFNBQVNZLE1BQTVCO0FBQ0g7QUFDRCxtQkFBTyxFQUFFZCxTQUFTVyxVQUFYLEVBQXVCVixjQUFjQyxRQUFyQyxFQUErQ1gsT0FBT0EsTUFBTUEsS0FBNUQsRUFBUDtBQUNKO0FBQ0ksbUJBQU9BLEtBQVA7QUFqQ1I7QUFtQ0gsQ0F0Q0Q7O0FBd0NBLElBQU13QixZQUFZLFNBQVpBLFNBQVksR0FBd0I7QUFBQSxRQUF2QnhCLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxRQUFYYixNQUFXOztBQUN0QyxZQUFRQSxPQUFPeUIsSUFBZjtBQUNJLGFBQUtoQyxNQUFNNkMsZ0JBQVg7QUFDSSxtQkFBT3RDLE9BQU9xQyxTQUFkO0FBQ0o7QUFDSSxtQkFBT3hCLEtBQVA7QUFKUjtBQU1ILENBUEQ7O0FBU0EsSUFBTTBCLGNBQWMsU0FBZEEsV0FBYyxHQUF3QjtBQUFBLFFBQXZCMUIsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLFFBQVhiLE1BQVc7O0FBQ3hDLFlBQVFBLE9BQU95QixJQUFmO0FBQ0ksYUFBS2hDLE1BQU0rQyxrQkFBWDtBQUNJLG1CQUFPeEMsT0FBT3VDLFdBQWQ7QUFDSjtBQUNJLG1CQUFPMUIsS0FBUDtBQUpSO0FBTUgsQ0FQRDs7QUFTQSxJQUFNNEIsT0FBTyxTQUFQQSxJQUFPLEdBQTJFO0FBQUEsUUFBMUU1QixLQUEwRSx1RUFBbEUsRUFBQ2lCLE9BQU8sRUFBUixFQUFZWSxVQUFVLEVBQXRCLEVBQTBCQyxhQUFhLEVBQXZDLEVBQTJDQyxRQUFPLEVBQWxELEVBQWtFO0FBQUEsUUFBWDVDLE1BQVc7O0FBQ3BGLFlBQVFBLE9BQU95QixJQUFmO0FBQ0ksYUFBS2hDLE1BQU1vRCxXQUFYO0FBQ0ksbUJBQU83QyxPQUFPOEMsR0FBZDtBQUNKO0FBQ0ksbUJBQU9qQyxLQUFQO0FBSlI7QUFNSCxDQVBEOztBQVNBLElBQU1rQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQStDO0FBQUEsUUFBOUNsQyxLQUE4Qyx1RUFBdEMsRUFBQ21DLFFBQVEsRUFBVCxFQUFhQyxTQUFTLEVBQXRCLEVBQXNDO0FBQUEsUUFBWGpELE1BQVc7O0FBQ3BFLFlBQVFBLE9BQU95QixJQUFmO0FBQ0UsYUFBS2hDLE1BQU15RCxXQUFYO0FBQ0UsZ0NBQVdyQyxLQUFYLElBQWtCbUMsUUFBUWhELE9BQU9nRCxNQUFqQztBQUNGLGFBQUt2RCxNQUFNMEQsY0FBWDtBQUNFLGdDQUFXdEMsS0FBWCxJQUFrQm9DLFNBQVNqRCxPQUFPaUQsT0FBbEM7QUFDRjtBQUNFLG1CQUFPcEMsS0FBUDtBQU5KO0FBUUQsQ0FURDs7QUFXQSxJQUFNdUMsZUFBZSxTQUFmQSxZQUFlLEdBQW1DO0FBQUEsUUFBbEN2QyxLQUFrQyx1RUFBMUIsRUFBQyxTQUFTLEVBQVYsRUFBMEI7QUFBQSxRQUFYYixNQUFXOztBQUN0RCxZQUFRQSxPQUFPeUIsSUFBZjtBQUNFLGFBQUtoQyxNQUFNNEQsbUJBQVg7QUFDRSxtQkFBTyxFQUFDLFNBQVNyRCxPQUFPb0QsWUFBakIsRUFBUDtBQUNGO0FBQ0UsbUJBQU92QyxLQUFQO0FBSko7QUFNRCxDQVBEOztBQVNBLElBQU15QyxnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQW9EO0FBQUEsUUFBbkR6QyxLQUFtRCx1RUFBN0MsRUFBQyxRQUFRLElBQVQsRUFBZSxhQUFZLElBQTNCLEVBQTZDO0FBQUEsUUFBWGIsTUFBVzs7QUFDeEUsWUFBUUEsT0FBT3lCLElBQWY7QUFDRSxhQUFLaEMsTUFBTThELFFBQVg7QUFDRSxnQ0FBVzFDLEtBQVgsSUFBa0IsUUFBUWIsT0FBT3lDLElBQWpDO0FBQ0YsYUFBS2hELE1BQU0rRCxhQUFYO0FBQ0UsZ0NBQVczQyxLQUFYLElBQWtCLGFBQWFiLE9BQU95RCxTQUF0QztBQUNGO0FBQ0UsbUJBQU81QyxLQUFQO0FBTko7QUFRRCxDQVREOztBQVdBLElBQU02QyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQWdHO0FBQUEsUUFBL0Y3QyxLQUErRix1RUFBekYsRUFBQzhDLE1BQU0sRUFBUCxFQUFXN0IsT0FBTyxFQUFsQixFQUFzQlgsTUFBTSxFQUE1QixFQUFnQ3lDLFNBQVMsRUFBekMsRUFBNkNDLGFBQWEsRUFBMUQsRUFBOERDLFdBQVcsRUFBekUsRUFBeUY7QUFBQSxRQUFYOUQsTUFBVzs7QUFDdEgsV0FBT2EsS0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTWtELGVBQWUsU0FBZkEsWUFBZSxHQUE0RTtBQUFBLFFBQTNFbEQsS0FBMkUsdUVBQW5FLEVBQUMsV0FBVyxFQUFaLEVBQWdCLFVBQVUsSUFBMUIsRUFBZ0MsZUFBZSxLQUEvQyxFQUFtRTtBQUFBLFFBQVhiLE1BQVc7O0FBQzdGLFFBQUlnRSxjQUFKO0FBQ0EsWUFBUWhFLE9BQU95QixJQUFmO0FBQ0ksYUFBS2hDLE1BQU13RSxpQkFBWDtBQUNJRCxvQkFBUW5ELE1BQU1xRCxNQUFkO0FBQ0EsZ0JBQUlyRCxNQUFNUyxPQUFOLENBQWNuQixNQUFkLEtBQXlCLENBQXpCLElBQThCNkQsVUFBVSxJQUE1QyxFQUFrRDtBQUM5Q0Esd0JBQVEsQ0FBUjtBQUNIO0FBQ0QsZ0NBQVduRCxLQUFYLElBQWtCLHdDQUFlQSxNQUFNUyxPQUFyQixJQUE4QnRCLE9BQU9tRSxPQUFyQyxFQUFsQixFQUFpRSxVQUFVSCxLQUEzRTtBQUNKLGFBQUt2RSxNQUFNMkUsa0JBQVg7QUFDSSxnQkFBSXZELE1BQU1TLE9BQU4sQ0FBY25CLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIsdUJBQU9VLEtBQVA7QUFDSDtBQUNEbUQsb0JBQVFuRCxNQUFNcUQsTUFBTixJQUFnQixDQUF4QjtBQUNBLGdCQUFJbEUsT0FBT3FFLFNBQVAsS0FBcUIsSUFBekIsRUFBK0I7QUFDM0Isb0JBQUlMLFFBQVNuRCxNQUFNUyxPQUFOLENBQWNuQixNQUFkLEdBQXVCLENBQXBDLEVBQXdDO0FBQ3BDNkQsNkJBQVMsQ0FBVDtBQUNIO0FBQ0osYUFKRCxNQUlPO0FBQ0gsb0JBQUlBLFNBQVMsQ0FBYixFQUFnQjtBQUNaQSw2QkFBUyxDQUFUO0FBQ0g7QUFDSjtBQUNELGdDQUFXbkQsS0FBWCxJQUFrQixVQUFVbUQsS0FBNUI7QUFDSjtBQUNJLG1CQUFPbkQsS0FBUDtBQXZCUjtBQXlCSCxDQTNCRDs7QUE2QkEsSUFBTXlELGNBQWMsNEJBQWdCO0FBQ2hDakQsOEJBRGdDO0FBRWhDZ0Isd0JBRmdDO0FBR2hDRSw0QkFIZ0M7QUFJaEN3Qiw4QkFKZ0M7QUFLaENYLDhCQUxnQztBQU1oQ1gsY0FOZ0M7QUFPaENNLGtDQVBnQztBQVFoQ08sZ0NBUmdDO0FBU2hDSSxvQ0FUZ0M7QUFVaENhO0FBVmdDLENBQWhCLENBQXBCOztrQkFhZUQsVyIsImZpbGUiOiI0NTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIGFzIHJvdXRpbmcgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHZhbHVlT3JOdWxsID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGFwcGVuZE1lc3NhZ2VzID0gKG9sZE1lc3NhZ2VzLCBhY3Rpb24pID0+IHsgLy8gdGV4dCwgb3JpZ2luID0gJ3VzZXInLCB0eXBlID0gbnVsbCwgYXJnID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gW107XG4gICAgbGV0IGN1cnJlbnRNYXggPSAwO1xuICAgIGlmIChvbGRNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXAnLCBfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgICAgICBjdXJyZW50TWF4ID0gXy5tYXgoXy5tYXAob2xkTWVzc2FnZXMsIGZ1bmN0aW9uKG0pIHsgcmV0dXJuIG0uaWQ7IH0pKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBtIG9mIGFjdGlvbi50ZXh0KSB7XG4gICAgICAgIGN1cnJlbnRNYXgrKztcbiAgICAgICAgbmV3TWVzc2FnZXMucHVzaCh7J29yaWdpbic6IGFjdGlvbi5vcmlnaW4sICd0ZXh0JzogbSwgJ2lkJzogY3VycmVudE1heCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogdmFsdWVPck51bGwoYWN0aW9uLnN0YXRlKSwgJ2FyZyc6IHZhbHVlT3JOdWxsKGFjdGlvbi5hcmcpfSk7XG4gICAgfVxuICAgIHJldHVybiBvbGRNZXNzYWdlcy5jb25jYXQobmV3TWVzc2FnZXMpO1xufTtcblxuY29uc3QgYXBwZW5kTWVzc2FnZXNDb252byA9IChjb252bywgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gY29udm87XG4gICAgcmV0dXJuIHsgLi4uY29udm8sIG1lc3NhZ2VzOiBhcHBlbmRNZXNzYWdlcyhtZXNzYWdlcywgYWN0aW9uKSwgYXJnczogYWN0aW9uLmFyZ19tYXAgfTtcbn07XG5cbmNvbnN0IGNvbnZlcnNhdGlvbiA9IChzdGF0ZSA9IHsnaGlzdG9yeSc6IFtdLCAnY3VycmVudENvbnZvJzogeyAnbWVzc2FnZXMnOiBbXSwgJ3RpdGxlJzogbnVsbCwgJ2hpZGRlbic6IGZhbHNlLCAnaWQnOiAwLCAnYXJncyc6IHt9IH0sICdzdGF0ZSc6ICdTVEFSVCd9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnksIGN1cnJlbnRDb252byB9ID0gc3RhdGU7XG4gICAgbGV0IG5ld0NvbnZvO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfSElTVE9SWTpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5jb252ZXJzYXRpb24uY3VycmVudENvbnZvKTtcbiAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IGFjdGlvbi5jb252ZXJzYXRpb24uaGlzdG9yeSwgY3VycmVudENvbnZvOiBhY3Rpb24uY29udmVyc2F0aW9uLmN1cnJlbnRDb252bywgJ3N0YXRlJzogc3RhdGUuc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfTUVTU0FHRTpcbiAgICAgICAgICAgIHJldHVybiB7IGhpc3RvcnksIGN1cnJlbnRDb252bzogYXBwZW5kTWVzc2FnZXNDb252byhjdXJyZW50Q29udm8sIGFjdGlvbiksICdzdGF0ZSc6IHN0YXRlLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX1NFUlZFUl9NRVNTQUdFOlxuICAgICAgICAgICAgaWYgKGFjdGlvbi50ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0NvbnZvID0gYXBwZW5kTWVzc2FnZXNDb252byhjdXJyZW50Q29udm8sIGFjdGlvbik7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnN0YXRlID09PSAnU1RBUlQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFyZGNvZGluZyBzb21lIGxvZ2ljIGhlcmUgZm9yIHN5bmNpbmcgaGlzdG9yeSB3aXRoIHNlcnZlciBvbiBTVEFSVFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgYWxsb3dzIHNvbWUgY29tbWFuZHMgdG8gb3ZlcndyaXRlIGhpc3RvcnkgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICBsZXQgdGhlSWQgPSBhY3Rpb24uaGlzdG9yeS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbmV3Q29udm8gPSB7Li4ubmV3Q29udm8sIHRpdGxlOiBhY3Rpb24ubGFiZWwsIGlkOiB0aGVJZCB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IGFjdGlvbi5oaXN0b3J5LmNvbmNhdChbbmV3Q29udm9dKSwgJ2N1cnJlbnRDb252byc6IHsgJ21lc3NhZ2VzJzogW10sICd0aXRsZSc6IG51bGwsICdoaWRkZW4nOiBmYWxzZSwgJ2lkJzogbmV3Q29udm8uaWQgKyAxLCAnYXJncyc6IHt9IH0sIHN0YXRlOiAnU1RBUlQnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5LCBjdXJyZW50Q29udm86IG5ld0NvbnZvLCBzdGF0ZTogYWN0aW9uLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuSElERV9DT05WRVJTQVRJT046XG4gICAgICAgICAgICBjb25zdCBuZXdIaXN0b3J5ID0gXy5tYXAoaGlzdG9yeSwgY29udiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gey4uLmNvbnZ9O1xuICAgICAgICAgICAgICAgIGlmIChjb252LmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LmhpZGRlbiA9ICFvdXQuaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdDb252byA9IHsuLi5jdXJyZW50Q29udm99O1xuICAgICAgICAgICAgaWYgKG5ld0NvbnZvLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICBuZXdDb252by5oaWRkZW4gPSAhbmV3Q29udm8uaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogbmV3SGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IHN0YXRlLnN0YXRlfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCB2YXJpYWJsZXMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9WQVJJQUJMRVM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnZhcmlhYmxlcztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBwcmVkaWN0aW9ucyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BSRURJQ1RJT05TOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wcmVkaWN0aW9ucztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBkb2NzID0gKHN0YXRlID0ge3RpdGxlOiAnJywgZXhhbXBsZXM6IFtdLCBkZXNjcmlwdGlvbjogW10sIHNvdXJjZTonJ30sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfRE9DUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZG9jO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGZ1bmN0aW9uU2VhcmNoID0gKHN0YXRlID0ge3NlYXJjaDogJycsIHJlc3VsdHM6IFtdfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0ZVTkM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBzZWFyY2g6IGFjdGlvbi5zZWFyY2h9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX1JFU1VMVFM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCByZXN1bHRzOiBhY3Rpb24ucmVzdWx0c307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgY3VycmVudElucHV0ID0gKHN0YXRlID0geydpbnB1dCc6ICcnfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuU1RPUkVfQ1VSUkVOVF9JTlBVVDpcbiAgICAgIHJldHVybiB7J2lucHV0JzogYWN0aW9uLmN1cnJlbnRJbnB1dH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgbWluaW1pemVTdGF0ZSA9IChzdGF0ZT17J2RvY3MnOiB0cnVlLCAnY29kZV9lZGl0Jzp0cnVlfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuU0VUX0RPQ1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAnZG9jcyc6IGFjdGlvbi5kb2NzfTtcbiAgICBjYXNlIHR5cGVzLlNFVF9DT0RFX0VESVQ6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAnY29kZV9lZGl0JzogYWN0aW9uLmNvZGVfZWRpdH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgY29tbWFuZEVkaXRQYW5lID0gKHN0YXRlPXtuYW1lOiAnJywgdGl0bGU6ICcnLCBhcmdzOiAnJywgY29tbWFuZDogJycsIGV4cGxhbmF0aW9uOiAnJywgdGVzdElucHV0OiAnJ30sIGFjdGlvbikgPT4ge1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBpbnB1dEhpc3RvcnkgPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJJZCc6IG51bGwsICdzaG93SGlzdG9yeSc6IGZhbHNlIH0sIGFjdGlvbikgPT4ge1xuICAgIGxldCBuZXdJZDtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBuZXdJZCA9IHN0YXRlLmN1cnJJZDtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMCAmJiBuZXdJZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdoaXN0b3J5JzogWy4uLnN0YXRlLmhpc3RvcnksIGFjdGlvbi5tZXNzYWdlXSwgJ2N1cnJJZCc6IG5ld0lkfTtcbiAgICAgICAgY2FzZSB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJZCA9IHN0YXRlLmN1cnJJZCB8fCAwO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPCAoc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lkID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SWQgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnY3VycklkJzogbmV3SWQgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY29udmVyc2F0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgICBwcmVkaWN0aW9ucyxcbiAgICBpbnB1dEhpc3RvcnksXG4gICAgY3VycmVudElucHV0LFxuICAgIGRvY3MsXG4gICAgZnVuY3Rpb25TZWFyY2gsXG4gICAgbWluaW1pemVTdGF0ZSxcbiAgICBjb21tYW5kRWRpdFBhbmUsXG4gICAgcm91dGluZ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JlZHVjZXJzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})