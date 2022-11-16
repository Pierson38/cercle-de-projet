import React, { useState, useEffect } from "react";
import './LockScreen.css';
import { useNavigate } from "react-router-dom";


function LockScreen() {
    // Affichage dates et heures
    let d = new Date();
    let hour = d.getHours() + ":" + d.getMinutes();
    let dateUsr = d.toLocaleString('fr-FR', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
    let date = dateUsr.charAt(0).toUpperCase() + dateUsr.slice(1);

    const [code, setCode] = useState("");
    const [redirect, setRedirect] = useState(false);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const addToCode = async (value) => {

        var temp = code + value;
        console.log(temp);
        setCode(temp);
        manageRound(temp);

        if (temp.length === 6) {
            if (temp === "111111") {
                await sleep(500);
                setRedirect(true);
            } else {
                var bulletGroup = document.querySelectorAll('.group-round');
                bulletGroup.forEach(element => {
                    element.classList.add('face');
                });
                await sleep(1000);
                setCode("");
                manageRound("");
                bulletGroup.forEach(element => {
                    element.classList.remove('face');
                });
            }
        }
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (redirect) {
            navigate("/");
        }
    })


    const manageRound = (value) => {
        var bullet = document.querySelectorAll('.group-round div');
        switch (value.length) {
            case 1:
                bullet[0].classList.add('background-white');
                break;
            case 2:
                bullet[1].classList.add('background-white');
                break;
            case 3:
                bullet[2].classList.add('background-white');
                break;
            case 4:
                bullet[3].classList.add('background-white');
                break;
            case 5:
                bullet[4].classList.add('background-white');
                break;
            case 6:
                bullet[5].classList.add('background-white');
                break;

            default:
                bullet.forEach(element => {
                    element.classList.remove('background-white');
                });
                break;
        }
    };

    const animArnaud = () => {
        var bullet = document.querySelectorAll('.screen-1');
        
        bullet.forEach(element => {
            element.classList.add('active');
        });
    }

    const desAnimArnaud = () => {
        var bullet = document.querySelectorAll('.screen-1');
        
        bullet.forEach(element => {
            element.classList.remove('active');
        });
    }


    return (
        <main>

            <section id="lockScreen" className="h-screen w-full bg-img screen-1" onClick={() => animArnaud()}>
                <div className="flex flex-col items-center pt-16">
                    <img className="w-6" src="/assets/illustration/cadenas.png" alt="lock" />
                    <span id="hour" className="text-7xl text-white font-thin mt-2">{hour}</span>
                    <span id="date" className="text-white text-2xl mt-4">{date}</span>
                </div>
            </section>
            <section id="codeScreen" className="relative h-screen w-full screen-2">
                <div className="absolute h-screen w-full bg-img blur-lg brightness-70 -z-10"></div>
                <div className="flex flex-col items-center pt-16">
                    <img className="w-4" src="/assets/illustration/cadenas.png" alt="lock" />
                    <p className="text-xl text-white font-semibold tracking-wide mt-12">Saisissez le code</p>
                    <p className="text-white w-48 text-center">Votre code est requis pour accéder à la suite.</p>
                    <div className="flex justify-between w-48 mt-4 group-round">
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                    </div>

                    <div className="flex flex-col mt-8">
                        <div className="flex justify-between w-72">
                            <div className="relative" onClick={() => addToCode("1")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">1</span>
                            </div>

                            <div className="relative" onClick={() => addToCode("2")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">2</span>
                            </div>

                            <div className="relative" onClick={() => addToCode("3")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">3</span>
                            </div>
                        </div>
                        <div className="flex justify-between w-72 mt-8">
                            <div className="relative" onClick={() => addToCode("4")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">4</span>
                            </div>

                            <div className="relative" onClick={() => addToCode("5")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">5</span>
                            </div>

                            <div className="relative" onClick={() => addToCode("6")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">6</span>
                            </div>
                        </div>
                        <div className="flex justify-between w-72 mt-8">
                            <div className="relative" onClick={() => addToCode("7")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">7</span>
                            </div>

                            <div className="relative" onClick={() => addToCode("8")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">8</span>
                            </div>

                            <div className="relative" onClick={() => addToCode("9")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">9</span>
                            </div>
                        </div>
                        <div className="flex justify-center w-72 mt-8">
                            <div className="relative" onClick={() => addToCode("0")}>
                                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                                <span className="absolute top-5 left-7-5 z-10 text-white text-4xl">0</span>
                            </div>
                        </div>

                    </div>

                    <p onClick={() => desAnimArnaud()} className="absolute bottom-10 text-center text-white">Annuler</p>
                </div>
            </section>


        </main>

    );

}

export default LockScreen;
