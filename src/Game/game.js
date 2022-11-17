class Game {

    constructor() {
        this.lockScreenUnlock = JSON.parse(localStorage.getItem('lockScreenUnlock')) || false;
        this.enigmeIdentificationUnlock = localStorage.getItem('enigmeIdentificationUnlock') || false;
        this.enigmeTache = localStorage.getItem('enigmeTache') || false;
        this.enigmeAppel = localStorage.getItem('enigmeAppel') || false;
        this.enigmeLogigram = localStorage.getItem('enigmeLogigram') || false;
        this.chronometre = localStorage.getItem('chronometre') || new Date();

        //Notification
        this.showNotification = false;
        this.notification = {};

        //Messagerie
        this.messagerie = [{
            id: 0,
            from: "Beatrice",
            url: "/assets/vocaux/vocal_1.m4a",
            date: "14/10/2022",
            heure: "04:00",
        },]
    }

    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    getLockScreenUnlock() {
        return this.lockScreenUnlock;
    }

    setLockScreenUnlock(newValue) {
        this.lockScreenUnlock = newValue;
        localStorage.setItem('lockScreenUnlock', newValue);
        if (newValue) {
            this.initAppelClient();
        }
    }

    getNotification() {
        return this.notification;
    }

    async setNotification(newValue) {
        this.notification = newValue;
        this.setShowNotification(true);
        await this.sleep(10000);

        this.setShowNotification(false);
    }

    getShowNotification() {
        return this.showNotification;
    }

    setShowNotification(newValue) {
        this.showNotification = newValue;
    }

    getMessagerie() {
        return this.messagerie;
    }

    setMessagerie(newValue) {
        newValue.id = Math.floor(Math.random() * 100);
        this.messagerie.push(newValue);
        this.setNotification({
            id: 0,
            title: "Messagerie",
            content: "Vous avez un nouveau message vocal",
            icon: "/assets/appIcons/icon-tel.png",
        });
    }


    async initAppelClient() {
        await this.sleep(10000);
        this.setMessagerie({
            id: 0,
            from: "Client",
            url: "/assets/vocaux/Enigme_1.mp3",
            date: "14/10/2022",
            heure: "15:00",
        },);

    }

}


const game = new Game();

export default game;



