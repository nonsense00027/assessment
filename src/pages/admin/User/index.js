import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import moment from "moment";
import { useParams } from "react-router-dom";
import { db } from "../../../shared/firebase";
import Sidebar from "../../../components/Sidebar";
function User() {
  const navigate = useNavigate();
  const params = useParams();
  console.log("params: ", params);

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tin, setTin] = useState("");
  const [nationality, setNationality] = useState("");
  const [sex, setSex] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [birthplace, setBirthplace] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [spouseName, setSpousename] = useState("");
  const [employername, setEmployername] = useState("");
  const [employerNumber, setEmployerNumber] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [emergencyPerson, setEmergencyPerson] = useState("");
  const [emergencyAddress, setEmergencyAddress] = useState("");
  const [emergencyNumber, setEmergencyNumber] = useState("");
  const [agencyCode, setAgencyCode] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [skillAcquired, setSkillAcquired] = useState("");
  const [educationalAttainment, setEducationalAttainment] = useState("");
  const [bloodtype, setBloodtype] = useState("");
  const [organDonor, setOrganDonor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [vehicleCategory, setVehicleCategory] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [licenseCategory, setLicenseCategory] = useState("");
  const [clutchType, setClutchType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(null);
  const [followup, setFollowup] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [foundUser, setFoundUser] = useState(null);

  useEffect(() => {
    if (params.id) {
      onSnapshot(doc(db, "users", params.id), (doc) => {
        const user = { id: params.id, ...doc.data() };
        setFoundUser(user);
        if (user) {
          console.log(user.birthdate.toDate());
          setFirstname(user.firstname);
          setLastname(user.lastname);
          setMiddlename(user.middlename);
          setUsername(user.username);
          setPresentAddress(user.presentAddress);
          setPhoneNumber(user.phoneNumber);
          setTin(user.tin);
          setNationality(user.nationality);
          setEmail(user.email);
          setPassword(user.password);
          setSex(user.sex);
          // setBirthdate(user.birthdate.toDate());
          setHeight(user.height);
          setWeight(user.weight);
          setLicenseNumber(user.licenseNumber);
          setCivilStatus(user.civilStatus);
          setBirthplace(user.birthplace);
          setFathername(user.fathername);
          setMothername(user.mothername);
          setSpousename(user.spouseName);
          setEmployername(user.employername);
          setEmployerAddress(user.employerAddress);
          setEmployerNumber(user.employerNumber);
          setEmergencyPerson(user.emergencyPerson);
          setEmergencyAddress(user.emergencyAddress);
          setEmergencyNumber(user.emergencyNumber);
          setAgencyCode(user.agencyCode);
          // setIssueDate(new Date(user.issueDate));
          // setExpiryDate(new Date(user.expiryDate));
          setLicenseType(user.licenseType);
          setSkillAcquired(user.skillAcquired);
          setEducationalAttainment(user.educationalAttainment);
          setBloodtype(user.bloodtype);
          setOrganDonor(user.organDonor);
          setEyeColor(user.eyeColor);
          setApplicationType(user.applicationType);
          setVehicleCategory(user.vehicleCategory);
          setVehicleType(user.vehicleType);
          setLicenseCategory(user.licenseCategory);
          setClutchType(user.clutchType);
        }
      });
    }
  }, []);

  const updateUser = () => {
    const docRef = doc(db, "users", params.id);
    updateDoc(docRef, {
      pending: false,
      accepted: true,
    }).then(() => {
      alert("User has been updated");
      navigate("/");
    });
  };

  return (
    <div>
      <Sidebar />
      <div className="pl-60 pt-20">
        <div className="px-10">
          <section className="pt-4 pb-10">
            <div className="flex flex-col items-center justify-center">
              <form>
                <div className="flex gap-2">
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
                    <label htmlFor="lastname">Middlename</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={middlename}
                      onChange={(e) => setMiddlename(e.target.value)}
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
                    <label htmlFor="username">Username</label>
                    <input
                      required
                      type="text"
                      name="username"
                      className="text-input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                </div>

                {/*  */}

                <div className="flex gap-2">
                  <div className="form-row">
                    <label htmlFor="firstname">Present address</label>
                    <input
                      required
                      type="text"
                      name="firstname"
                      className="text-input"
                      value={presentAddress}
                      onChange={(e) => setPresentAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">TIN</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={tin}
                      onChange={(e) => setTin(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Nationality</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="phoneNumber">Sex</label>
                    <select
                      name=""
                      id=""
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="email">Birthdate</label>
                    <DatePicker
                      value={birthdate}
                      onChange={(date, dateString) => {
                        setBirthdate(date);
                        console.log(date.date());
                      }}
                    />
                    <h3>
                      {moment(foundUser?.birthdate.toDate()).format(
                        "MMMM Do YYYY"
                      )}
                    </h3>
                  </div>
                  <div className="form-row">
                    <label htmlFor="height">Height</label>
                    <input
                      required
                      type="text"
                      name="height"
                      className="text-input"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="weight">Weight</label>
                    <input
                      required
                      type="text"
                      name="weight"
                      className="text-input"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="license">License Number</label>
                    <input
                      required
                      type="text"
                      name="license"
                      className="text-input"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/*  */}

                <div className="flex gap-2">
                  <div className="form-row">
                    <label htmlFor="firstname">Civil Status</label>
                    <select
                      name=""
                      id=""
                      value={civilStatus}
                      onChange={(e) => setCivilStatus(e.target.value)}
                    >
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="widowed">Widowed</option>
                      <option value="separated">Separated</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Birthplace</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={birthplace}
                      onChange={(e) => setBirthplace(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Father's name</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={fathername}
                      onChange={(e) => setFathername(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Mother's name</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={mothername}
                      onChange={(e) => setMothername(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Spouse's name</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={spouseName}
                      onChange={(e) => setSpousename(e.target.value)}
                    />
                  </div>
                </div>

                {/*  */}

                <div className="flex gap-2">
                  <div className="form-row">
                    <label htmlFor="lastname">Employers Business name</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={employername}
                      onChange={(e) => setEmployername(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Employers number</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={employerNumber}
                      onChange={(e) => setEmployerNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Employers business address</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={employerAddress}
                      onChange={(e) => setEmployerAddress(e.target.value)}
                    />
                  </div>
                </div>

                {/*  */}

                <div className="flex gap-2">
                  <div className="form-row">
                    <label htmlFor="lastname">Emergency contact person</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={emergencyPerson}
                      onChange={(e) => setEmergencyPerson(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Emergency contact address</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={emergencyAddress}
                      onChange={(e) => setEmergencyAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Emergency contact number</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={emergencyNumber}
                      onChange={(e) => setEmergencyNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/*  */}

                <div className="flex gap-2">
                  <div className="form-row">
                    <label htmlFor="lastname">Agency code</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={agencyCode}
                      onChange={(e) => setAgencyCode(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Issue date</label>
                    <DatePicker
                      value={issueDate}
                      onChange={(date, dateString) => setIssueDate(date)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Expiry date</label>
                    <DatePicker
                      value={expiryDate}
                      onChange={(date, dateString) => setExpiryDate(date)}
                    />
                  </div>
                </div>

                {/*  */}

                <div className="flex gap-2">
                  <div className="form-row">
                    <label htmlFor="firstname">
                      License classification applied for
                    </label>
                    <select
                      name=""
                      id=""
                      value={licenseType}
                      onChange={(e) => setLicenseType(e.target.value)}
                    >
                      <option value="student">
                        Student Drivers Permit (SP)
                      </option>
                      <option value="driver">Driver's License (DL)</option>
                      <option value="conductor">
                        Conductor's License (CL)
                      </option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="firstname">
                      Driving skill acquired from
                    </label>
                    <select
                      name=""
                      id=""
                      value={skillAcquired}
                      onChange={(e) => setSkillAcquired(e.target.value)}
                    >
                      <option value="school">Driving School</option>
                      <option value="private">Private licensed person</option>
                      <option value="tesda">TESDA</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="firstname">
                      Highest educational attainment
                    </label>
                    <select
                      name=""
                      id=""
                      value={educationalAttainment}
                      onChange={(e) => setEducationalAttainment(e.target.value)}
                    >
                      <option value="post">Postgraduate</option>
                      <option value="college">Collge</option>
                      <option value="highschool">Highschool</option>
                      <option value="elementary">Elementary</option>
                    </select>
                  </div>
                </div>

                {/*  */}

                <div className="flex gap-2">
                  <div className="form-row">
                    <label htmlFor="lastname">Blood type</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={bloodtype}
                      onChange={(e) => setBloodtype(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Organ donor</label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={organDonor}
                        onChange={(e) => setOrganDonor(e.target.checked)}
                      />
                      <p>Yes</p>
                    </div>
                  </div>
                  <div className="form-row">
                    <label htmlFor="lastname">Eyes color</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="text-input"
                      value={eyeColor}
                      onChange={(e) => setEyeColor(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="firstname">Type of Application (TOA)</label>
                    <select
                      name=""
                      id=""
                      value={applicationType}
                      onChange={(e) => setApplicationType(e.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="renewal">Renewal</option>
                      <option value="conversion">Conversion of Foreign</option>
                      <option value="additional">
                        Additional Code or category
                      </option>
                      <option value="dl">Change of DL classification</option>
                      <option value="expired">Expired DL with valid FDL</option>
                      <option value="duplicate">Duplicate</option>
                      <option value="dropping">Dropping of category</option>
                      <option value="revision">Revision of record</option>
                      <option value="enhancement">Enhancement of DL</option>
                      <option value="clutch">Change of clutch type</option>
                    </select>
                  </div>
                </div>

                {/*  */}

                <div className="flex gap-2">
                  <div className="form-row">
                    <label htmlFor="firstname">Vehicle Category</label>
                    <select
                      name=""
                      id=""
                      value={vehicleCategory}
                      onChange={(e) => setVehicleCategory(e.target.value)}
                    >
                      <option value="motorcycle">Motorcycle</option>
                      <option value="tricycle">Tricycle</option>
                      <option value="m1">M1 Vehicles</option>
                      <option value="m2">M2 Vehicles</option>
                      <option value="light">Light Commercial vehicles</option>
                      <option value="heavy">Heavy Commercial vehicles</option>
                      <option value="passenger">
                        BUSES, COACHES and OTHER PASSENGER VEHICLES
                      </option>
                      <option value="articulated">
                        ARTICULATED PASSENGER CARS
                      </option>
                      <option value="heavyarticulated">
                        HEAVY ARTICULATED VEHICLES
                      </option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="firstname">Vehicle Application type</label>
                    <select
                      name=""
                      id=""
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                    >
                      <option value="existing">Existing</option>
                      <option value="applied">Applied for</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="firstname">License category</label>
                    <select
                      name=""
                      id=""
                      value={licenseCategory}
                      onChange={(e) => setLicenseCategory(e.target.value)}
                    >
                      <option value="sv">SV</option>
                      <option value="nonpro">NON PRO</option>
                      <option value="pro">PRO</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="firstname">Clutch type</label>
                    <select
                      name=""
                      id=""
                      value={clutchType}
                      onChange={(e) => setClutchType(e.target.value)}
                    >
                      <option value="at">AT</option>
                      <option value="mt">MT</option>
                    </select>
                  </div>
                </div>
              </form>
              <button
                className="bg-secondary text-white w-full mt-4 py-2"
                onClick={updateUser}
              >
                Accept
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default User;
