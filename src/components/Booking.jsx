import { useState } from "react";
import "../styles/booking.css";
import { Button } from "./Button";
import Calendar from "./Calendar";
import "../styles/calendar.css";
import axios from "axios";

function Booking() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    caregiverId: null,
    startDateTime: null,
    endDateTime: null,
    symptoms: [""],
    reasonForVisit: "",
    notesFromPatient: "",
  });

  // modal for confirmation
  const [modalData, setModalData] = useState(null);

  // mock data
  const caregivers = [
    { caregiverId: "6966440be1a90ec998c30a9d", firstName:"Dr Sara" }, 
    { caregiverId: "69665f5868b0c06b68b527f3", firstName: "Dr Ben" }
  ];
  const availabilities = [
    { start: "10:00", end: "11:00" },
    { start: "13:00", end: "14:00" },
    { start: "15:00", end: "16:00" },
  ];


  // handle add for symptoms
  const handleAddSymptom = () => {
    setFormData((prev) => ({
      ...prev,
      symptoms: [...prev.symptoms, ""],
    }));
  };

  // handle remove for symptoms
  const handleRemoveSymptom = () => {
    setFormData((prev) => ({
      ...prev,
      symptoms: prev.symptoms.length > 1
        ? prev.symptoms.slice(0, -1)
        : prev.symptoms,
    }));
  };

  // for updating symptoms
  const handleSymptomChange = (i, value) => {
    setFormData((prev) => {
      const symptoms = [...prev.symptoms];
      symptoms[i] = value;
      return { ...prev, symptoms };
    });
  };

  // Calendar handlers
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setFormData((prev) => ({
      ...prev,
      caregiverId: null,
      startDateTime: null,
      endDateTime: null,
    }));
  };

  const handleCaregiverSelect = (caregiverId) => {
    setFormData((prev) => ({
      ...prev,
      caregiverId,
      startDateTime: null,
      endDateTime: null,
    }));
  };

  // for displaying availabilities (hh:mm)
  const handleTimeSelect = ({ start, end }) => {
    const startDate = new Date(selectedDate);
    const [h1, m1] = start.split(":");
    startDate.setHours(h1, m1, 0, 0);

    const endDate = new Date(selectedDate);
    const [h2, m2] = end.split(":");
    endDate.setHours(h2, m2, 0, 0);

    setFormData((prev) => ({
      ...prev,
      startDateTime: startDate,
      endDateTime: endDate,
    }));
    setSelectedTime(`${start} – ${end}`);
  };

  // Notes and reason handlers
  const handleNotesChange = (e) => setFormData((prev) => ({ ...prev, notesFromPatient: e.target.value }));
  const handleReasonChange = (e) => setFormData((prev) => ({ ...prev, reasonForVisit: e.target.value }));

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate || !formData.caregiverId || !formData.startDateTime || !formData.endDateTime) {
      alert("Please select date, caregiver and time.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/booking",
        formData,
        {
          withCredentials: true
        }
      );

      const data = response.data;

      // modal with backend response
      setModalData({
        message: data.message,
        caregiverFirstName: data.caregiverFirstName,
        startDateTime: data.startDateTime,
        endDateTime: data.endDateTime,
      });
    } catch {
      alert("Something went wrong.");
    }
  };

  // Close modal
  const closeModal = () => setModalData(null);

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-calendar">
          <h3 className="booking-title">Select Date and Time</h3>
          <Calendar selectedDate={selectedDate} onDateSelect={handleDateSelect} />
          {/* Caregiver selection */}
          {selectedDate && (
            <div className="booking-column">
              <h3 className="booking-title">Select Caregiver</h3>
              {caregivers.map((c) => (
                <div
                  key={c.caregiverId}
                  onClick={() => handleCaregiverSelect(c.caregiverId)}
                  className={`caregiver-option ${formData.caregiverId === c.caregiverId ? "active" : ""}`}
                >
                  {c.firstName}
                </div>
              ))}
            </div>
          )}

          {/* Time selection */}
          {formData.caregiverId && (
            <div className="booking-column">
              <h3 className="booking-title">Select Time</h3>
              {availabilities.map((availabilities, i) => (
                <div
                  key={i}
                  onClick={() => handleTimeSelect(availabilities)}
                  className={`availabilities-option ${selectedTime === `${availabilities.start} – ${availabilities.end}` ? "active" : ""}`}
                >
                  {availabilities.start} – {availabilities.end}
                </div>
              ))}
            </div>
          )}

            <label>Notes</label>
            <textarea 
            placeholder="Anything you would like your caregiver to know ?"
            value={formData.notesFromPatient} 
            onChange={handleNotesChange}
            />
          </div>
          <div className="booking-column">
          <h3 className="booking-title">Enter Details</h3>

          <label className="booking-label">Symptoms</label>
          {formData.symptoms.map((symptom, i) => (
            <select
                key={i}
                className="booking-symptoms"
                value={symptom}
                onChange={(e) =>
                  handleSymptomChange(i, e.target.value)
                }
            >
                <option value="">Select symptom</option>
                <option>Fever</option>
                <option>Light Headed</option>
                <option>Coughing</option>
                <option>Headache</option>
              </select>
          ))}
          <div className="booking-addRemove">
            <span className="add" onClick={handleAddSymptom}>Add +</span>
            <span className="remove" onClick={handleRemoveSymptom}>Remove -</span>
        </div>

          <label className="booking-label">Reason for visit</label>
          <textarea
            className="booking-textarea"
            placeholder="Describe your experienced problems"
            value={formData.reasonForVisit}
            onChange={handleReasonChange}
            />
          <div className="booking-doctorInfo">
            {formData.caregiverId ? `🩺 ${caregivers.find(c => c.caregiverId === formData.caregiverId)?.firstName}` : ""}
            </div>
          <div className="booking-timeInfo">
            {formData.startDateTime && formData.endDateTime ? "⏱ 60 mins" : ""}
          </div>
          
          <Button type="submit" className="booking-confirmButton">Confirm</Button>
          </div>
        </form>
        {/* Modal */}
        {modalData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Booking Confirmed!</h3>
            <p>{modalData.message}</p>
            <p>Caregiver: {modalData.caregiverFirstName}</p>
            <p>
              {new Date(modalData.startDateTime).toLocaleString()} –{" "}
              {new Date(modalData.endDateTime).toLocaleString()}
            </p>
            <Button onClick={closeModal} className="booking-confirmButton">Close</Button>
          </div>
        </div>
      )} 
    </div>
  )
}

export default Booking;