   let SubmitBtn = document.getElementById("SubmitBtn")

    SubmitBtn.addEventListener("click", () => {
        event.preventDefault()

        let Name = document.getElementById("Name").value
        let Mail = document.getElementById("Mail").value
        let Num = document.getElementById("Num").value
        let TermsConds = document.getElementById("TermsConds")
        
        let error = document.getElementById("error-message")

        // Validasi
        let check = 0

        if (Name.length == 0) {
            error.innerHTML = "Name must be filled"

            error.style.color = "red"

            error.style.display = "block"

            check = -1
            
        } else if (Mail.length == 0) {
            error.innerHTML = "E-mail must be filled"

            error.style.color = "red"

            error.style.display = "block"

            check = -1            
        } else if (!Mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            error.innerHTML = "Invalid input for e-mail"

            error.style.color = "red"

            error.style.display = "block"

            check = -1            
        } else if (Num.length == 0) {
            error.innerHTML = "Phone number must be filled"

            error.style.color = "red"

            error.style.display = "block"

            check = -1            
        } else if (!Num.match(/^\d+/)) {
            error.innerHTML = "Invalid input for phone number (contains character other than number)."

            error.style.color = "red"

            error.style.display = "block"

            check = -1  
        } else if (Num.length != 10) {
            error.innerHTML = "Invalid input for phone number (less than ten digits)."

            error.style.color = "red"

            error.style.display = "block"

            check = -1            
        } else if (!TermsConds.checked) {
            error.innerHTML = "You haven't checked our terms and conditions."

            error.style.color = "red"

            error.style.display = "block"

            check = -1                
        }
        
        if (check != -1) {     
            error.style.display = "none"

            alert("You have successfully subscribed to our newsletter!")

        }         
    })