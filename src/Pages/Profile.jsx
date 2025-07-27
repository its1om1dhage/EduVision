import React, { useRef, useState } from 'react';
import '../Styles/Profile.css';

const initialProfile = {
  name: 'Om Dhage',
  email: 'om@example.com',
  phone: '+91 9579612946',
  country: 'India',
  state: 'Maharashtra',
  city: 'Nagpur',
  hobbies: ['Reading', 'Coding'],
  motherTongue: 'Marathi',
  photo: null,
};

const allHobbies = [
  'Reading', 'Coding', 'Music', 'Sports', 'Travel', 'Photography', 'Drawing', 'Gaming'
];

const languages = [
  'Hindi', 'English', 'Marathi', 'Gujarati', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Punjabi', 'Urdu'
];

const countries = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France'
];

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState(profile);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef();

  // Open modal and copy profile to editForm
  const handleEdit = () => {
    setEditForm(profile);
    setPhotoPreview(profile.photo ? URL.createObjectURL(profile.photo) : null);
    setEditMode(true);
  };

  // Handle input changes in modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleHobbyChange = (hobby) => {
    setEditForm((prev) => ({
      ...prev,
      hobbies: prev.hobbies.includes(hobby)
        ? prev.hobbies.filter((h) => h !== hobby)
        : [...prev.hobbies, hobby]
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditForm({ ...editForm, photo: file });
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  // Save changes
  const handleSave = (e) => {
    e.preventDefault();
    setProfile(editForm);
    setEditMode(false);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditMode(false);
    setPhotoPreview(profile.photo ? URL.createObjectURL(profile.photo) : null);
  };

  return (
    <div className="profile-section">
      <div className="profile-card">
        <div className="profile-photo">
          <img
            src={
              profile.photo
                ? URL.createObjectURL(profile.photo)
                : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            }
            alt="Profile"
          />
        </div>
        <div className="profile-details">
          <div className="profile-row"><label>Name:</label><span>{profile.name}</span></div>
          <div className="profile-row"><label>Email:</label><span>{profile.email}</span></div>
          <div className="profile-row"><label>Phone:</label><span>{profile.phone}</span></div>
          <div className="profile-row"><label>Country:</label><span>{profile.country}</span></div>
          <div className="profile-row"><label>State:</label><span>{profile.state}</span></div>
          <div className="profile-row"><label>City:</label><span>{profile.city}</span></div>
          <div className="profile-row"><label>Mother Tongue:</label><span>{profile.motherTongue}</span></div>
          <div className="profile-row"><label>Hobbies:</label><span>{profile.hobbies.join(', ')}</span></div>
        </div>
        <div className="profile-actions">
          <button type="button" className="edit-btn" onClick={handleEdit}>Edit Profile</button>
        </div>
      </div>
      <div className="profile-auth">
        <h2>Sign Up / Login</h2>
        <button className="auth-btn">Sign Up</button>
        <button className="auth-btn">Login</button>
      </div>

      {/* Modal for editing */}
      {editMode && (
        <div className="profile-modal-overlay">
          <div className="profile-modal">
            <form className="profile-edit-form" onSubmit={handleSave}>
              <div className="profile-photo edit">
                <img
                  src={
                    photoPreview
                      ? photoPreview
                      : editForm.photo
                      ? URL.createObjectURL(editForm.photo)
                      : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                  }
                  alt="Profile"
                  onClick={() => fileInputRef.current.click()}
                  className="editable"
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handlePhotoChange}
                />
                <div className="photo-hint">Click photo to change</div>
              </div>
              <div className="profile-row">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="profile-row">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="profile-row">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={editForm.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="profile-row">
                <label>Country:</label>
                <select name="country" value={editForm.country} onChange={handleChange}>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="profile-row">
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  value={editForm.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="profile-row">
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={editForm.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="profile-row">
                <label>Mother Tongue:</label>
                <select
                  name="motherTongue"
                  value={editForm.motherTongue}
                  onChange={handleChange}
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
              <div className="profile-row">
                <label>Hobbies:</label>
                <div className="hobbies-list">
                  {allHobbies.map((hobby) => (
                    <label key={hobby} className="hobby-checkbox">
                      <input
                        type="checkbox"
                        checked={editForm.hobbies.includes(hobby)}
                        onChange={() => handleHobbyChange(hobby)}
                      />
                      {hobby}
                    </label>
                  ))}
                </div>
              </div>
              <div className="profile-actions modal-actions">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;