import React, { useState } from 'react';
import '../Styles/Upload.css';

const MAX_SIZE_MB = 10;

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setError('');
    const file = e.target.files[0];
    if (file && file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File size should be less than ${MAX_SIZE_MB} MB`);
      setSelectedFile(null);
      document.getElementById('fileInput').value = '';
      return;
    }
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploading(true);
      setProgress(0);
      // Simulate upload progress
      const interval = setInterval(() => {
        setProgress((old) => {
          if (old >= 100) {
            clearInterval(interval);
            setUploading(false);
            setUploadedFiles([...uploadedFiles, selectedFile]);
            setSelectedFile(null);
            document.getElementById('fileInput').value = '';
            return 100;
          }
          return old + 10;
        });
      }, 80);
    }
  };

  const totalSizeMB = (
    uploadedFiles.reduce((acc, file) => acc + file.size, 0) / (1024 * 1024)
  ).toFixed(2);

  return (
    <div className="upload-section">
      <h1>
        <span role="img" aria-label="upload">📤</span> Upload Notes
      </h1>
      <p className="upload-desc">
        Easily upload and manage your study notes. Supported formats: <b>PDF, DOCX, PPTX, Images</b>.<br />
        <span className="file-info">Max file size: {MAX_SIZE_MB} MB</span>
      </p>
      <div className="upload-controls">
        <input
          id="fileInput"
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          onChange={handleFileChange}
          disabled={uploading}
        />
        <button onClick={handleUpload} disabled={!selectedFile || uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      {error && <div className="upload-error">{error}</div>}
      {uploading && (
        <div className="progress-bar-outer">
          <div className="progress-bar-inner" style={{ width: `${progress}%` }} />
        </div>
      )}

      <div className="upload-summary">
        <span>
          <b>{uploadedFiles.length}</b> file{uploadedFiles.length !== 1 ? 's' : ''} uploaded
        </span>
        <span>
          <b>{totalSizeMB}</b> MB total
        </span>
      </div>

      <h2>Uploaded Files</h2>
      {uploadedFiles.length === 0 ? (
        <div className="no-files">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No files"
            width="90"
            style={{ opacity: 0.7, marginBottom: 10 }}
          />
          <div>No files uploaded yet. Start by uploading your first note!</div>
        </div>
      ) : (
        <ul className="uploaded-files-list">
          {uploadedFiles.map((file, idx) => (
            <li key={idx}>
              <span className="file-name">{file.name}</span>
              <div className="file-actions">
                <a
                  href={URL.createObjectURL(file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                >
                  View
                </a>
                <a
                  href={URL.createObjectURL(file)}
                  download={file.name}
                  className="download-link"
                >
                  Download
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Upload;