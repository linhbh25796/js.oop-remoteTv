let Remote =function () {
    this.channel = 0;
    this.volume = 0;

    this.switchChannel =function (channel) {
        this.channel =channel;
        alert("Channel is changed");
    }
    this.switchVolume = function (volume) {
        this.volume =volume;
        alert("Volume is changed");
    }
};
