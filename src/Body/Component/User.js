import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function Users() {
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
    }, [])
  
      return (
        <div className="flexRow">
          {items.map((item) => (
            <div className="card">
            <img src="/images/img_avatar.png" alt="Avatar"></img>
                <div className="card__btn">
                    <button><Link to={`/user/album/${item.id}`}>Album1</Link></button>
                    {/* <button><Link to={`photos/${item.id}`}>Photos</Link></button> */}
                </div>
            </div>
          ))}
        </div>
      );
    }
