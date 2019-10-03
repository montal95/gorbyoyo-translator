import axios from "axios";

const API = {
  translateDorb: str => {
    axios.post({
      url:
        " https://72exx40653.execute-api.us-east-1.amazonaws.com/prod/translateEnglishToAlien",
      data: {
        textToTranslate: str
      }
    });
  }
};

export default API;