import { useSelector, useDispatch } from 'react-redux';
import { deleteCar } from '../store/carSlice';

const List = () => {
  const dispatch = useDispatch();
  const allCars = useSelector((state) => state.car.cars);

  const deleteItem = (id) => {
    dispatch(deleteCar(id));

    //dispatch(deleteCar(id));
  };
  return (
    <div>
      {allCars.length > 0
        ? allCars.map((item) => (
            <div className="listItem" key={item.id}>
              <div>{item.brand}</div>
              <div>{item.model}</div>
              <div>{item.age}</div>
              <div>{item.category}</div>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          ))
        : null}
    </div>
  );
};

export default List;
