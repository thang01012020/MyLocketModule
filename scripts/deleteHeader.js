/***********************************************
> Delete RevenueCat ETag Header by HVThang
***********************************************/

var headers = $request.headers;

// Xóa bỏ ETag Header để ép ứng dụng tải lại dữ liệu tài khoản mới
delete headers['X-RevenueCat-ETag'];
delete headers['x-revenuecat-etag'];

$done({ headers: headers });