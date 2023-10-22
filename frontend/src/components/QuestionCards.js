import { useState } from "react";
import axios from "axios";
import CustomNumberInput from './CustomNumberInput';
const QuestionCards = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q4Other: "",
    q5: [],
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    emailConsent:"",
    analysisConsent:""
  });

  const handleChange = (ev) => {
    const { name, value, type } = ev.target;

        // Handle checkboxes
        if (type === "checkbox") {
            const isChecked = ev.target.checked;
            if (isChecked) {
                setInputs((values) => ({ ...values, q5: [...values.q5, value] }));
            } else {
                setInputs((values) => ({ ...values, q5: values.q5.filter(brand => brand !== value) }));
            }
        }
        else {
            setInputs((values) => ({ ...values, [name]: value }));
        }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    //console.log(inputs);
    // Check if the age is less than 18
    if (inputs.q1 !== "" && parseInt(inputs.q1) < 18) {
      alert("You must be 18 years or older to take this survey.");
      return; // Prevent the form submission
    }


    try {
      // Send the form data to the backend using axios
      const response = await axios.post("http://localhost:5000/submit", inputs);
      alert("Form data submitted successfully", response.data);
    } catch (error) {
      alert("Error submitting form data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cards">
        <div className="questionholder">
          <label className="question" style={{fontWeight: 500}}>Name:</label>{" "}
          &emsp;&emsp;&emsp;&emsp;&ensp;
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <label className="question" style={{fontWeight: 500}}>Email Address:</label>&emsp;
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">Age:</p>
          <CustomNumberInput
            label="Age"
            name="q1"
            value={inputs.q1}
            onChange={handleChange}
          />
          {/* <input
            type="text"
            name="q1"
            placeholder="Enter your Age"
            value={inputs.q1 || ""}
            onChange={handleChange}
          />
          <select name="q1" value={inputs.q1} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value = "<18" >below 18</option>
            <option value="18-30">18-30</option>
            <option value="31-50">31-50</option>
            <option value="51+">51+</option>
          </select> */}
          
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">Gender:</p>
          <select name="q2" value={inputs.q2} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">Location:</p>
          {/* <input
            type="text"
            name="q3"
            placeholder="Enter your city name"
            value={inputs.q3 || ""}
            onChange={handleChange}
          /> */}
          <select name="q3" value={inputs.q3} onChange={handleChange}>
              <option value="">Select an option</option>
              <option value="Hebbal">Hebbal</option>
              <option value="Hennur Road">Hennur Road</option>
              <option value="Jakkur">Jakkur</option>
              <option value="Thanisandra">Thanisandra</option>
              <option value="Yelahanka">Yelahanka</option>
              <option value="Horamavu">Horamavu</option>
              <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">
            Which electronic goods category interests you the most?
          </p>
          <input
            type="radio"
            name="q4"
            value="TV"
            checked={inputs.q4 === "TV"}
            onChange={handleChange}
          />
          <label>TV</label>
          <br />
          <input
            type="radio"
            name="q4"
            value="Home Theatre"
            checked={inputs.q4 === "Home Theatre"}
            onChange={handleChange}
          />
          <label>Home Theatre</label>
          <br />
          <input
            type="radio"
            name="q4"
            value="Laptop"
            checked={inputs.q4 === "Laptop"}
            onChange={handleChange}
          />
          <label>Laptop</label>
          <br />
          <input
            type="radio"
            name="q4"
            value="Mobile"
            checked={inputs.q4 === "Mobile"}
            onChange={handleChange}
          />
          <label>Mobile</label>
          <br />
          <label>
            <input
              type="radio"
              name="q4"
              value="Other"
              checked={inputs.q4 === "Other"}
              onChange={handleChange}
            />
            Other:
            <input
              className="q4other"
              type="text"
              name="q4Other"
              value={inputs.q4Other}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">
            What brand(s) do you prefer for electronic goods?
          </p>
          <label>
            <input
              type="checkbox"
              name="q5"
              value="LG"
              checked={inputs.q5.includes("LG")}
              onChange={handleChange}
            />
            LG
          </label>&emsp;&emsp;
          <label>
            <input
              type="checkbox"
              name="q5"
              value="Sony"
              checked={inputs.q5.includes("Sony")}
              onChange={handleChange}
            />
            Sony
          </label>&emsp;&emsp;
          <label>
            <input
              type="checkbox"
              name="q5"
              value="HP"
              checked={inputs.q5.includes("HP")}
              onChange={handleChange}
            />
            HP
          </label>&emsp;&emsp;
          <label>
            <input
              type="checkbox"
              name="q5"
              value="Samsung"
              checked={inputs.q5.includes("Samsung")}
              onChange={handleChange}
            />
            Samsung
          </label>&emsp;&emsp;
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">What type of discount do you find most appealing?</p>
          <input
            type="radio"
            name="q6"
            value="Percentage"
            checked={inputs.q6 === "Percentage"}
            onChange={handleChange}
          />
          <label>Percentage (e.g., 15%, up to 20%)</label>
          <br />
          <input
            type="radio"
            name="q6"
            value="Amount"
            checked={inputs.q6 === "Amount"}
            onChange={handleChange}
          />
          <label>Amount (e.g., Rs. 1000 off on purchase of Rs. 5000)</label>
          <br/>
          <input
            type="radio"
            name="q6"
            value="Flat Discount"
            checked={inputs.q6 === "Flat Discount"}
            onChange={handleChange}
          />
          
          <label>Flat Discount (e.g., Rs. 500 off)</label>
          <br />
          <input
            type="radio"
            name="q6"
            value="No preference"
            checked={inputs.q6 === "No preference"}
            onChange={handleChange}
          />
          <label>No preference</label>
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">Do you have a preference for any particular freebies or additional benefits?</p>
          <input
            type="radio"
            name="q7"
            value="BOGO (Buy One Get One)"
            checked={inputs.q7 === "BOGO (Buy One Get One)"}
            onChange={handleChange}
          />
          <label>BOGO (Buy One Get One)</label>
          <br />
          <input
            type="radio"
            name="q7"
            value="Buy 2 Get 1"
            checked={inputs.q7 === "Buy 2 Get 1"}
            onChange={handleChange}
          />
          <label>Buy 2 Get 1</label>
          <br/>
          <input
            type="radio"
            name="q7"
            value="50% off"
            checked={inputs.q7 === "50% off"}
            onChange={handleChange}
          />
          <label>50% off</label>
          <br/>
          <input
            type="radio"
            name="q7"
            value="No preference"
            checked={inputs.q7 === "No preference"}
            onChange={handleChange}
          />
          <label>No preference</label>
          
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">When do you intend to make a purchase?</p>
          <input
            type="radio"
            name="q8"
            value="Within a week"
            checked={inputs.q8 === "Within a week"}
            onChange={handleChange}
          />
          <label>Within a week</label>
          <br />
          <input
            type="radio"
            name="q8"
            value="Within a month"
            checked={inputs.q8 === "Within a month"}
            onChange={handleChange}
          />
          <label>Within a month</label>
          <br />
          <input
            type="radio"
            name="q8"
            value="Immediately"
            checked={inputs.q8 === "Immediately"}
            onChange={handleChange}
          />
          <label>Immediately</label>
          <br />
          <input
            type="radio"
            name="q8"
            value="Just browsing"
            checked={inputs.q8 === "Just browsing"}
            onChange={handleChange}
          />
          <label>Just browsing</label>
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">Do you have an immediate choice of product?</p>
          <input
            type="text"
            name="q9"
            placeholder="enter the product name"
            value={inputs.q9 || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="cards">
        <div className="questionholder">
          <p className="question">would you like to recieve service related communications or marketing offers?</p>
          <input
            type="radio"
            name="emailConsent"
            value="yes"
            checked={inputs.emailConsent === "yes"}
            onChange={handleChange}
          />
          <label>Yes, I would like to receive emails.</label>
          <br />
          <input
            type="radio"
            name="emailConsent"
            value="no"
            checked={inputs.emailConsent === "no"}
            onChange={handleChange}
          />
          <label>No, I do not wish to receive emails.</label>
        </div>
      </div>
      <div className="cards">
        <div className="questionholder">
          <p className="question">Do you consent to share your responses for research and analysis purposes?</p>
          <input
            type="radio"
            name="analysisConsent"
            value="yes"
            checked={inputs.analysisConsent === "yes"}
            onChange={handleChange}
          />
          <label>Yes</label>
          <br />
          <input
            type="radio"
            name="analysisConsent"
            value="no"
            checked={inputs.analysisConsent === "no"}
            onChange={handleChange}
          />
          <label>No</label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionCards;
