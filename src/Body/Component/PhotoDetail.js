import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
export const PhotoDetail = () => {

    const {id} = useParams()
    const [PhotoDetails, setPhotoDetail] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/`);
        const newData = await response.json();
        const filterData = newData.filter(item => item.albumId === Number(id))
        setPhotoDetail(filterData);
      };
      fetchData();
    },[id]);
    return (
      <div>
        {
          (PhotoDetails)
            ? (
              <>
              <h2>Photo album</h2>
                <div className="flexRow">
                  {PhotoDetails.map((item) => (
                    <a href={item.url}>
                      <div className="card">
                        <img src={item.thumbnailUrl} alt="album"></img>
                        <div className="card__content">
                          <p>Title: <span>{item.title}</span></p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            )
            : <h1>Загрузка</h1>
        }
      </div>
    )
  }