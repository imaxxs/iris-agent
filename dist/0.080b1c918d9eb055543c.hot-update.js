webpackHotUpdate(0,{

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(389);\n\nvar _redux = __webpack_require__(265);\n\nvar _types = __webpack_require__(271);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(160);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\nvar appendMessages = function appendMessages(oldMessages, action) {\n    // text, origin = 'user', type = null, arg = null) => {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.TOGGLE_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        default:\n            return state;\n    }\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJUT0dHTEVfRE9DUyIsImlucHV0SGlzdG9yeSIsIm5ld0lkIiwiQUREX0lOUFVUX0hJU1RPUlkiLCJjdXJySWQiLCJtZXNzYWdlIiwiTU9WRV9JTlBVVF9ISVNUT1JZIiwiZGlyZWN0aW9uIiwicm9vdFJlZHVjZXIiLCJy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dWNlciBhcyByb3V0aW5nIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2YWx1ZU9yTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBhcHBlbmRNZXNzYWdlcyA9IChvbGRNZXNzYWdlcywgYWN0aW9uKSA9PiB7IC8vIHRleHQsIG9yaWdpbiA9ICd1c2VyJywgdHlwZSA9IG51bGwsIGFyZyA9IG51bGwpID0+IHtcbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IFtdO1xuICAgIGxldCBjdXJyZW50TWF4ID0gMDtcbiAgICBpZiAob2xkTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwJywgXy5tYXAob2xkTWVzc2FnZXMsIGZ1bmN0aW9uKG0pIHsgcmV0dXJuIG0uaWQ7IH0pKTtcbiAgICAgICAgY3VycmVudE1heCA9IF8ubWF4KF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbSBvZiBhY3Rpb24udGV4dCkge1xuICAgICAgICBjdXJyZW50TWF4Kys7XG4gICAgICAgIG5ld01lc3NhZ2VzLnB1c2goeydvcmlnaW4nOiBhY3Rpb24ub3JpZ2luLCAndGV4dCc6IG0sICdpZCc6IGN1cnJlbnRNYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IHZhbHVlT3JOdWxsKGFjdGlvbi5zdGF0ZSksICdhcmcnOiB2YWx1ZU9yTnVsbChhY3Rpb24uYXJnKX0pO1xuICAgIH1cbiAgICByZXR1cm4gb2xkTWVzc2FnZXMuY29uY2F0KG5ld01lc3NhZ2VzKTtcbn07XG5cbmNvbnN0IGFwcGVuZE1lc3NhZ2VzQ29udm8gPSAoY29udm8sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGNvbnZvO1xuICAgIHJldHVybiB7IC4uLmNvbnZvLCBtZXNzYWdlczogYXBwZW5kTWVzc2FnZXMobWVzc2FnZXMsIGFjdGlvbiksIGFyZ3M6IGFjdGlvbi5hcmdfbWFwIH07XG59O1xuXG5jb25zdCBjb252ZXJzYXRpb24gPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJlbnRDb252byc6IHsgJ21lc3NhZ2VzJzogW10sICd0aXRsZSc6IG51bGwsICdoaWRkZW4nOiBmYWxzZSwgJ2lkJzogMCwgJ2FyZ3MnOiB7fSB9LCAnc3RhdGUnOiAnU1RBUlQnfSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBjdXJyZW50Q29udm8gfSA9IHN0YXRlO1xuICAgIGxldCBuZXdDb252bztcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0hJU1RPUlk6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uY29udmVyc2F0aW9uLmN1cnJlbnRDb252byk7XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uY29udmVyc2F0aW9uLmhpc3RvcnksIGN1cnJlbnRDb252bzogYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8sICdzdGF0ZSc6IHN0YXRlLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX01FU1NBR0U6XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5LCBjdXJyZW50Q29udm86IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9TRVJWRVJfTUVTU0FHRTpcbiAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdDb252byA9IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGF0ZSA9PT0gJ1NUQVJUJykge1xuICAgICAgICAgICAgICAgIC8vIGhhcmRjb2Rpbmcgc29tZSBsb2dpYyBoZXJlIGZvciBzeW5jaW5nIGhpc3Rvcnkgd2l0aCBzZXJ2ZXIgb24gU1RBUlRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGFsbG93cyBzb21lIGNvbW1hbmRzIHRvIG92ZXJ3cml0ZSBoaXN0b3J5IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgbGV0IHRoZUlkID0gYWN0aW9uLmhpc3RvcnkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLm5ld0NvbnZvLCB0aXRsZTogYWN0aW9uLmxhYmVsLCBpZDogdGhlSWQgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uaGlzdG9yeS5jb25jYXQoW25ld0NvbnZvXSksICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IG5ld0NvbnZvLmlkICsgMSwgJ2FyZ3MnOiB7fSB9LCBzdGF0ZTogJ1NUQVJUJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkhJREVfQ09OVkVSU0FUSU9OOlxuICAgICAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IF8ubWFwKGhpc3RvcnksIGNvbnYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IHsuLi5jb252fTtcbiAgICAgICAgICAgICAgICBpZiAoY29udi5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5oaWRkZW4gPSAhb3V0LmhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3Q29udm8gPSB7Li4uY3VycmVudENvbnZvfTtcbiAgICAgICAgICAgIGlmIChuZXdDb252by5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29udm8uaGlkZGVuID0gIW5ld0NvbnZvLmhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IG5ld0hpc3RvcnksIGN1cnJlbnRDb252bzogbmV3Q29udm8sIHN0YXRlOiBzdGF0ZS5zdGF0ZX07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgdmFyaWFibGVzID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfVkFSSUFCTEVTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi52YXJpYWJsZXM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgcHJlZGljdGlvbnMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9QUkVESUNUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucHJlZGljdGlvbnM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgZG9jcyA9IChzdGF0ZSA9IHt0aXRsZTogJycsIGV4YW1wbGVzOiBbXSwgZGVzY3JpcHRpb246IFtdLCBzb3VyY2U6Jyd9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0RPQ1M6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRvYztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBmdW5jdGlvblNlYXJjaCA9IChzdGF0ZSA9IHtzZWFyY2g6ICcnLCByZXN1bHRzOiBbXX0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9GVU5DOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2VhcmNoOiBhY3Rpb24uc2VhcmNofTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9SRVNVTFRTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVzdWx0czogYWN0aW9uLnJlc3VsdHN9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGN1cnJlbnRJbnB1dCA9IChzdGF0ZSA9IHsnaW5wdXQnOiAnJ30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlNUT1JFX0NVUlJFTlRfSU5QVVQ6XG4gICAgICByZXR1cm4geydpbnB1dCc6IGFjdGlvbi5jdXJyZW50SW5wdXR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IG1pbmltaXplU3RhdGUgPSAoc3RhdGU9eydkb2NzJzogdHJ1ZX0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlRPR0dMRV9ET0NTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2RvY3MnOiBhY3Rpb24uZG9jc307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgaW5wdXRIaXN0b3J5ID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJySWQnOiBudWxsLCAnc2hvd0hpc3RvcnknOiBmYWxzZSB9LCBhY3Rpb24pID0+IHtcbiAgICBsZXQgbmV3SWQ7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9JTlBVVF9ISVNUT1JZOlxuICAgICAgICAgICAgbmV3SWQgPSBzdGF0ZS5jdXJySWQ7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPT09IDAgJiYgbmV3SWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdJZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnaGlzdG9yeSc6IFsuLi5zdGF0ZS5oaXN0b3J5LCBhY3Rpb24ubWVzc2FnZV0sICdjdXJySWQnOiBuZXdJZH07XG4gICAgICAgIGNhc2UgdHlwZXMuTU9WRV9JTlBVVF9ISVNUT1JZOlxuICAgICAgICAgICAgaWYgKHN0YXRlLmhpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SWQgPSBzdGF0ZS5jdXJySWQgfHwgMDtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lkIDwgKHN0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SWQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChuZXdJZCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0lkIC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2N1cnJJZCc6IG5ld0lkIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvbnZlcnNhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICAgcHJlZGljdGlvbnMsXG4gICAgaW5wdXRIaXN0b3J5LFxuICAgIGN1cnJlbnRJbnB1dCxcbiAgICBkb2NzLFxuICAgIGZ1bmN0aW9uU2VhcmNoLFxuICAgIG1pbmltaXplU3RhdGUsXG4gICAgcm91dGluZ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JlZHVjZXJzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})