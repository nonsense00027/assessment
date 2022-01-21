import {
  addDoc,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import { db, auth } from "../../shared/firebase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { DatePicker, Space } from "antd";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useAuthContext } from "../../contexts/AuthContext";
import moment from "moment";

function Application() {
  const navigate = useNavigate();
  const { users } = useUserContext();
  const { user, login } = useAuthContext();
  console.log("USER IS: ", user);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
  };

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
  const [organDonor, setOrganDonor] = useState(false);
  const [all, setAll] = useState(false);
  const [kidney, setKidney] = useState(false);
  const [heart, setHeart] = useState(false);
  const [cornea, setCornea] = useState(false);
  const [eyes, setEyes] = useState(false);
  const [pancreas, setPancreas] = useState(false);
  const [liver, setLiver] = useState(false);
  const [lungs, setLungs] = useState(false);
  const [bones, setBonea] = useState(false);
  const [skins, setSkins] = useState(false);
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
  }, [user]);

  const handleForm = (e) => {
    console.log("form: ", e.target.value);
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("success signup: ", user);
          const docRef = doc(db, "users", user.uid);
          setDoc(docRef, {
            firstname,
            lastname,
            middlename,
            username,
            presentAddress,
            phoneNumber,
            tin,
            nationality,
            email,
            password,
            pending: true,
            sex,
            birthdate: birthdate.toDate(),
            height,
            weight,
            licenseNumber,
            civilStatus,
            birthplace,
            fathername,
            mothername,
            spouseName,
            employername,
            employerAddress,
            employerNumber,
            emergencyPerson,
            emergencyNumber,
            emergencyAddress,
            agencyCode,
            issueDate: issueDate.toDate(),
            expiryDate: expiryDate.toDate(),
            licenseType,
            skillAcquired,
            educationalAttainment,
            bloodtype,
            organDonor,
            eyeColor,
            applicationType,
            vehicleCategory,
            vehicleType,
            licenseCategory,
            clutchType,
            role: "user",
          })
            .then(() => {
              // clearFields();
              alert("Application Success!");
              navigate("/application");
              window.location.reload();
            })
            .catch((error) => alert(error.message));
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      const docRef = doc(db, "users", user.id);
      updateDoc(docRef, {
        firstname,
        lastname,
        middlename,
        username,
        presentAddress,
        phoneNumber,
        tin,
        nationality,
        email,
        password,
        pending: true,
        sex,
        birthdate: birthdate ? birthdate.toDate() : user.birthdate,
        height,
        weight,
        licenseNumber,
        civilStatus,
        birthplace,
        fathername,
        mothername,
        spouseName,
        employername,
        employerAddress,
        employerNumber,
        emergencyPerson,
        emergencyNumber,
        emergencyAddress,
        agencyCode,
        issueDate: issueDate ? issueDate.toDate() : user.issueDate,
        expiryDate: expiryDate ? expiryDate.toDate() : user.expiryDate,
        licenseType,
        skillAcquired,
        educationalAttainment,
        bloodtype,
        organDonor,
        eyeColor,
        applicationType,
        vehicleCategory,
        vehicleType,
        licenseCategory,
        clutchType,
        role: "user",
      })
        .then(() => {
          // clearFields();
          alert("Update Success!");
          navigate("/application");
          window.location.reload();
        })
        .catch((error) => alert(error.message));
    }
  };

  console.log("birthdate: ", birthdate);

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

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <section className="py-36">
      <Header />
      <SectionTitle title="Online Application" />
      {user && (
        <div className="flex items-center gap-2 justify-center text-lg font-semibold mb-4">
          <h1>Status:</h1>
          {user.pending && <h1>PENDING</h1>}
          {user.accepted && <h1>ACCEPTED</h1>}
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
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
                }}
              />
              {birthdate && (
                <h3>{moment(birthdate?.toDate()).format("MMMM Do YYYY")}</h3>
              )}
              {user?.birthdate && (
                <h3>
                  {moment(user.birthdate?.toDate()).format("MMMM Do YYYY")}
                </h3>
              )}
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
              {issueDate && (
                <h3>{moment(issueDate?.toDate()).format("MMMM Do YYYY")}</h3>
              )}
              {user?.issueDate && (
                <h3>
                  {moment(user.issueDate?.toDate()).format("MMMM Do YYYY")}
                </h3>
              )}
            </div>
            <div className="form-row">
              <label htmlFor="lastname">Expiry date</label>
              <DatePicker
                value={expiryDate}
                onChange={(date, dateString) => setExpiryDate(date)}
              />
              {expiryDate && (
                <h3>{moment(expiryDate?.toDate()).format("MMMM Do YYYY")}</h3>
              )}
              {user?.expiryDate && (
                <h3>
                  {moment(user.expiryDate?.toDate()).format("MMMM Do YYYY")}
                </h3>
              )}
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
                <option value="student">Student Drivers Permit (SP)</option>
                <option value="driver">Driver's License (DL)</option>
                <option value="conductor">Conductor's License (CL)</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="firstname">Driving skill acquired from</label>
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
              <label htmlFor="firstname">Highest educational attainment</label>
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
              {organDonor && (
                <div className="flex flex-wrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={all}
                      onChange={(e) => {
                        setAll(e.target.checked);
                        if (e.target.checked) {
                          setKidney(true);
                          setHeart(true);
                          setCornea(true);
                          setEyes(true);
                          setPancreas(true);
                          setLiver(true);
                          setLungs(true);
                          setBonea(true);
                          setSkins(true);
                        } else {
                          setKidney(false);
                          setHeart(false);
                          setCornea(false);
                          setEyes(false);
                          setPancreas(false);
                          setLiver(false);
                          setLungs(false);
                          setBonea(false);
                          setSkins(false);
                        }
                      }}
                    />
                    <p>All</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={kidney}
                      onChange={(e) => setKidney(e.target.checked)}
                    />
                    <p>Kidney</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={heart}
                      onChange={(e) => setHeart(e.target.checked)}
                    />
                    <p>Heart</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={cornea}
                      onChange={(e) => setCornea(e.target.checked)}
                    />
                    <p>Cornea</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={eyes}
                      onChange={(e) => setEyes(e.target.checked)}
                    />
                    <p>Eyes</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={pancreas}
                      onChange={(e) => setPancreas(e.target.checked)}
                    />
                    <p>Pancreas</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={liver}
                      onChange={(e) => setLiver(e.target.checked)}
                    />
                    <p>Liver</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={lungs}
                      onChange={(e) => setLungs(e.target.checked)}
                    />
                    <p>Lungs</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={bones}
                      onChange={(e) => setBonea(e.target.checked)}
                    />
                    <p>Bones</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={skins}
                      onChange={(e) => setSkins(e.target.checked)}
                    />
                    <p>Skins</p>
                  </div>
                </div>
              )}
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
                <option value="additional">Additional Code or category</option>
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
                <option value="articulated">ARTICULATED PASSENGER CARS</option>
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

          <div className="w-full flex flex-col items-center ">
            <button
              type="submit"
              className={`bg-secondary py-1 text-white w-80 rounded-sm mt-4 `}
            >
              {user ? "Update" : "Proceed"}
            </button>
          </div>
        </form>
        {!user && (
          <div className="mt-6">
            <h3>Already applied?</h3>
            <div></div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                className="text-input"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Password</label>
              <input
                required
                type="password"
                name="password"
                className="text-input"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className={`bg-secondary py-1 text-white w-80 rounded-sm`}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Application;
