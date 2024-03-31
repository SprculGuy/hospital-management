// Sample array to store active patients (for simulation)
let activePatients = [];

// Function to add new patient
function addNewPatient() {
    const patientName = document.getElementById('patientName').value;
    // Add other input fields as required

    // Simulate adding patient to the list
    activePatients.push({ id: generateUniqueId(), name: patientName }); // You can use a more sophisticated ID generation logic
    // Show success message
    showMessage('Patient added successfully.', 'green');
    // Update active patients list
    displayActivePatients();
}

// Function to edit existing patient
function editPatient(patientId) {
    // Locate patient in the list
    const index = activePatients.findIndex(patient => patient.id === patientId);
    if (index !== -1) {
        const newName = prompt('Enter new name:');
        if (newName) {
            // Update patient name
            activePatients[index].name = newName;
            // Show success message
            showMessage('Patient details updated successfully.', 'green');
            // Update active patients list
            displayActivePatients();
        }
    } else {
        showMessage('Patient not found.', 'red');
    }
}

// Function to delete existing patient
function deletePatient(patientId) {
    // Locate patient in the list
    const index = activePatients.findIndex(patient => patient.id === patientId);
    if (index !== -1) {
        // Remove patient from the list
        activePatients.splice(index, 1);
        // Show success message
        showMessage('Patient deleted successfully.', 'green');
        // Update active patients list
        displayActivePatients();
    } else {
        showMessage('Patient not found.', 'red');
    }
}

// Function to display active patients
function displayActivePatients() {
    const activePatientsList = document.getElementById('activePatientsList');
    activePatientsList.innerHTML = '';
    if (activePatients.length > 0) {
        activePatients.forEach(patient => {
            const listItem = document.createElement('div');
            listItem.textContent = `ID: ${patient.id}, Name: ${patient.name}`;
            activePatientsList.appendChild(listItem);
        });
    } else {
        activePatientsList.textContent = 'No active patients.';
    }
}

// Function to generate unique patient ID (for simulation)
function generateUniqueId() {
    return Math.random().toString(36).substring(2, 9); // Generates a random alphanumeric string
}

// Function to show messages
function showMessage(message, color) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.color = color;
    document.getElementById('dashboard').appendChild(messageElement);
    // Remove message after 3 seconds
    setTimeout(() => {
        document.getElementById('dashboard').removeChild(messageElement);
    }, 3000);
}

// Event listeners for form submissions
document.getElementById('addPatientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addNewPatient();
});

document.getElementById('editPatientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const patientId = document.getElementById('editPatientId').value;
    editPatient(patientId);
});

document.getElementById('deletePatientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const patientId = document.getElementById('deletePatientId').value;
    deletePatient(patientId);
});

// Simulated initial data (can be replaced with actual data retrieval logic)
activePatients.push({ id: generateUniqueId(), name: 'John Doe' });
activePatients.push({ id: generateUniqueId(), name: 'Jane Smith' });

// Display active patients initially
displayActivePatients();
