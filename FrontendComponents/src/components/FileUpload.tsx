import React, { useState } from "react";

const MAX_FILE_SIZE_MB = 5; // 限制文件大小为 5 MB

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState("");

  // 处理文件选择
  const handleFileChange = (event) => {
    console.log(event.target);
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // 检查文件大小
      if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(`文件大小不能超过 ${MAX_FILE_SIZE_MB} MB`);
        setFile(null);
      } else {
        setFile(selectedFile);
        setError("");
      }
    }
  };

  // 处理文件上传
  const handleFileUpload = async () => {
    if (!file) {
      setUploadStatus("请先选择一个文件。");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://reqres.in/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setUploadStatus(`上传成功: ${result.message}`);
      } else {
        setUploadStatus(`上传失败: ${response.statusText}`);
      }
    } catch (error) {
      setUploadStatus(`上传失败: ${error.message}`);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={!file}>
        上传
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>{uploadStatus}</p>
    </div>
  );
}

export default FileUpload;
