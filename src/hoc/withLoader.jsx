import  { useEffect, useState } from "react";

const withLoader = (WrappedComponent, url) => {
  return function WithLoaderComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }, [url]);

    if (loading) return <p>Loading...</p>;

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withLoader
