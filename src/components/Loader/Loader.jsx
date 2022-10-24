import { Puff } from 'react-loader-spinner';
import { LoaderThumb } from './Loader.styled';

const Loader = () => (
  <LoaderThumb>
    <Puff
      height="80"
      width="80"
      radisu={1}
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderThumb>
);

export { Loader };
