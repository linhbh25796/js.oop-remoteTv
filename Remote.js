let Remote = function () {
    this.power = function (tv) {
        tv.onOff();
    };

    this.setChannel1 = function (tv) {
        tv.setChannel(1);
    };
    this.setChannel2 = function (tv) {
        tv.setChannel(2);
    };
    this.setVolumeDown = function (tv) {
        tv.setVolumeDown();
    };
    this.setVolumeUp = function (tv) {
        tv.setVolumeUp();
    }

};

let remote = new Remote();

function power() {
    remote.power(tv);
}
function btn1() {
    remote.setChannel1(tv);
}
function btn2() {
    remote.setChannel2(tv);

}
function btnVolUp() {
    remote.setVolumeUp(tv);
}
function btnVolDown() {
    remote.setVolumeDown(tv);
}
