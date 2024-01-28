<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="container">
        <div id="calculator">
            <div id="screen">
                <p id="content"></p>
            </div>
            <div id="button_field">
                <button onclick="clear()">C</button>
                <button>ANS</button>
                <button>DEL</button>
                <button onclick="buttonAction(+)">+</button>
                <button onclick="buttonAction(1)">1</button>
                <button onclick="buttonAction(2)">2</button>
                <button onclick="buttonAction(3)">3</button>
                <button onclick="buttonAction(-)">-</button>
                <button onclick="buttonAction(4)">4</button>
                <button onclick="buttonAction(5)">5</button>
                <button onclick="buttonAction(6)">6</button>
                <button onclick="buttonAction(*)">*</button>
                <button onclick="buttonAction(7)">7</button>
                <button onclick="buttonAction(8)">8</button>
                <button onclick="buttonAction(9)">9</button>
                <button onclick="buttonAction(/)">/</button>
                <button></button>
                <button onclick="buttonAction(0)">0</button>
                <button onclick="buttonAction(.)">.</button>
                <button id="equal">=</button>
            </div>
        </div>
        <div id="logg">
            <ul id="list"></ul>
        </div>
    </div>
</template>

<style scoped>
#container {
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    gap: 10px;
    padding: 30px;
    align-items: center;
    place-items: center;
    text-align: center;
    justify-items: center;
}

#calculator {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.90);
    border-color: white;
    border-radius: 20px;
    display: grid;
    grid-template-rows: 0.3fr 1fr;
    gap: 15px;
    min-width: 300px;
    min-height: 370px;
}

#button_field {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3px;
}

#screen {
    background: #eef7da;
    border-radius: 5px;
    min-height: 110px;
}

#logg {
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.20);
    min-height: 200px;
    min-width: 300px;
}


button {
    grid-column: span 1;
    max-height: 60px;
    max-width: 140px
}
</style>

<script setup lang="js"> 
    var screenContent = "";
    var ans = 0;

    function buttonAction(content) {
        const content_element = document.getElementById("equal");
        content_element.innerText = screenContent + "" + content;
        screenContent += content
    }

    function clear() {
        const content_element = document.getElementById("content");
        content_element.innerText = "";
        screenContent = ""
    }

</script>