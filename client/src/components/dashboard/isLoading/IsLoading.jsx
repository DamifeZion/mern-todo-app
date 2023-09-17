import { useSelector } from "react-redux";
import {dashboardLoader} from '../../../assets/exportAssets'

const IsLoading = ({todoData, className}) => {

  return (
    <div
      className='flex items-center justify-center w-full h-full bg-black bg-opacity-50'
    >
      <img 
        className="w-8"
        src={dashboardLoader} 
        alt="Loading" 
      />
    </div>
  );
};

export default IsLoading;
