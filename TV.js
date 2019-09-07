let Tivi = function (channel, volume, status) {
    this.channel = channel;
    this.volume = volume;
    this.status = status;
    this.getVolume = function () {
        return this.volume;
    };
    let screen = document.getElementById("screen");
    this.onOff = function () {
        if (this.status == "on") {
            screen.src = "tv" + this.channel + ".png";
            this.status = "off";
        } else {
            screen.src = "tvOff.png";
            this.status = "on";
        }
    };

    this.setChannel = function (index) {
        if (this.status == "off") {
            screen.src = "tv" + index+ ".png";
        } else {
            alert("TV OFF !!!");
        }
    };

    this.setVolumeUp = function () {
        if (this.status == "off") {
            this.volume++;
            document.getElementById("volume").innerHTML = tv.getVolume();
        } else {
            alert("TV OFF !!!");
        }
    };

    this.setVolumeDown = function () {
        if (this.status == "off") {
            this.volume--;
            document.getElementById("volume").innerHTML = tv.getVolume();
        } else {
            alert("TV OFF !!!");
        }
    }

};
let tv = new Tivi(1,20 ,"on");

