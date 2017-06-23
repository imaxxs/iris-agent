webpackHotUpdate(0,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CollectionMessage = function (_Component) {\n  _inherits(CollectionMessage, _Component);\n\n  function CollectionMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CollectionMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionMessage.__proto__ || Object.getPrototypeOf(CollectionMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      console.log(data);\n      _this.testColumns = data[\"column_data\"];\n      _this.testRows = data[\"row_data\"];\n      _this.getRow = function (i) {\n        return _this.testRows[i];\n      };\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'data_table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'header' },\n            _this.testColumns.map(function (column) {\n              return _react2.default.createElement(\n                'span',\n                { className: 'data_column' },\n                column.name\n              );\n            })\n          ),\n          _this.testRows.map(function (row) {\n            return _react2.default.createElement(\n              'div',\n              { className: 'data_row' },\n              _this.testColumns.map(function (column) {\n                return _react2.default.createElement(\n                  'span',\n                  { className: 'data_column' },\n                  row[column.name]\n                );\n              })\n            );\n          })\n        ),\n        _react2.default.createElement(_reactDataGrid2.default, { columns: _this.testColumns, rowGetter: _this.getRow, rowsCount: _this.testRows.length })\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CollectionMessage;\n}(_react.Component);\n\nCollectionMessage.propTypes = proptypes.messageType;\n\nexports.default = CollectionMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcz8wZDQ2Il0sIm5hbWVzIjpbInByb3B0eXBlcyIsIkNvbGxlY3Rpb25NZXNzYWdlIiwicmVuZGVyIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInByb3BzIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0Q29sdW1ucyIsInRlc3RSb3dzIiwiZ2V0Um93IiwiaSIsIm9yaWdpbiIsImhpZGRlbiIsImRpc3BsYXkiLCJtYXAiLCJjb2x1bW4iLCJuYW1lIiwicm93IiwibGVuZ3RoIiwicHJvcFR5cGVzIiwibWVzc2FnZVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsUzs7Ozs7Ozs7Ozs7O0lBRU5DLGlCOzs7Ozs7Ozs7Ozs7Ozs0TUFFSkMsTSxHQUFTLFlBQU07QUFDYixVQUFNQyxPQUFPQyxLQUFLQyxLQUFMLENBQVcsTUFBS0MsS0FBTCxDQUFXQyxJQUF0QixDQUFiO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWU4sSUFBWjtBQUNBLFlBQUtPLFdBQUwsR0FBbUJQLEtBQUssYUFBTCxDQUFuQjtBQUNBLFlBQUtRLFFBQUwsR0FBZ0JSLEtBQUssVUFBTCxDQUFoQjtBQUNBLFlBQUtTLE1BQUwsR0FBYyxVQUFDQyxDQUFEO0FBQUEsZUFBTyxNQUFLRixRQUFMLENBQWNFLENBQWQsQ0FBUDtBQUFBLE9BQWQ7QUFDQSxhQUFRO0FBQUE7QUFBQSxVQUFLLFdBQWEsTUFBS1AsS0FBTCxDQUFXUSxNQUFYLEtBQXNCLE1BQXRCLEdBQStCLGNBQS9CLEdBQWdELGVBQWxFLEVBQW1GLE9BQU8sTUFBS1IsS0FBTCxDQUFXUyxNQUFYLEtBQXNCLElBQXRCLEdBQTZCLEVBQUNDLFNBQVMsTUFBVixFQUE3QixHQUFpRCxFQUEzSTtBQUNKO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsUUFBZjtBQUNDLGtCQUFLTixXQUFMLENBQWlCTyxHQUFqQixDQUFxQixrQkFBVTtBQUM5QixxQkFBTztBQUFBO0FBQUEsa0JBQU0sV0FBVSxhQUFoQjtBQUErQkMsdUJBQU9DO0FBQXRDLGVBQVA7QUFDRCxhQUZBO0FBREQsV0FERjtBQU1HLGdCQUFLUixRQUFMLENBQWNNLEdBQWQsQ0FBa0IsZUFBTztBQUN4QixtQkFBUTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxVQUFmO0FBQ0wsb0JBQUtQLFdBQUwsQ0FBaUJPLEdBQWpCLENBQXFCLGtCQUFVO0FBQzlCLHVCQUFPO0FBQUE7QUFBQSxvQkFBTSxXQUFVLGFBQWhCO0FBQStCRyxzQkFBSUYsT0FBT0MsSUFBWDtBQUEvQixpQkFBUDtBQUNELGVBRkE7QUFESyxhQUFSO0FBS0QsV0FOQTtBQU5ILFNBREk7QUFlSixpRUFBZSxTQUFTLE1BQUtULFdBQTdCLEVBQTBDLFdBQVcsTUFBS0UsTUFBMUQsRUFBa0UsV0FBVyxNQUFLRCxRQUFMLENBQWNVLE1BQTNGO0FBZkksT0FBUjtBQWlCRCxLOzs7Ozs7QUFJSHBCLGtCQUFrQnFCLFNBQWxCLEdBQThCdEIsVUFBVXVCLFdBQXhDOztrQkFFZXRCLGlCIiwiZmlsZSI6IjQxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERhdGFHcmlkIGZyb20gJ3JlYWN0LWRhdGEtZ3JpZCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuXG5jbGFzcyBDb2xsZWN0aW9uTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMucHJvcHMudGV4dCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdGhpcy50ZXN0Q29sdW1ucyA9IGRhdGFbXCJjb2x1bW5fZGF0YVwiXTtcbiAgICB0aGlzLnRlc3RSb3dzID0gZGF0YVtcInJvd19kYXRhXCJdO1xuICAgIHRoaXMuZ2V0Um93ID0gKGkpID0+IHRoaXMudGVzdFJvd3NbaV07XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZSA9IHt0aGlzLnByb3BzLm9yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXt0aGlzLnByb3BzLmhpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFfdGFibGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnRlc3RDb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCI+e2NvbHVtbi5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMudGVzdFJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZGF0YV9yb3dcIj5cbiAgICAgICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCI+e3Jvd1tjb2x1bW4ubmFtZV19PC9zcGFuPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVhY3REYXRhR3JpZCBjb2x1bW5zPXt0aGlzLnRlc3RDb2x1bW5zfSByb3dHZXR0ZXI9e3RoaXMuZ2V0Um93fSByb3dzQ291bnQ9e3RoaXMudGVzdFJvd3MubGVuZ3RofSAvPlxuICAgIDwvZGl2Pik7XG4gIH1cblxufVxuXG5Db2xsZWN0aW9uTWVzc2FnZS5wcm9wVHlwZXMgPSBwcm9wdHlwZXMubWVzc2FnZVR5cGU7XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25NZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ29sbGVjdGlvbk1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})