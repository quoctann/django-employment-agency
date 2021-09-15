// import React, { useEffect, useState } from 'react';
// import {
//   makeStyles,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   Divider,
//   Container,
// } from '@material-ui/core';
// import { MemoryRouter, Route } from 'react-router';
// import { Link } from 'react-router-dom';
// import Pagination from '@material-ui/lab/Pagination';
// import PaginationItem from '@material-ui/lab/PaginationItem';
// import API, { endpoints } from '../../helpers/API';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   item: {
//     backgroundColor: "gainsboro",
//     marginBottom: "10px",
//   },
// }));


// export default function Test() {
//   const classes = useStyles();
//   const [job, setJob] = useState([]);
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     API.get(endpoints['vieclams']).then(res => {
//       console.info(res.data.results)
//       setJob(res.data.results)
//     })
//   }, [])

//   return (
//     <Container maxWidth='sm'>
//       <MemoryRouter initialEntries={['/']} initialIndex={0}>
//         <Route>
//           {({ location }) => {
//             const query = new URLSearchParams(location.search);
//             const page = parseInt(query.get('page') || '1', 10);
//             return (
//               <Pagination
//                 page={page}
//                 count={10}
//                 renderItem={(item) => (
//                   <PaginationItem
//                     component={Link}
//                     to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
//                     {...item}
//                   />
//                 )}
//               />
//             );
//           }}
//         </Route>
//       </MemoryRouter>
//       <List className={classes.root}>
//         {job.map(j =>
//           <ListItem className={classes.item}>
//             <ListItemText
//               primary={
//                 <React.Fragment>
//                   <Typography variant="h6" >
//                     {/* <Link href="/NewDetail" onClick>
//                       {j.tieu_de}
//                     </Link> */}
//                     <Link to="/NewDetail">
//                       {j.tieu_de}
//                     </Link>
//                   </Typography>
//                 </React.Fragment>
//               }
//               secondary={
//                 <React.Fragment>
//                   <Typography variant="body1" >
//                     {j.nha_tuyen_dung}
//                   </Typography>

//                   <Typography variant="subtitle1" >
//                     {j.noi_dung}
//                   </Typography>
//                   <Typography variant="caption" display="block" >
//                     Cập nhập: {j.ngay_tao} - Bạn còn 5 ngày để ứng tuyển
//                   </Typography>
//                   <Divider />
//                 </React.Fragment>
//               } />
//           </ListItem>
//         )}

//       </List>

//     </Container>
//   );
// }




// export default class Test extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       'job': [],
//       'count': 0
//     }
//   }

//   loadData = (page = "?page=1") => {
//     API.get(`${endpoints['vieclams']}${page}`).then(res => {
//       // console.info(res.data.results,  ' res.state.results')
//       // console.info(this.state.count, ' count')
//       this.setState({
//         'job': res.data.results,
//         'count': res.data.count
//       })
//     })
//   }

//   componentDidMount() {
//     this.loadData()
//   }

//   componentDidUpdate() {
//     this.loadData(this.props.location.search)
//   }

//   render() {
//     return (
//       <Container maxWidth='sm'>
//         <div>count: {this.state.count}</div>
//         {this.state.job.map(j => <AJob job={j}/> )}
//       </Container>
//     );
//   }

// }

// class AJob extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.job.tieu_de}</h1>
//         <div>{this.props.job.noi_dung}</div>
//       </div>
//     );
//   }
// }







<List className={classes.root}>
        {loading ? <p>Loading ...</p> : (
          job.map((j, idx) => {
            return <ListItem className={classes.item} key={childViecLam.id}
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

          })


        )}
      </List>
    