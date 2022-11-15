import React from "react";
import './Presentation.css';
import { Link } from "react-router-dom";

function Presentation() {

    return (
        <main class="h-screen w-full flex flex-column items-center">
            <section class="m-4 bg-grey">
                <h1 class="text-4xl font-bold w-3/4">Bienvenue sur le serious game de chef de projet </h1>
                <p class="text-grey font-medium mt-2 w-10/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>

                <div class="flex justify-between items-center bg-white rounded-3xl shadow mt-4 py-16 px-4">
                    <div class="w-2/3 mr-4">
                        <h2 class="font-bold text-lg">Résolvez les tâches que l’on vous donne</h2>
                        <p class="text-grey font-medium text-sm mt-4">Vous devrez réaliser les différentes étapes qu’un <span class="font-bold text-orange">chef de projet</span> peut rencontrer.</p>
                    </div>
                    <div>
                        <img src="/assets/illustration/man.png" alt=""/>
                    </div>
                </div>
                
                <div class="flex justify-center">
                    <button class="bg-orange text-white font-medium rounded-full mt-8 px-8 py-4">Commencer le jeu !</button>
                </div>
                <p class="text-center text-xs mt-4 text-grey">Des <span class="text-orange font-bold">astuces</span> apparaîtront si vous mettez trop de temps à résoudre les énigmes</p>
            </section>
        </main>
    );
}

export default Presentation;
