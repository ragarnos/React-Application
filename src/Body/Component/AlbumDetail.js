import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
export const AlbumDetail = () => {

    const {id} = useParams()
    const [userDetail, setUserDetail] = useState(null)

    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/`);
        const newData = await response.json();
        const filterData = await newData.filter(item => item.userId === Number(id))
        setUserDetail(filterData);
      };
      fetchData();
      
    },[id]);
    
   
    return (
      <div>
        {
          (userDetail)
            ? (
              <>
              <h2>Album user</h2>
                <div className="flexRow">
                  {userDetail.map((item) => (
                    <div className="card">
                    <img src="/images/album.jpg" alt="album"></img>
                    <div className="card__content">
                      <p>ID: {item.id}</p>
                      <p>Title: <span>{item.title}</span></p>
                      <div className="card__btn">
                            <button><Link to={`/user/photos/${item.id}`}>Photo</Link></button>
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
              </>
            )
            : <h1>Загрузка</h1>
        }
      </div>
    )
  }