import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/';
export default function searchImagesByQuery(query, page, perPage) {
        const axiosOptions = {
    params: {
      key: '45706921-daf09135eb1f07c679e77f1a2',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
      safesearch: true,
      page: page,
    per_page: perPage,
    }
  }

  return axios.get(
    '', axiosOptions
  )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       iziToast.error({
//         position: 'topRight',
//         message: `${error}`,
//       });
//     });
}