function createToaster(config) {

    return function showToast(message) {
       let div = document.createElement("div");
        div.textContent = message;
        div.className=`inline-block bg-gray-800 ${config.theme === "dark" ? "text-white" : "text-black-800 bg-white"} px-6 py-3 rounded shadow-lg pointer-events-none `;
        document.querySelector(".parent").appendChild(div);
        if(config.positionX !== "left" || config.positionX !== "top"){
                document.querySelector(".parent").className +=`${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
            };
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div)
            
        }, config.duration*1000);

    };


}


toaster = createToaster({
    positionX: "right",
    positionY: "top",
    duration: 3,
    theme: "dark",

});
toaster("Hello World");
setTimeout(() => {
    toaster("Hello World Again");
}, 2000);