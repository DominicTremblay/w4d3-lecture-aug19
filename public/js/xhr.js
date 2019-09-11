const request = (method, url, async) => {
  // Create an XHR Request

  const xhr = new XMLHttpRequest();

  // opening the connection with the options
  xhr.open(method, url, async);

  // Issuing the request
  xhr.send();

  // event handler when the request is completed
  xhr.onload = () => {
    // checking the status of the response
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.response);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };

  // display the response
  // display the error
};
const url = 'http://jsonplaceholder.typicode.com/posts';

// calling the request fct
request('GET', url, true);
