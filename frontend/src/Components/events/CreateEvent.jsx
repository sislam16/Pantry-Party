import React, { useState } from "react";
const CreateEvent = ({ user }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            <h2 className="center-align">Schedule a Pantry-Party</h2>
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <input
                  className="center-align"
                  type="text"
                  value={eventName}
                  placeholder="Event Name"
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="input-field col s8 offset-s2"
              >
                <textarea
                  type="materialize-textarea"
                  style={{ resize: "none", height: "200px", width: "250px" }}
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  className="validate"
                  required
                  placeholder="Event Description"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5 offset-s1">
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </div>
              <div class="input-field col s5">
                <select
                  style={{ display: "block" }}
                  class="icons"
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                >
                  <option value="" disabled selected>
                    Choose a recipe
                  </option>
                  <option value="" data-icon="#">
                    recipe 1
                  </option>
                  <option value="" data-icon="#">
                    recipe 2
                  </option>
                  <option value="" data-icon="#">
                    recipe 3
                  </option>
                </select>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="submit" name="action">
                  Create Party
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
