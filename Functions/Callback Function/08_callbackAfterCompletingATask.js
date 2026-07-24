function downloadFile(callback) {
  console.log("Downloading file....");
  callback();
}
downloadFile(function () {
  console.log("Download Complete.");
});
