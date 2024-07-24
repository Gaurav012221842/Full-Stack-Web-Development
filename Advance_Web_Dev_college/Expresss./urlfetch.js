const https = require('https');
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];

async function fetchDataFromUrls(urls) {
  try {
    const data = [];
    for (const url of urls) data.push(await fetchData(url));
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => reject(error));
  });
}


fetchDataFromUrls(urls)
  .then(data => console.log('Data from URLs:', data))
  .catch(error => console.error('Failed to fetch data:', error));
