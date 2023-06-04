
window.addEventListener("DOMContentLoaded",() => {
    var input_box = document.getElementById("input_box")
    var center_input_box = document.getElementById("center_input_box")
    var center_input_box_submit = document.getElementById("center_input_box_submit")
    var insert_text = document.getElementById("insert_text")
    var ome_message = document.getElementById("ome_message")

    center_input_box_submit.addEventListener("click",() => {
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
                },300);
            } else {
                setTimeout(() => {
                    center_input_box.value = ""
                    center_input_box.disabled = false
                    center_input_box_submit.disabled = false
                },500);
            }
        }
    });

});
