import notifs from "../data/notification";
import messages from "../data/messages";

class Game {

    constructor() {
        //Checkpoint
        this.lockScreenUnlock = JSON.parse(localStorage.getItem('lockScreenUnlock')) || false;
        this.enigmeIdentificationUnlock = JSON.parse(localStorage.getItem('enigmeIdentificationUnlock')) || false;
        this.enigmeTache = localStorage.getItem('enigmeTache') || false;
        this.enigmeAppel = localStorage.getItem('enigmeAppel') || false;
        this.enigmeLogigram = localStorage.getItem('enigmeLogigram') || false;

        //Chronometre
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
        },];

        this.notifications = notifs;
        this.messages = messages;

        this.sendNotifications();
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

    getEnigmeIdentificationUnlock() {
        return this.enigmeIdentificationUnlock;
    }

    setEnigmeIdentificationUnlock(newValue) {
        this.enigmeIdentificationUnlock = newValue;
        localStorage.setItem('enigmeIdentificationUnlock', newValue);
    }

    getEnigmeTache() {
        return this.enigmeTache;
    }

    setEnigmeTache(newValue) {
        this.enigmeTache = newValue;
        localStorage.setItem('enigmeTache', newValue);
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

    getNotifications() {
        return this.notifications;
    }

    setNotifications(newValue) {
        newValue.id = Math.floor(Math.random() * 100);
        this.notifications.push(newValue);
    }
    
    getMessages() {
        return this.messages;
    }
    
    setMessages(newValue) {
        console.log(newValue);
        this.messages.push(newValue);
    }

    //Utils Random Max Min
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ObjectLength( object ) {
        var length = 0;
        for( var key in object ) {
            if( object.hasOwnProperty(key) ) {
                ++length;
            }
        }
        return length;
    };


    //Gerer les notifications
    async sendNotifications() {
        console.log("Notif envoyé");
        const notifs = this.getNotifications();
        this.setNotification(notifs[this.getRandomInt(0, this.ObjectLength(notifs))])
        console.log(this.notification);
        await this.sleep(2400000);
        this.sendNotifications();
    }



    //Déclanche vocal du client
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

    //Declanche debut etape 3
    async lunch3enigme() {
        await this.sleep(5000);
        this.setMessages({
            id: 6,
            from: "Diane Carrière ",
            messages: [{from: "Diane Carrière", message: "Arnaud, c’est la galère, Aubin  a perdu le mot de passe pour se connecter au compte admin du projet, on peux plus bosser la. Est-ce que tu peux voir avec lui"}],
            profilUrl: "http://localhost:3000/assets/contact/icon-bea.png",
        });

        this.setNotification({
            id: 0,
            title: "Diane Carrière",
            content: "Arnaud, c’est la galère, Aubin  a perdu le mot de passe pour se connecter au compte admin...",
            icon: "/assets/Icon_notif/messages.png",
        });
    }

}


const game = new Game();

export default game;



