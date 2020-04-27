 // Contras
        // Se debe definir el Idioma 

        // Transformar texto a voz
        document.getElementById('setTalk').addEventListener("click", ()=>{
            talk( document.getElementById('textTotransform').value )
        });

        const talk = (text) =>{
            speechSynthesis.speak(new SpeechSynthesisUtterance(text))
        };

        // Reconocer voz
        let rec;
            // Validamos si el browser reconoce la API
            if(!("webkitSpeechRecognition" in window)){
                alert("browser no compatible")
            }else{
                rec = new webkitSpeechRecognition();
                rec.lang = 'es';
                rec.continuous = true;
                rec.interim = true;
                rec.addEventListener("result", iniciar);
            }

            let div = document.getElementById('texto');
            let divActual = document.getElementById('texto').innerHTML;
        function iniciar(event){
            
                
            let i = 0;
            for (i = event.resultIndex; i < event.results.length; i++){
                
               div.innerHTML = `${divActual} ${event.results[i][0].transcript}`;

            }

        }

        document.getElementById('setStart').addEventListener("click", ()=>{
            rec.start();
            document.getElementById("setStart").style.display="none"
            document.getElementById("setFinished").style.display="block"
        });

        document.getElementById('setFinished').addEventListener("click", ()=>{
            rec.stop();
            document.getElementById("setFinished").style.display="none"
            document.getElementById("setStart").style.display="block"
        });