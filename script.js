
if("serviceWorker" in navigator){
	navigator.serviceWorker.register('./service-worker.js').then(function(){
		console.log("Service Worker is registered");
	});
}

window.addEventListener("DOMContentLoaded",() => {
    var input_box = document.getElementById("input_box")
    var center_input_box = document.getElementById("center_input_box")
    var center_input_box_submit = document.getElementById("center_input_box_submit")
    var insert_text = document.getElementById("insert_text")
    var ome_message = document.getElementById("ome_message")
    var back_to_top = document.getElementById("back_to_top")
    var input_form = document.getElementById("input_form")

    center_input_box_submit.addEventListener("click",() => {
        submit();
    });

    input_form.addEventListener("submit",(e) => {
        e.preventDefault();
        submit();
    });

    function submit() {
        center_input_box.disabled = true
        center_input_box_submit.disabled = true
        if (!center_input_box.value || !center_input_box.value.match(/\S/g)) {
            setTimeout(() => {
                center_input_box.value = ""
                center_input_box.disabled = false
                center_input_box_submit.disabled = false
            },500);
        } else {
            if (center_input_box.value == "2386") {
                center_input_box.value = ""
                center_input_box.disabled = false
                center_input_box_submit.disabled = false
                input_box.classList.add("hide");
                setTimeout(() => {
                    input_box.style.display = "none"
                    ome_message.style.display = "block"
                    back_to_top.classList.add("show");
                },300);
            } else {
                setTimeout(() => {
                    center_input_box.value = ""
                    center_input_box.disabled = false
                    center_input_box_submit.disabled = false
                },500);
            }
        }
    }

    back_to_top.addEventListener("click", () => {
        back_to_top.classList.remove("show");
        ome_message.style.display = ""
        input_box.style.display = ""
        setTimeout(() => {
            input_box.classList.remove("hide");
        },300);
    });

});
