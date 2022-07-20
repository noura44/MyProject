var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.lang = "ar";

recognition.continuous = true

// recognition is started

recognition.onstart = function() {

 instructions.text("التعرف على الصوت قيد التشغيل")

}

recognition.onspeechend = function() {

 instructions.text("لا يوجد صوت")

}

recognition.onerror = function() {

 instruction.text("حاول مرةأخرى")

}

recognition.onresult = function(event) {

 var current = event.resultIndex;

 var transcript = event.results[current][0].transcript



 content += transcript

 textbox.val(content)

}

$("#start-btn").click(function(event) {

 recognition.start()

})

textbox.on('input', function() {

 content = $(this).val()

})
