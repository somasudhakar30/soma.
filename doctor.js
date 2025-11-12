document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const dateSelect = document.getElementById('dateSelect');
    const timeSelect = document.getElementById('timeSelect');
    const doctorSelect = document.getElementById('doctorSelect');
    const patientNameInput = document.getElementById('patientName');
    const patientEmailInput = document.getElementById('patientEmail');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmedPatientName = document.getElementById('confirmedPatientName');
    const confirmedDoctor = document.getElementById('confirmedDoctor');
    const confirmedDate = document.getElementById('confirmedDate');
    const confirmedTime = document.getElementById('confirmedTime');
    const confirmedPatientEmail = document.getElementById('confirmedPatientEmail');

    // Populate available times (can be dynamic based on doctor and date in a real app)
    const availableTimes = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

    function populateTimes() {
        timeSelect.innerHTML = '<option value="">-- Choose a Time --</option>';
        availableTimes.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }

    // Set minimum date to today
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    dateSelect.setAttribute('min', minDate);

    // Initial population of times
    populateTimes();

    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // In a real application, you would send this data to a backend server
        // via an API call (e.g., using fetch or XMLHttpRequest).
        const doctor = doctorSelect.value;
        const date = dateSelect.value;
        const time = timeSelect.value;
        const patientName = patientNameInput.value;
        const patientEmail = patientEmailInput.value;

        if (!doctor || !date || !time || !patientName || !patientEmail) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate a successful booking
        console.log("Booking Request:", { doctor, date, time, patientName, patientEmail });
        alert('Appointment booked successfully! (See console for details)');

        // Display confirmation message
        appointmentForm.classList.add('hidden');
        confirmationMessage.classList.remove('hidden');

        confirmedPatientName.textContent = patientName;
        confirmedDoctor.textContent = doctor;
        confirmedDate.textContent = new Date(date).toDateString(); // Format date nicely
        confirmedTime.textContent = time;
        confirmedPatientEmail.textContent = patientEmail;

        // You might want to reset the form or redirect the user here
        // appointmentForm.reset();
    });
});