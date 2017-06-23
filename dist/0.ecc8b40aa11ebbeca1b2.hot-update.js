webpackHotUpdate(0,{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHistory = exports.getVariables = exports.setHistory = exports.testFunction = exports.doSearch = exports.updateDocs = exports.updateHint = exports.postMessages = undefined;\n\nvar _isomorphicFetch = __webpack_require__(805);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _index = __webpack_require__(275);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar postMessages = exports.postMessages = function postMessages(messages, state, conversation) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/new_loop', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ messages: messages, state: state, conversation: conversation })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        (0, _index2.default)(json);\n        (0, _index2.default)({ 'type': 'UPDATE_VARIABLES', 'variables': json.variables });\n    }).then(function () {\n        (0, _index2.default)({ 'type': 'UPDATE_PREDICTIONS', 'predictions': [] });\n    });\n};\n\nvar updateHint = exports.updateHint = function updateHint(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/hint', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(json);\n        (0, _index2.default)({ 'type': 'UPDATE_PREDICTIONS', 'predictions': json.predictions });\n    });\n};\n\nvar updateDocs = exports.updateDocs = function updateDocs(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/docs', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(json);\n        (0, _index2.default)({ 'type': 'UPDATE_DOCS', 'doc': json });\n    });\n};\n\nvar doSearch = exports.doSearch = function doSearch(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/function_list', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(\"UPDATE RESULTS\", json);\n        (0, _index2.default)({ 'type': 'UPDATE_RESULTS', 'results': json });\n    });\n};\n\nvar testFunction = exports.testFunction = function testFunction(text) {\n    console.log(text);\n    (0, _isomorphicFetch2.default)('http://localhost:8000/function_test', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(text)\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(\"UPDATE Test\", json);\n        // dispatch({'type': 'UPDATE_RESULTS', 'results': json});\n    });\n};\n\nvar setHistory = exports.setHistory = function setHistory(messages, state, conversation) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/set_history', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ messages: messages, state: state, conversation: conversation })\n    });\n};\n\nvar getVariables = exports.getVariables = function getVariables() {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/variables', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        return (0, _index2.default)(json);\n    });\n};\n\nvar getHistory = exports.getHistory = function getHistory() {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/history', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        return (0, _index2.default)(json);\n    });\n};\n\n// export default { postMessages, getVariables };//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBpX2NhbGxzL3B5dGhvbi5qcz85ZjZlIl0sIm5hbWVzIjpbInBvc3RNZXNzYWdlcyIsIm1lc3NhZ2VzIiwic3RhdGUiLCJjb252ZXJzYXRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidmFyaWFibGVzIiwidXBkYXRlSGludCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwicHJlZGljdGlvbnMiLCJ1cGRhdGVEb2NzIiwiZG9TZWFyY2giLCJ0ZXN0RnVuY3Rpb24iLCJzZXRIaXN0b3J5IiwiZ2V0VmFyaWFibGVzIiwiZ2V0SGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCQyxZQUFsQixFQUFtQztBQUMzRCxtQ0FBTSxnQ0FBTixFQUF3QztBQUNwQ0MsZ0JBQVEsTUFENEI7QUFFcENDLGlCQUFTO0FBQ0wsNEJBQWdCO0FBRFgsU0FGMkI7QUFLcENDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZSxFQUFDUCxrQkFBRCxFQUFXQyxZQUFYLEVBQWtCQywwQkFBbEIsRUFBZjtBQUw4QixLQUF4QyxFQU9DTSxJQVBELENBT007QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQVBOLEVBUUNGLElBUkQsQ0FRTSxnQkFBUTtBQUNWLDZCQUFTRSxJQUFUO0FBQ0EsNkJBQVMsRUFBQyxRQUFRLGtCQUFULEVBQTZCLGFBQWFBLEtBQUtDLFNBQS9DLEVBQVQ7QUFDSCxLQVhELEVBWUNILElBWkQsQ0FZTSxZQUFNO0FBQ1IsNkJBQVMsRUFBQyxRQUFRLG9CQUFULEVBQStCLGVBQWUsRUFBOUMsRUFBVDtBQUNILEtBZEQ7QUFlSCxDQWhCTTs7QUFrQkEsSUFBTUksa0NBQWEsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVB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QU9DRixJQVBELENBT007QUFBQSxlQUFRLHFCQUFTRSxJQUFULENBQVI7QUFBQSxLQVBOO0FBUUgsQ0FUTTs7QUFXQSxJQUFNWSxrQ0FBYSxTQUFiQSxVQUFhLEdBQU07QUFDNUIsbUNBQU0sK0JBQU4sRUFBdUM7QUFDbkNuQixnQkFBUSxLQUQyQjtBQUVuQ0MsaUJBQVM7QUFDTCw0QkFBZ0I7QUFEWDtBQUYwQixLQUF2QyxFQU1DSSxJQU5ELENBTU07QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQU5OLEVBT0NGLElBUEQsQ0FPTTtBQUFBLGVBQVEscUJBQVNFLElBQVQsQ0FBUjtBQUFBLEtBUE47QUFRSCxDQVRNOztBQVdQIiwiZmlsZSI6IjcwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IGRpc3BhdGNoIGZyb20gJy4uL2luZGV4LmpzJztcblxuZXhwb3J0IGNvbnN0IHBvc3RNZXNzYWdlcyA9IChtZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbikgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvbmV3X2xvb3AnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbn0pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7J3R5cGUnOiAnVVBEQVRFX1ZBUklBQkxFUycsICd2YXJpYWJsZXMnOiBqc29uLnZhcmlhYmxlc30pO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7J3R5cGUnOiAnVVBEQVRFX1BSRURJQ1RJT05TJywgJ3ByZWRpY3Rpb25zJzogW10gfSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlSGludCA9ICh0ZXh0KSA9PiB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oaW50Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dGV4dH0pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7J3R5cGUnOiAnVVBEQVRFX1BSRURJQ1RJT05TJywgJ3ByZWRpY3Rpb25zJzoganNvbi5wcmVkaWN0aW9uc30pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURvY3MgPSAodGV4dCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZG9jcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3RleHR9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9ET0NTJywgJ2RvYyc6IGpzb259KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkb1NlYXJjaCA9ICh0ZXh0KSA9PiB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mdW5jdGlvbl9saXN0Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dGV4dH0pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVVBEQVRFIFJFU1VMVFNcIiwganNvbik7XG4gICAgICAgIGRpc3BhdGNoKHsndHlwZSc6ICdVUERBVEVfUkVTVUxUUycsICdyZXN1bHRzJzoganNvbn0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RGdW5jdGlvbiA9ICh0ZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nKHRleHQpO1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZnVuY3Rpb25fdGVzdCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGV4dClcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVUERBVEUgVGVzdFwiLCBqc29uKTtcbiAgICAgICAgLy8gZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9SRVNVTFRTJywgJ3Jlc3VsdHMnOiBqc29ufSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SGlzdG9yeSA9IChtZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbikgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvc2V0X2hpc3RvcnknLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbn0pXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VmFyaWFibGVzID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvdmFyaWFibGVzJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGRpc3BhdGNoKGpzb24pKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIaXN0b3J5ID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGlzdG9yeScsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBkaXNwYXRjaChqc29uKSk7XG59O1xuXG4vLyBleHBvcnQgZGVmYXVsdCB7IHBvc3RNZXNzYWdlcywgZ2V0VmFyaWFibGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBpX2NhbGxzL3B5dGhvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})