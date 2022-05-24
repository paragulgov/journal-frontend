import PopularApi from './PopularApi';

export default class PopularService {
  getPopular = async () => {
    const res = await PopularApi.getPopular();
    return res.data;
  };
}
