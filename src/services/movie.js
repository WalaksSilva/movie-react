import api from './api';


const movie = {
    list: async () => {
        try {
            return await api.request.get('/movie/upcoming?api_key=723cbca9839f435c35870011238ba720&language=pt-BR');;
        } catch (error) {
            return error;
        }
    },
};

export default movie;