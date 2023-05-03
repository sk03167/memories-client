import axios from 'axios';

const url = 'http://localhost:5000/posts';

axios.get(url).then((res)=>console.log(res.data)); 
// console.log(fetchPosts);