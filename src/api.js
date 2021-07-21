// cablatone
const apiUrl = "http://localhost:8080/db/documents";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Basic " + btoa("root:root"),
};

export const getAllDocuments = async () => {
  const response = await fetch(apiUrl, { headers: headers });

  if (!response.ok) {
    throw new Error("Errore...........");
  }

  return response.json();
};

export const getDocument = async ({ queryKey }) => {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;
  const response = await fetch(apiUrl, { headers: headers });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const updateDocument = async ({ id, ...data }) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const createDocument = async ({ ...data }) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const removeDocument = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
    headers: headers
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};
