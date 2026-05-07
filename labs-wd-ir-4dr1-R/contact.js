document.getElementById("contactForm").addEventListener("submit", function (e) {

		const fullname = document.getElementById("name").value.trim();
		const namePattern = /^[A-Za-z\s]+$/;

		if (fullname.length < 5) {
			alert("Full name must contain at least 5 characters.");
			e.preventDefault();
			return;
		}

		if (!namePattern.test(fullname)) {
			alert("Full name must contain only letters and spaces.");
			e.preventDefault();
			return;
		}

		const email = document.getElementById("email").value.trim();
		const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

		if (!emailPattern.test(email)) {
			alert("Email must be valid and end with @e-uvt.ro");
			e.preventDefault();
			return;
		 }


		const phone = document.getElementById("phone").value.trim();
		const phonePattern = /^(\d{10})?$/;

		if (!phonePattern.test(phone)) {
			alert("Phone number must be 10 digits.");
			e.preventDefault();
			return;
		}
		
		function isOver18(dateString){
			const birthDate = new Date(dateString);
			const today = new Date();

			const cutoff = new Date(
				today.getFullYear() - 18,
				today.getMonth(),
				today.getDate()
			);
			return birthDate <=cutoff;
		}

		
		const date = document.getElementById("dob").value;
		if(!isOver18(date)) {
			alert("You must be at least 18.");
			e.preventDefault();
			return;
		}
		
         
		
		const website = document.getElementById("website").value.trim();

		if (website !== "" && !website.startsWith("https://")) {
			alert("Website must start with https://");
			e.preventDefault();
			return;
		}
		
		const fileInput = document.getElementById("fileUpload");
		const file = fileInput.files[0];

		if (file) {
			const allowedTypes = [
				"application/pdf",
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
			];

			if (!allowedTypes.includes(file.type)) {
				alert("Only PDF or DOCX files are allowed.");
				e.preventDefault();
				return;
			}

			const maxSize = 2 * 1024 * 1024; // 2MB

			if (file.size > maxSize) {
				alert("File size must not exceed 2MB.");
				e.preventDefault();
				return;
			}
		}

		const color = document.getElementById("favColor").value;

		if (color === "#cccccc") {
			alert("Please select a color.");
			e.preventDefault();
			return;
		}

		if (!confirm('Do you want to submit the form?')) {
    		e.preventDefault();
			return;
		}
		
	});