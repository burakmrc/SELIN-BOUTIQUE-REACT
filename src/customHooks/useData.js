import { useHistory } from 'react-router-dom';

function fetchDataAndNavigate() {
  const history = useHistory();

  const data = fetchYourData();

  history.push({
    pathname: '/datapage',
    state: { data: data },
  });
}