// for use when the backend is live

const apiurl = 'https://localhost:3000';

export const fetchClient = async (route) => {
  // fetches data from the api and is wrapped in a try/catch block
  // to handle any errors, if there is an error return the http status code and message
  try {
    const response = await fetch(`${apiurl}/${route}`);
    if (!response.ok) {
      return { status: response.status, message: response.statusText };
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};
