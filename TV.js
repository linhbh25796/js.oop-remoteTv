let Tivi = function (channel,volume) {
    this.channel = channel;
    this.volume =volume;
    this.remote = null;

    this.connectRemote = function (remote) {
        this.remote=remote;
        this.channel = this.remote.channel;
        this.volume = this.remote.volume;

    };
    this.showChannel = function () {
        return this.channel;
    };
    this.showVolume = function () {
        return this.volume;
    }
};
