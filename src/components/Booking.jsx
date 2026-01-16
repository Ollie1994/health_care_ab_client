import { useState } from "react";
import "../styles/booking.css";
import { Button } from "./Button";

function Booking() {

    const [formData, setFormData] = useState({
    date: "",
    time: "",
    symptoms: [""],
    reasonForVisit: "",
    notesFromPatient: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedSymptom, setSelectedSymptom] = useState("");

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

  // If user updates (changes) symptom in a symptom label
  const handleSymptomChange = (index, value) => {
    setFormData((prev) => {
      const updated = [...prev.symptoms];
      updated[index] = value;
      return { ...prev, symptoms: updated };
    });
  };

  return (
    <div className="booking-page">
      <form className="booking-form">

        <div className="booking-column">
          <h3 className="booking-title">Enter Details</h3>

          <label className="booking-label">Symptoms</label>
          {formData.symptoms.map((symptom, index) => (
            <select
                key={index}
                className="booking-symptoms"
                value={symptom}
                onChange={(e) =>
                  handleSymptomChange(index, e.target.value)
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
          />
          <div className="booking-doctorInfo">🩺 Dr. Steven John</div>
          <div className="booking-timeInfo">⏱ 60 mins</div>
          
          <Button type="submit" className="booking-confirmButton">Confirm</Button>
          </div>
        </form>
    </div>

  )

}

export default Booking;