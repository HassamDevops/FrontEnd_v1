import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { grey } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';
import MenuBarClass from './MenuBar';
import SearchBarClass from './SearchBar';
//import backgroundVideo from './vid.mp4'
//import Bgvideo from './bgvideo';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    //borderBottom: `0.5px solid ${theme.palette.divider}`,
    backgroundColor: '#009688'//purple[500]
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  }, 
  menuBar : {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: grey[500],
    maxHeight: 45
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1.9),

  },
  searchBarBox : {
    backgroundColor: grey[300],
     padding: theme.spacing(3),
  },
  carouselItem:{
    backgroundColor: grey[300],
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.divider}`,
    minHeight: 200
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  backgroundVideo:{

    height: '50%',
    width: '50%',
    // float: 'left',
    left:'50%',
    top:'50%',
    // top: 0,
    // padding: 'none',
    position: 'absolute', /* optional depending on what you want to do in your app */
    objectFit:'cover',
    transform:'translate(-50%,-50%)',
    zIndex:'-1'
  
    
    },
 
}));

const tiers = [
  {
    title: 'title',
    price: '',
    description: ['10 users includedsss', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: '',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Categories',
    description: ['Technology', 'Heathcare', 'Supply Chain','Home Utilities', 'All Categories'],
  },
  // {
  //   title: 'Features',
  //   description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  // },
  {
    title: 'Support',
    description: ['IT Help Desk', 'Vendor Assessment', 'RFP Support'],
  },
  {
    title: 'Company',
    description: ['Contact Us', 'About Us'],
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function Pricing() {
  const classes = useStyles();
  return (

    <React.Fragment>
      <CssBaseline />
      <MenuBarClass classes={classes}/>    
      {/* Hero unit */}
    
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
          
        {/* <Bgvideo/> */}
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          Find the perfect services
        </Typography>
          <SearchBarClass classes={classes}/>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          
        </Typography>
      </Container>
      {/* End hero unit */}

      <Carousel responsive={responsive}>
        <div className={classes.carouselItem}>
          <Image src="https://source.unsplash.com/random"
          onClick={() => console.log('onClick')}
          aspectRatio={(16/9)}
          disableSpinner
          />
          Item 1
        </div>
       <div className={classes.carouselItem}>
          <Image src="https://source.unsplash.com/random"
          onClick={() => console.log('onClick')}
          aspectRatio={(16/9)}
          disableSpinner
          />
          Item 2
        </div>
        <div className={classes.carouselItem}>
          <Image src="https://source.unsplash.com/random"
          onClick={() => console.log('onClick')}
          aspectRatio={(16/9)}
          disableSpinner
          />
          Item 3
        </div>
        <div className={classes.carouselItem}>
          <Image src="https://source.unsplash.com/random"
          onClick={() => console.log('onClick')}
          aspectRatio={(16/9)}
          disableSpinner
          />
          Item 4
        </div>
      </Carousel>;
      
       <Grid item xs={12}>
          <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" component="p">
              Quickly build an effective pricing table for your potential customers with this layout.
              It&apos;s built with default Material-UI components with little customization.
            </Typography>
          </Container>
        </Grid>
        
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Pricing
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
              Quickly build an effective pricing table for your potential customers with this layout.
              It&apos;s built with default Material-UI components with little customization.
            </Typography>
          </Container>

           <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
              {tiers.map((tier) => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          /mo
                        </Typography>
                      </div>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} color="primary">
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
       
       
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
      {/* End hero unit */}
     {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="/contactus" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}