import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Container,
  Button,
} from '@material-ui/core';
import {
  useHistory, useLocation
} from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import API, { endpoints } from '../../helpers/API';
import { PublicRoutes } from '../../routes/public-route';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    backgroundColor: "gainsboro",
    marginBottom: "10px",
  },
}));

export default function Test() {
  const classes = useStyles();
  const [job, setJob] = useState([]);
  const [count, setCount] = useState(0);
  const history = useHistory();
  const [page, setPage] = React.useState(1);

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    // API.get(endpoints['vieclams']).then(res => {
    //   console.info(res.data.results)
    //   // setJobList(res.data.results)
    //   setJob(res.data.results)
    //   setCount(res.data.count)

    // })
    async function init() {
      setLoading(true)
      await fetchJobs()
    }
    init()
  }, [])

  const fetchJobs = async () => {
    setTimeout(() => {
      API.get(endpoints['vieclams']).then(res => {
        setJob(res.data.results)
        setCount(res.data.count)
        setLoading(false)
        // console.info('joblist: ', res.data.results)
      })
    }, 500);
  }

  const fetchJobsByPage = async (page) => {
    setTimeout(() => {
      const _path = `${endpoints['vieclams']}?page=${page}`
      API.get(_path).then(res => {
        setJob(res.data.results)
        setCount(res.data.count)
        setLoading(false)
        // console.info('joblist: ', res.data.results)
      })
    }, 500);
  }

  const handleJob_click = (j) => {
    // console.info('jobDetail_click: ', j)
    const _path = PublicRoutes.JobDetail.path.replace(":id", j.id)
    history.push(_path, {
      job: j,
    })
  };


  const handleChange = (event, value) => {
    console.info('page truoc:', page)
    setPage(value);
    // console.info('page sau:', page)
    // fetchJobsByPage(page);
  };

  const handlePage_click = (page) => {
    setPage(page);
  }


  return (

    <Container maxWidth='sm'>



      <div>count: {count}</div>
      <Typography>Page: {page}</Typography>
      <Pagination count={Math.ceil(count / 3)} page={page} onChange={handleChange} />

      {loading ? <p>Loading ...</p> : (
        job.map((j, idx) =>
          <ListItem className={classes.item} key={j.id + idx}
            button onClick={() => handleJob_click(j)} >
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography variant="h6" >
                    {j.tieu_de}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body1" >
                    {j.nha_tuyen_dung}
                  </Typography>

                  <Typography variant="subtitle1" >
                    {j.noi_dung}
                  </Typography>
                  <Typography variant="caption" display="block" >
                    Cập nhập: {j.ngay_tao} - Bạn còn 5 ngày để ứng tuyển
                  </Typography>
                  <Divider />
                </React.Fragment>
              } />
          </ListItem>

        )
      )}

    </Container>


  );
}
