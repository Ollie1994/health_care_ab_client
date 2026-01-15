import { useState } from "react";
import "./booking.css";

function Booking() {

    const [formData, setFormData] = useState({
    date: "",
    time: "",
    symptoms: [],
    reasonForVisit: "",
    notesFromPatient: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="booking-page">
      <form className="booking-form">

        <div className="booking-column">
          <h3 className="booking-title">Enter Details</h3>

          <label className="booking-label">Symptoms</label>
          <select className="booking-select">
            <option>Fever</option>
          </select>
          <select className="booking-select">
            <option>Light Headed</option>
          </select>
          <div className="booking-addRemove">
            <span className="add">Add +</span>
            <span className="remove">Remove -</span>
          </div>

          <label className="booking-label">Reason for visit</label>
          <textarea
            className="booking-textarea"
            placeholder="Describe your experienced problems"
          />
          </div>
        </form>
    </div>

  )

}