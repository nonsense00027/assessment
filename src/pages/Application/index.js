import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import React, { useState } from "react";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import { db } from "../../shared/firebase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
function Application() {
  const navigate = useNavigate();
  const { users } = useUserContext();

  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(null);
  const [followup, setFollowup] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [foundUser, setFoundUser] = useState(null);

  const handleForm = (e) => {
    console.log("form: ", e.target.value);
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foundUser) {
      const docRef = doc(db, "users", foundUser.id);
      updateDoc(docRef, {
        firstname,
        lastname,
        phoneNumber,
        email,
        password,
      }).then(() => {
        alert("User has been updated");
        clearFields();
        navigate("/application");
        window.location.reload();
      });
    } else {
      addDoc(collection(db, "users"), {
        firstname,
        lastname,
        phoneNumber,
        email,
        password,
        pending: true,
      })
        .then(() => {
          clearFields();
          alert("Application Success!");
          navigate("/application");
          window.location.reload();
        })
        .catch((error) => alert(error.message));
    }
  };

  const clearFields = () => {
    setFirstname("");
    setLastname("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setForm(null);
  };

  const handleSearch = () => {
    console.log("searching");
    const found = users.filter((user) => user.email === selectedEmail)[0];
    console.log("found: ", found);
    if (found) {
      setFoundUser(found);
      if (found.pending) {
        alert("Application still pending");
        setFirstname(found.firstname);
        setEmail(found.email);
        setLastname(found.lastname);
        setPhoneNumber(found.phoneNumber);
        setPassword(found.password);
      } else {
        console.log("sulod", found);
        if (found.accepted === true) {
          alert("Application accepted");
        } else if (found.accepted === false) {
          alert("Application rejected");
        }
      }
    }
  };

  return (
    <section className="py-36">
      <Header />
      <SectionTitle title="Online Application" />
      <div className="flex flex-col items-center justify-center">
        <div className="w-80">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => setFollowup(e.target.checked)}
          />
          <p>Follow up</p>
          {followup && (
            <>
              <div className="form-row">
                <label htmlFor="selectedEmail">Email address</label>
                <input
                  required
                  type="text"
                  name="selectedEmail"
                  className="text-input"
                  value={selectedEmail}
                  onChange={(e) => setSelectedEmail(e.target.value)}
                />
              </div>
              <button
                className="w-80 bg-secondary text-white py-1 mb-10"
                onClick={handleSearch}
              >
                Search
              </button>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="firstname">Firstname</label>
            <input
              required
              type="text"
              name="firstname"
              className="text-input"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="lastname">Lastname</label>
            <input
              required
              type="text"
              name="lastname"
              className="text-input"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="phoneNumber">Contact no.</label>
            <input
              required
              type="text"
              name="phoneNumber"
              className="text-input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email address</label>
            <input
              required
              type="email"
              name="email"
              className="text-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              name="password"
              className="text-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-80 text-center mt-4">
            <h3>
              Please download the form{" "}
              <a
                href="https://lto.gov.ph/lto-forms/file/1162-application-for-student-driver%20s-permit-driver-s-license-conductor-s-license-apl.html"
                target="_blank"
              >
                here
              </a>
              , fill up, scan, and attach file below{" "}
            </h3>
          </div>

          <div className="form-row">
            <label htmlFor="application">Application Form</label>
            <input
              type="file"
              name="application"
              className="text-input"
              onChange={handleForm}
            />
          </div>
          {foundUser ? (
            <button
              type="submit"
              className={`bg-secondary py-1 text-white w-80 rounded-sm mt-4 ${
                form === null && "bg-opacity-30"
              }`}
              disabled={form === null}
            >
              Update
            </button>
          ) : (
            <button
              type="submit"
              className={`bg-secondary py-1 text-white w-80 rounded-sm mt-4 ${
                form === null && "bg-opacity-30"
              }`}
              disabled={form === null}
            >
              Proceed
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

export default Application;
