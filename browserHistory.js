console.log("in browser history");
function BrowserHistory() {
  this.visitedUrls = [];
  this.activeUrl = -1;
  this.visit = function (str) {
    this.visitedUrls.push(str);
    this.activeUrl = this.visitedUrls.length - 1;
  };
  this.current = function () {
    return this.visitedUrls[this.activeUrl];
  };
  this.goBack = function () {
    this.activeUrl--;
    if (this.activeUrl < 0) {
      return;
    }
    return this.visitedUrls[this.activeUrl];
  };
}
const bh = new BrowserHistory();

bh.visit("A");
console.log(bh.current());

bh.visit("B");
console.log(bh.current());

bh.visit("C");
console.log(bh.current());

bh.goBack();
console.log(bh.current());

bh.visit("D");
console.log(bh.current());
